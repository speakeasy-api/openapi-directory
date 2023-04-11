import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The operator to use to match the dimension with the expressions.
 */
export declare enum SegmentDimensionFilterOperatorEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED",
    Regexp = "REGEXP",
    BeginsWith = "BEGINS_WITH",
    EndsWith = "ENDS_WITH",
    Partial = "PARTIAL",
    Exact = "EXACT",
    InList = "IN_LIST",
    NumericLessThan = "NUMERIC_LESS_THAN",
    NumericGreaterThan = "NUMERIC_GREATER_THAN",
    NumericBetween = "NUMERIC_BETWEEN"
}
/**
 * Dimension filter specifies the filtering options on a dimension.
 */
export declare class SegmentDimensionFilter extends SpeakeasyBase {
    /**
     * Should the match be case sensitive, ignored for `IN_LIST` operator.
     */
    caseSensitive?: boolean;
    /**
     * Name of the dimension for which the filter is being applied.
     */
    dimensionName?: string;
    /**
     * The list of expressions, only the first element is used for all operators
     */
    expressions?: string[];
    /**
     * Maximum comparison values for `BETWEEN` match type.
     */
    maxComparisonValue?: string;
    /**
     * Minimum comparison values for `BETWEEN` match type.
     */
    minComparisonValue?: string;
    /**
     * The operator to use to match the dimension with the expressions.
     */
    operator?: SegmentDimensionFilterOperatorEnum;
}
