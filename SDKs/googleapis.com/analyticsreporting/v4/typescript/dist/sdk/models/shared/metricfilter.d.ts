import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Is the metric `EQUAL`, `LESS_THAN` or `GREATER_THAN` the comparisonValue, the default is `EQUAL`. If the operator is `IS_MISSING`, checks if the metric is missing and would ignore the comparisonValue.
 */
export declare enum MetricFilterOperatorEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED",
    Equal = "EQUAL",
    LessThan = "LESS_THAN",
    GreaterThan = "GREATER_THAN",
    IsMissing = "IS_MISSING"
}
/**
 * MetricFilter specifies the filter on a metric.
 */
export declare class MetricFilter extends SpeakeasyBase {
    /**
     * The value to compare against.
     */
    comparisonValue?: string;
    /**
     * The metric that will be filtered on. A metricFilter must contain a metric name. A metric name can be an alias earlier defined as a metric or it can also be a metric expression.
     */
    metricName?: string;
    /**
     * Logical `NOT` operator. If this boolean is set to true, then the matching metric values will be excluded in the report. The default is false.
     */
    not?: boolean;
    /**
     * Is the metric `EQUAL`, `LESS_THAN` or `GREATER_THAN` the comparisonValue, the default is `EQUAL`. If the operator is `IS_MISSING`, checks if the metric is missing and would ignore the comparisonValue.
     */
    operator?: MetricFilterOperatorEnum;
}
