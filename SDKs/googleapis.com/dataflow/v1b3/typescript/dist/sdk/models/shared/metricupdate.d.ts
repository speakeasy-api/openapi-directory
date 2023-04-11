import { SpeakeasyBase } from "../../../internal/utils";
import { MetricStructuredName } from "./metricstructuredname";
/**
 * Describes the state of a metric.
 */
export declare class MetricUpdate extends SpeakeasyBase {
    /**
     * True if this metric is reported as the total cumulative aggregate value accumulated since the worker started working on this WorkItem. By default this is false, indicating that this metric is reported as a delta that is not associated with any WorkItem.
     */
    cumulative?: boolean;
    /**
     * A struct value describing properties of a distribution of numeric values.
     */
    distribution?: any;
    /**
     * A struct value describing properties of a Gauge. Metrics of gauge type show the value of a metric across time, and is aggregated based on the newest value.
     */
    gauge?: any;
    /**
     * Worker-computed aggregate value for internal use by the Dataflow service.
     */
    internal?: any;
    /**
     * Metric aggregation kind. The possible metric aggregation kinds are "Sum", "Max", "Min", "Mean", "Set", "And", "Or", and "Distribution". The specified aggregation kind is case-insensitive. If omitted, this is not an aggregated value but instead a single metric sample value.
     */
    kind?: string;
    /**
     * Worker-computed aggregate value for the "Mean" aggregation kind. This holds the count of the aggregated values and is used in combination with mean_sum above to obtain the actual mean aggregate value. The only possible value type is Long.
     */
    meanCount?: any;
    /**
     * Worker-computed aggregate value for the "Mean" aggregation kind. This holds the sum of the aggregated values and is used in combination with mean_count below to obtain the actual mean aggregate value. The only possible value types are Long and Double.
     */
    meanSum?: any;
    /**
     * Identifies a metric, by describing the source which generated the metric.
     */
    name?: MetricStructuredName;
    /**
     * Worker-computed aggregate value for aggregation kinds "Sum", "Max", "Min", "And", and "Or". The possible value types are Long, Double, and Boolean.
     */
    scalar?: any;
    /**
     * Worker-computed aggregate value for the "Set" aggregation kind. The only possible value type is a list of Values whose type can be Long, Double, or String, according to the metric's type. All Values in the list must be of the same type.
     */
    set?: any;
    /**
     * Timestamp associated with the metric value. Optional when workers are reporting work progress; it will be filled in responses from the metrics API.
     */
    updateTime?: string;
}
