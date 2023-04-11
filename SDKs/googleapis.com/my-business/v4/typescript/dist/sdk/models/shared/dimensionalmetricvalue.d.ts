import { SpeakeasyBase } from "../../../internal/utils";
import { TimeDimension } from "./timedimension";
/**
 * The option that requested this dimensional value.
 */
export declare enum DimensionalMetricValueMetricOptionEnum {
    MetricOptionUnspecified = "METRIC_OPTION_UNSPECIFIED",
    AggregatedTotal = "AGGREGATED_TOTAL",
    AggregatedDaily = "AGGREGATED_DAILY",
    BreakdownDayOfWeek = "BREAKDOWN_DAY_OF_WEEK",
    BreakdownHourOfDay = "BREAKDOWN_HOUR_OF_DAY"
}
/**
 * A value for a single metric with a given time dimension.
 */
export declare class DimensionalMetricValue extends SpeakeasyBase {
    /**
     * The option that requested this dimensional value.
     */
    metricOption?: DimensionalMetricValueMetricOptionEnum;
    /**
     * The dimension for which data is divided over.
     */
    timeDimension?: TimeDimension;
    /**
     * The value. If no value is set, then the requested data is missing.
     */
    value?: string;
}
