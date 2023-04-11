import { SpeakeasyBase } from "../../../internal/utils";
import { PropertyReference } from "./propertyreference";
import { Value } from "./value";
/**
 * The operator to filter by.
 */
export declare enum PropertyFilterOpEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED",
    LessThan = "LESS_THAN",
    LessThanOrEqual = "LESS_THAN_OR_EQUAL",
    GreaterThan = "GREATER_THAN",
    GreaterThanOrEqual = "GREATER_THAN_OR_EQUAL",
    Equal = "EQUAL",
    In = "IN",
    NotEqual = "NOT_EQUAL",
    HasAncestor = "HAS_ANCESTOR",
    NotIn = "NOT_IN"
}
/**
 * A filter on a specific property.
 */
export declare class PropertyFilter extends SpeakeasyBase {
    /**
     * The operator to filter by.
     */
    op?: PropertyFilterOpEnum;
    /**
     * A reference to a property relative to the kind expressions.
     */
    property?: PropertyReference;
    /**
     * A message that can hold any of the supported value types and associated metadata.
     */
    value?: Value;
}
