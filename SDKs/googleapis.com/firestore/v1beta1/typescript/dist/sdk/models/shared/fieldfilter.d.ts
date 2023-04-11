import { SpeakeasyBase } from "../../../internal/utils";
import { FieldReference } from "./fieldreference";
import { Value } from "./value";
/**
 * The operator to filter by.
 */
export declare enum FieldFilterOpEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED",
    LessThan = "LESS_THAN",
    LessThanOrEqual = "LESS_THAN_OR_EQUAL",
    GreaterThan = "GREATER_THAN",
    GreaterThanOrEqual = "GREATER_THAN_OR_EQUAL",
    Equal = "EQUAL",
    NotEqual = "NOT_EQUAL",
    ArrayContains = "ARRAY_CONTAINS",
    In = "IN",
    ArrayContainsAny = "ARRAY_CONTAINS_ANY",
    NotIn = "NOT_IN"
}
/**
 * A filter on a specific field.
 */
export declare class FieldFilter extends SpeakeasyBase {
    /**
     * A reference to a field in a document, ex: `stats.operations`.
     */
    field?: FieldReference;
    /**
     * The operator to filter by.
     */
    op?: FieldFilterOpEnum;
    /**
     * A message that can hold any of the supported value types.
     */
    value?: Value;
}
