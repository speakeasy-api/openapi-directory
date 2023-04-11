import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a step of the workflow this execution is running.
 */
export declare class Step extends SpeakeasyBase {
    /**
     * Name of a routine within the workflow.
     */
    routine?: string;
    /**
     * Name of a step within the routine.
     */
    step?: string;
}
