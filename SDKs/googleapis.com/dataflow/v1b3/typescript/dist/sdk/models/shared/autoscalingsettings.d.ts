import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The algorithm to use for autoscaling.
 */
export declare enum AutoscalingSettingsAlgorithmEnum {
    AutoscalingAlgorithmUnknown = "AUTOSCALING_ALGORITHM_UNKNOWN",
    AutoscalingAlgorithmNone = "AUTOSCALING_ALGORITHM_NONE",
    AutoscalingAlgorithmBasic = "AUTOSCALING_ALGORITHM_BASIC"
}
/**
 * Settings for WorkerPool autoscaling.
 */
export declare class AutoscalingSettings extends SpeakeasyBase {
    /**
     * The algorithm to use for autoscaling.
     */
    algorithm?: AutoscalingSettingsAlgorithmEnum;
    /**
     * The maximum number of workers to cap scaling at.
     */
    maxNumWorkers?: number;
}
