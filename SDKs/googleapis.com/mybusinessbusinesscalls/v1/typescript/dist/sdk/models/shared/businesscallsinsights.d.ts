import { SpeakeasyBase } from "../../../internal/utils";
import { AggregateMetrics } from "./aggregatemetrics";
/**
 * The metric for which the value applies.
 */
export declare enum BusinessCallsInsightsMetricTypeEnum {
    MetricTypeUnspecified = "METRIC_TYPE_UNSPECIFIED",
    AggregateCount = "AGGREGATE_COUNT"
}
/**
 * Insights for calls made to a location.
 */
export declare class BusinessCallsInsights extends SpeakeasyBase {
    /**
     * Metrics aggregated over the input time range.
     */
    aggregateMetrics?: AggregateMetrics;
    /**
     * The metric for which the value applies.
     */
    metricType?: BusinessCallsInsightsMetricTypeEnum;
    /**
     * Required. The resource name of the calls insights. Format: locations/{location}/businesscallsinsights
     */
    name?: string;
}
