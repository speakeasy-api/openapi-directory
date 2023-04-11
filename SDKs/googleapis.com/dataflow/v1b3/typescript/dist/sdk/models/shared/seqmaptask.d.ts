import { SpeakeasyBase } from "../../../internal/utils";
import { SeqMapTaskOutputInfo } from "./seqmaptaskoutputinfo";
import { SideInputInfo } from "./sideinputinfo";
/**
 * Describes a particular function to invoke.
 */
export declare class SeqMapTask extends SpeakeasyBase {
    /**
     * Information about each of the inputs.
     */
    inputs?: SideInputInfo[];
    /**
     * The user-provided name of the SeqDo operation.
     */
    name?: string;
    /**
     * Information about each of the outputs.
     */
    outputInfos?: SeqMapTaskOutputInfo[];
    /**
     * System-defined name of the stage containing the SeqDo operation. Unique across the workflow.
     */
    stageName?: string;
    /**
     * System-defined name of the SeqDo operation. Unique across the workflow.
     */
    systemName?: string;
    /**
     * The user function to invoke.
     */
    userFn?: Record<string, any>;
}
