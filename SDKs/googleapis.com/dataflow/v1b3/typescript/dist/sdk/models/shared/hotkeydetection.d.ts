import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Proto describing a hot key detected on a given WorkItem.
 */
export declare class HotKeyDetection extends SpeakeasyBase {
    /**
     * The age of the hot key measured from when it was first detected.
     */
    hotKeyAge?: string;
    /**
     * System-defined name of the step containing this hot key. Unique across the workflow.
     */
    systemName?: string;
    /**
     * User-provided name of the step that contains this hot key.
     */
    userStepName?: string;
}
