import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Frequency Cap.
 */
export declare class FrequencyCap extends SpeakeasyBase {
    /**
     * Duration of time, in seconds, for this frequency cap. The maximum duration is 90 days. Acceptable values are 1 to 7776000, inclusive.
     */
    duration?: string;
    /**
     * Number of times an individual user can be served the ad within the specified duration. Acceptable values are 1 to 15, inclusive.
     */
    impressions?: string;
}
