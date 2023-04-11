import { SpeakeasyBase } from "../../../internal/utils";
import { MetricFilter } from "./metricfilter";
/**
 * The operator for combining multiple metric filters. If unspecified, it is treated as an `OR`.
 */
export declare enum MetricFilterClauseOperatorEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED",
    Or = "OR",
    And = "AND"
}
/**
 * Represents a group of metric filters. Set the operator value to specify how the filters are logically combined.
 */
export declare class MetricFilterClause extends SpeakeasyBase {
    /**
     * The repeated set of filters. They are logically combined based on the operator specified.
     */
    filters?: MetricFilter[];
    /**
     * The operator for combining multiple metric filters. If unspecified, it is treated as an `OR`.
     */
    operator?: MetricFilterClauseOperatorEnum;
}
