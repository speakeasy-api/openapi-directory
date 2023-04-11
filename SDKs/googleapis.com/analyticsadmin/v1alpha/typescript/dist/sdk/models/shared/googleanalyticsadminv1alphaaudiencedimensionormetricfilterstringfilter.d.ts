import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The match type for the string filter.
 */
export declare enum GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterMatchTypeEnum {
    MatchTypeUnspecified = "MATCH_TYPE_UNSPECIFIED",
    Exact = "EXACT",
    BeginsWith = "BEGINS_WITH",
    EndsWith = "ENDS_WITH",
    Contains = "CONTAINS",
    FullRegexp = "FULL_REGEXP"
}
/**
 * A filter for a string-type dimension that matches a particular pattern.
 */
export declare class GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter extends SpeakeasyBase {
    /**
     * Optional. If true, the match is case-sensitive. If false, the match is case-insensitive.
     */
    caseSensitive?: boolean;
    /**
     * Required. The match type for the string filter.
     */
    matchType?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterMatchTypeEnum;
    /**
     * Required. The string value to be matched against.
     */
    value?: string;
}
