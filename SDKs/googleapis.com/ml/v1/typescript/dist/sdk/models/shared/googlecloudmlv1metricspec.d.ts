import { SpeakeasyBase } from "../../../internal/utils";
/**
 * metric name.
 */
export declare enum GoogleCloudMlV1MetricSpecNameEnum {
    MetricNameUnspecified = "METRIC_NAME_UNSPECIFIED",
    CpuUsage = "CPU_USAGE",
    GpuDutyCycle = "GPU_DUTY_CYCLE"
}
/**
 * MetricSpec contains the specifications to use to calculate the desired nodes count when autoscaling is enabled.
 */
export declare class GoogleCloudMlV1MetricSpec extends SpeakeasyBase {
    /**
     * metric name.
     */
    name?: GoogleCloudMlV1MetricSpecNameEnum;
    /**
     * Target specifies the target value for the given metric; once real metric deviates from the threshold by a certain percentage, the node count changes.
     */
    target?: number;
}
