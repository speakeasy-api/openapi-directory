import { SpeakeasyBase } from "../../../internal/utils";
import { InstructionInput } from "./instructioninput";
import { MultiOutputInfo } from "./multioutputinfo";
import { SideInputInfo } from "./sideinputinfo";
/**
 * An instruction that does a ParDo operation. Takes one main input and zero or more side inputs, and produces zero or more outputs. Runs user code.
 */
export declare class ParDoInstruction extends SpeakeasyBase {
    /**
     * An input of an instruction, as a reference to an output of a producer instruction.
     */
    input?: InstructionInput;
    /**
     * Information about each of the outputs, if user_fn is a MultiDoFn.
     */
    multiOutputInfos?: MultiOutputInfo[];
    /**
     * The number of outputs.
     */
    numOutputs?: number;
    /**
     * Zero or more side inputs.
     */
    sideInputs?: SideInputInfo[];
    /**
     * The user function to invoke.
     */
    userFn?: Record<string, any>;
}
