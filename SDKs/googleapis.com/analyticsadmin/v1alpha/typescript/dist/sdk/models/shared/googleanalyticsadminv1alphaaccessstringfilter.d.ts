import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The match type for this filter.
 */
export declare enum GoogleAnalyticsAdminV1alphaAccessStringFilterMatchTypeEnum {
    MatchTypeUnspecified = "MATCH_TYPE_UNSPECIFIED",
    Exact = "EXACT",
    BeginsWith = "BEGINS_WITH",
    EndsWith = "ENDS_WITH",
    Contains = "CONTAINS",
    FullRegexp = "FULL_REGEXP",
    PartialRegexp = "PARTIAL_REGEXP"
}
/**
 * The filter for strings.
 */
export declare class GoogleAnalyticsAdminV1alphaAccessStringFilter extends SpeakeasyBase {
    /**
     * If true, the string value is case sensitive.
     */
    caseSensitive?: boolean;
    /**
     * The match type for this filter.
     */
    matchType?: GoogleAnalyticsAdminV1alphaAccessStringFilterMatchTypeEnum;
    /**
     * The string value used for the matching.
     */
    value?: string;
}
