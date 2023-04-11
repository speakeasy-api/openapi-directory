import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Allows autoscaling based on Stackdriver metrics.
 */
export declare class CustomMetric extends SpeakeasyBase {
    /**
     * Allows filtering on the metric's fields.
     */
    filter?: string;
    /**
     * The name of the metric.
     */
    metricName?: string;
    /**
     * May be used instead of target_utilization when an instance can handle a specific amount of work/resources and the metric value is equal to the current amount of work remaining. The autoscaler will try to keep the number of instances equal to the metric value divided by single_instance_assignment.
     */
    singleInstanceAssignment?: number;
    /**
     * The type of the metric. Must be a string representing a Stackdriver metric type e.g. GAGUE, DELTA_PER_SECOND, etc.
     */
    targetType?: string;
    /**
     * The target value for the metric.
     */
    targetUtilization?: number;
}
