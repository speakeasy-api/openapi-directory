import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The match type for the string filter.
 */
export declare enum GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilterMatchTypeEnum {
    MatchTypeUnspecified = "MATCH_TYPE_UNSPECIFIED",
    Exact = "EXACT",
    Contains = "CONTAINS"
}
/**
 * A filter for a string-type dimension that matches a particular pattern.
 */
export declare class GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter extends SpeakeasyBase {
    /**
     * Optional. If true, the match is case-sensitive. If false, the match is case-insensitive. Must be true when match_type is EXACT. Must be false when match_type is CONTAINS.
     */
    caseSensitive?: boolean;
    /**
     * Required. The match type for the string filter.
     */
    matchType?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilterMatchTypeEnum;
    /**
     * Required. The string value to be matched against.
     */
    value?: string;
}
