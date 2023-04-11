import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. Type of the ad unit.
 */
export declare enum ContentAdsSettingsTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Display = "DISPLAY",
    Feed = "FEED",
    Article = "ARTICLE",
    MatchedContent = "MATCHED_CONTENT",
    Link = "LINK"
}
/**
 * Settings specific to content ads (AFC).
 */
export declare class ContentAdsSettings extends SpeakeasyBase {
    /**
     * Required. Size of the ad unit. e.g. "728x90", "1x3" (for responsive ad units).
     */
    size?: string;
    /**
     * Required. Type of the ad unit.
     */
    type?: ContentAdsSettingsTypeEnum;
}
