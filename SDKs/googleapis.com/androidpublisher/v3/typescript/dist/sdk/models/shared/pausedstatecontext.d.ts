import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information specific to a subscription in paused state.
 */
export declare class PausedStateContext extends SpeakeasyBase {
    /**
     * Time at which the subscription will be automatically resumed.
     */
    autoResumeTime?: string;
}
