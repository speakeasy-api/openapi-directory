import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies is the operation to perform to compare the metric. The default is `EQUAL`.
 */
export declare enum SegmentMetricFilterOperatorEnum {
    UnspecifiedOperator = "UNSPECIFIED_OPERATOR",
    LessThan = "LESS_THAN",
    GreaterThan = "GREATER_THAN",
    Equal = "EQUAL",
    Between = "BETWEEN"
}
/**
 * Scope for a metric defines the level at which that metric is defined. The specified metric scope must be equal to or greater than its primary scope as defined in the data model. The primary scope is defined by if the segment is selecting users or sessions.
 */
export declare enum SegmentMetricFilterScopeEnum {
    UnspecifiedScope = "UNSPECIFIED_SCOPE",
    Product = "PRODUCT",
    Hit = "HIT",
    Session = "SESSION",
    User = "USER"
}
/**
 * Metric filter to be used in a segment filter clause.
 */
export declare class SegmentMetricFilter extends SpeakeasyBase {
    /**
     * The value to compare against. If the operator is `BETWEEN`, this value is treated as minimum comparison value.
     */
    comparisonValue?: string;
    /**
     * Max comparison value is only used for `BETWEEN` operator.
     */
    maxComparisonValue?: string;
    /**
     * The metric that will be filtered on. A `metricFilter` must contain a metric name.
     */
    metricName?: string;
    /**
     * Specifies is the operation to perform to compare the metric. The default is `EQUAL`.
     */
    operator?: SegmentMetricFilterOperatorEnum;
    /**
     * Scope for a metric defines the level at which that metric is defined. The specified metric scope must be equal to or greater than its primary scope as defined in the data model. The primary scope is defined by if the segment is selecting users or sessions.
     */
    scope?: SegmentMetricFilterScopeEnum;
}
