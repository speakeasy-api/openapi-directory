import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Match logic of the filter.
 */
export declare enum PathQueryOptionsFilterMatchEnum {
    Unknown = "UNKNOWN",
    Exact = "EXACT",
    Partial = "PARTIAL",
    BeginsWith = "BEGINS_WITH",
    WildcardExpression = "WILDCARD_EXPRESSION"
}
/**
 * Dimension filter on path events.
 */
export declare class PathQueryOptionsFilter extends SpeakeasyBase {
    /**
     * Dimension the filter is applied to.
     */
    filter?: string;
    /**
     * Match logic of the filter.
     */
    match?: PathQueryOptionsFilterMatchEnum;
    /**
     * Values to filter on.
     */
    values?: string[];
}
