import { SpeakeasyBase } from "../../../internal/utils";
import { InstructionInput } from "./instructioninput";
import { SideInputInfo } from "./sideinputinfo";
/**
 * An instruction that does a partial group-by-key. One input and one output.
 */
export declare class PartialGroupByKeyInstruction extends SpeakeasyBase {
    /**
     * An input of an instruction, as a reference to an output of a producer instruction.
     */
    input?: InstructionInput;
    /**
     * The codec to use for interpreting an element in the input PTable.
     */
    inputElementCodec?: Record<string, any>;
    /**
     * If this instruction includes a combining function this is the name of the intermediate store between the GBK and the CombineValues.
     */
    originalCombineValuesInputStoreName?: string;
    /**
     * If this instruction includes a combining function, this is the name of the CombineValues instruction lifted into this instruction.
     */
    originalCombineValuesStepName?: string;
    /**
     * Zero or more side inputs.
     */
    sideInputs?: SideInputInfo[];
    /**
     * The value combining function to invoke.
     */
    valueCombiningFn?: Record<string, any>;
}
