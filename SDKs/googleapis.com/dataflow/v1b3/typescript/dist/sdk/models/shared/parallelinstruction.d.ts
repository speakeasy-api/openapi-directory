import { SpeakeasyBase } from "../../../internal/utils";
import { FlattenInstruction } from "./flatteninstruction";
import { InstructionOutput } from "./instructionoutput";
import { ParDoInstruction } from "./pardoinstruction";
import { PartialGroupByKeyInstruction } from "./partialgroupbykeyinstruction";
import { ReadInstruction } from "./readinstruction";
import { WriteInstruction } from "./writeinstruction";
/**
 * Describes a particular operation comprising a MapTask.
 */
export declare class ParallelInstruction extends SpeakeasyBase {
    /**
     * An instruction that copies its inputs (zero or more) to its (single) output.
     */
    flatten?: FlattenInstruction;
    /**
     * User-provided name of this operation.
     */
    name?: string;
    /**
     * System-defined name for the operation in the original workflow graph.
     */
    originalName?: string;
    /**
     * Describes the outputs of the instruction.
     */
    outputs?: InstructionOutput[];
    /**
     * An instruction that does a ParDo operation. Takes one main input and zero or more side inputs, and produces zero or more outputs. Runs user code.
     */
    parDo?: ParDoInstruction;
    /**
     * An instruction that does a partial group-by-key. One input and one output.
     */
    partialGroupByKey?: PartialGroupByKeyInstruction;
    /**
     * An instruction that reads records. Takes no inputs, produces one output.
     */
    read?: ReadInstruction;
    /**
     * System-defined name of this operation. Unique across the workflow.
     */
    systemName?: string;
    /**
     * An instruction that writes records. Takes one input, produces no outputs.
     */
    write?: WriteInstruction;
}
