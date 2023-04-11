import { SpeakeasyBase } from "../../../internal/utils";
import { NumericValue } from "./numericvalue";
/**
 * The operation type for this filter.
 */
export declare enum NumericFilterOperationEnum {
    OperationUnspecified = "OPERATION_UNSPECIFIED",
    Equal = "EQUAL",
    LessThan = "LESS_THAN",
    LessThanOrEqual = "LESS_THAN_OR_EQUAL",
    GreaterThan = "GREATER_THAN",
    GreaterThanOrEqual = "GREATER_THAN_OR_EQUAL"
}
/**
 * Filters for numeric or date values.
 */
export declare class NumericFilter extends SpeakeasyBase {
    /**
     * The operation type for this filter.
     */
    operation?: NumericFilterOperationEnum;
    /**
     * To represent a number.
     */
    value?: NumericValue;
}
