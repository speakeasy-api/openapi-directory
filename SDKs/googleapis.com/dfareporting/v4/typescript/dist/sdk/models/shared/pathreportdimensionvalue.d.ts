import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Determines how the 'value' field is matched when filtering. If not specified, defaults to EXACT. If set to WILDCARD_EXPRESSION, '*' is allowed as a placeholder for variable length character sequences, and it can be escaped with a backslash. Note, only paid search dimensions ('dfa:paidSearch*') allow a matchType other than EXACT.
 */
export declare enum PathReportDimensionValueMatchTypeEnum {
    Exact = "EXACT",
    BeginsWith = "BEGINS_WITH",
    Contains = "CONTAINS",
    WildcardExpression = "WILDCARD_EXPRESSION"
}
/**
 * Represents a PathReportDimensionValue resource.
 */
export declare class PathReportDimensionValue extends SpeakeasyBase {
    /**
     * The name of the dimension.
     */
    dimensionName?: string;
    /**
     * The possible ID's associated with the value if available.
     */
    ids?: string[];
    /**
     * The kind of resource this is, in this case dfareporting#pathReportDimensionValue.
     */
    kind?: string;
    /**
     * Determines how the 'value' field is matched when filtering. If not specified, defaults to EXACT. If set to WILDCARD_EXPRESSION, '*' is allowed as a placeholder for variable length character sequences, and it can be escaped with a backslash. Note, only paid search dimensions ('dfa:paidSearch*') allow a matchType other than EXACT.
     */
    matchType?: PathReportDimensionValueMatchTypeEnum;
    /**
     * The possible values of the dimension.
     */
    values?: string[];
}
