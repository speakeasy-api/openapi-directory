import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateFailureState extends SpeakeasyBase {
    /**
     * Details about the last failed update attempt.
     */
    details?: string;
    /**
     * What the component configuration would have been if the update had succeeded.
     */
    failedConfiguration?: Record<string, any>;
    /**
     * Time of the latest failed update attempt.
     */
    lastUpdateAttempt?: string;
}
