import { SpeakeasyBase } from "../../../internal/utils";
/**
 * How to match the dimension to the expression. The default is REGEXP.
 */
export declare enum DimensionFilterOperatorEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED",
    Regexp = "REGEXP",
    BeginsWith = "BEGINS_WITH",
    EndsWith = "ENDS_WITH",
    Partial = "PARTIAL",
    Exact = "EXACT",
    NumericEqual = "NUMERIC_EQUAL",
    NumericGreaterThan = "NUMERIC_GREATER_THAN",
    NumericLessThan = "NUMERIC_LESS_THAN",
    InList = "IN_LIST"
}
/**
 * Dimension filter specifies the filtering options on a dimension.
 */
export declare class DimensionFilter extends SpeakeasyBase {
    /**
     * Should the match be case sensitive? Default is false.
     */
    caseSensitive?: boolean;
    /**
     * The dimension to filter on. A DimensionFilter must contain a dimension.
     */
    dimensionName?: string;
    /**
     * Strings or regular expression to match against. Only the first value of the list is used for comparison unless the operator is `IN_LIST`. If `IN_LIST` operator, then the entire list is used to filter the dimensions as explained in the description of the `IN_LIST` operator.
     */
    expressions?: string[];
    /**
     * Logical `NOT` operator. If this boolean is set to true, then the matching dimension values will be excluded in the report. The default is false.
     */
    not?: boolean;
    /**
     * How to match the dimension to the expression. The default is REGEXP.
     */
    operator?: DimensionFilterOperatorEnum;
}
