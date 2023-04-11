import { SpeakeasyBase } from "../../../internal/utils";
import { InstructionInput } from "./instructioninput";
import { Sink } from "./sink";
/**
 * An instruction that writes records. Takes one input, produces no outputs.
 */
export declare class WriteInstruction extends SpeakeasyBase {
    /**
     * An input of an instruction, as a reference to an output of a producer instruction.
     */
    input?: InstructionInput;
    /**
     * A sink that records can be encoded and written to.
     */
    sink?: Sink;
}
