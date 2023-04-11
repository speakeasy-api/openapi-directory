import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The attributes, like playtime and percent onscreen, that define the Custom Viewability Metric.
 */
export declare class CustomViewabilityMetricConfiguration extends SpeakeasyBase {
    /**
     * Whether the video must be audible to count an impression.
     */
    audible?: boolean;
    /**
     * The time in milliseconds the video must play for the Custom Viewability Metric to count an impression. If both this and timePercent are specified, the earlier of the two will be used.
     */
    timeMillis?: number;
    /**
     * The percentage of video that must play for the Custom Viewability Metric to count an impression. If both this and timeMillis are specified, the earlier of the two will be used.
     */
    timePercent?: number;
    /**
     * The percentage of video that must be on screen for the Custom Viewability Metric to count an impression.
     */
    viewabilityPercent?: number;
}
