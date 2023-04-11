import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The match type for this filter.
 */
export declare enum StringFilterMatchTypeEnum {
    MatchTypeUnspecified = "MATCH_TYPE_UNSPECIFIED",
    Exact = "EXACT",
    BeginsWith = "BEGINS_WITH",
    EndsWith = "ENDS_WITH",
    Contains = "CONTAINS",
    FullRegexp = "FULL_REGEXP",
    PartialRegexp = "PARTIAL_REGEXP"
}
/**
 * The filter for string
 */
export declare class StringFilter extends SpeakeasyBase {
    /**
     * If true, the string value is case sensitive.
     */
    caseSensitive?: boolean;
    /**
     * The match type for this filter.
     */
    matchType?: StringFilterMatchTypeEnum;
    /**
     * The string value used for the matching.
     */
    value?: string;
}
