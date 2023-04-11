import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metrics for an hour.
 */
export declare class HourlyMetrics extends SpeakeasyBase {
    /**
     * Hour of the day. Allowed values are 0-23.
     */
    hour?: number;
    /**
     * Total count of missed calls for this hour.
     */
    missedCallsCount?: number;
}
