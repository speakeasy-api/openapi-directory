import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Determines how the 'value' field is matched when filtering. If not specified, defaults to EXACT. If set to WILDCARD_EXPRESSION, '*' is allowed as a placeholder for variable length character sequences, and it can be escaped with a backslash. Note, only paid search dimensions ('dfa:paidSearch*') allow a matchType other than EXACT.
 */
export declare enum DimensionValueMatchTypeEnum {
    Exact = "EXACT",
    BeginsWith = "BEGINS_WITH",
    Contains = "CONTAINS",
    WildcardExpression = "WILDCARD_EXPRESSION"
}
/**
 * Represents a DimensionValue resource.
 */
export declare class DimensionValue extends SpeakeasyBase {
    /**
     * The name of the dimension.
     */
    dimensionName?: string;
    /**
     * The eTag of this response for caching purposes.
     */
    etag?: string;
    /**
     * The ID associated with the value if available.
     */
    id?: string;
    /**
     * The kind of resource this is, in this case dfareporting#dimensionValue.
     */
    kind?: string;
    /**
     * Determines how the 'value' field is matched when filtering. If not specified, defaults to EXACT. If set to WILDCARD_EXPRESSION, '*' is allowed as a placeholder for variable length character sequences, and it can be escaped with a backslash. Note, only paid search dimensions ('dfa:paidSearch*') allow a matchType other than EXACT.
     */
    matchType?: DimensionValueMatchTypeEnum;
    /**
     * The value of the dimension.
     */
    value?: string;
}
