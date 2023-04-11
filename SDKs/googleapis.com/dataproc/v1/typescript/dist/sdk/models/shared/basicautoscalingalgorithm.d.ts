import { SpeakeasyBase } from "../../../internal/utils";
import { BasicYarnAutoscalingConfig } from "./basicyarnautoscalingconfig";
import { SparkStandaloneAutoscalingConfig } from "./sparkstandaloneautoscalingconfig";
/**
 * Basic algorithm for autoscaling.
 */
export declare class BasicAutoscalingAlgorithm extends SpeakeasyBase {
    /**
     * Optional. Duration between scaling events. A scaling period starts after the update operation from the previous event has completed.Bounds: 2m, 1d. Default: 2m.
     */
    cooldownPeriod?: string;
    /**
     * Basic autoscaling configurations for Spark Standalone.
     */
    sparkStandaloneConfig?: SparkStandaloneAutoscalingConfig;
    /**
     * Basic autoscaling configurations for YARN.
     */
    yarnConfig?: BasicYarnAutoscalingConfig;
}
