import { SpeakeasyBase } from "../../../internal/utils";
import { CustomViewabilityMetricConfiguration } from "./customviewabilitymetricconfiguration";
/**
 * Custom Viewability Metric
 */
export declare class CustomViewabilityMetric extends SpeakeasyBase {
    /**
     * The attributes, like playtime and percent onscreen, that define the Custom Viewability Metric.
     */
    configuration?: CustomViewabilityMetricConfiguration;
    /**
     * ID of the custom viewability metric.
     */
    id?: string;
    /**
     * Name of the custom viewability metric.
     */
    name?: string;
}
