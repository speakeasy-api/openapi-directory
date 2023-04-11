import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An input of an instruction, as a reference to an output of a producer instruction.
 */
export declare class InstructionInput extends SpeakeasyBase {
    /**
     * The output index (origin zero) within the producer.
     */
    outputNum?: number;
    /**
     * The index (origin zero) of the parallel instruction that produces the output to be consumed by this input. This index is relative to the list of instructions in this input's instruction's containing MapTask.
     */
    producerInstructionIndex?: number;
}
