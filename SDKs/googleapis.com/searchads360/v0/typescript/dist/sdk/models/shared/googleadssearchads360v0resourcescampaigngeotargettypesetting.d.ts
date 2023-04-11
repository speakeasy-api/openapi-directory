import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The setting used for negative geotargeting in this particular campaign.
 */
export declare enum GoogleAdsSearchads360V0ResourcesCampaignGeoTargetTypeSettingNegativeGeoTargetTypeEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    PresenceOrInterest = "PRESENCE_OR_INTEREST",
    Presence = "PRESENCE"
}
/**
 * The setting used for positive geotargeting in this particular campaign.
 */
export declare enum GoogleAdsSearchads360V0ResourcesCampaignGeoTargetTypeSettingPositiveGeoTargetTypeEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    PresenceOrInterest = "PRESENCE_OR_INTEREST",
    SearchInterest = "SEARCH_INTEREST",
    Presence = "PRESENCE"
}
/**
 * Represents a collection of settings related to ads geotargeting.
 */
export declare class GoogleAdsSearchads360V0ResourcesCampaignGeoTargetTypeSetting extends SpeakeasyBase {
    /**
     * The setting used for negative geotargeting in this particular campaign.
     */
    negativeGeoTargetType?: GoogleAdsSearchads360V0ResourcesCampaignGeoTargetTypeSettingNegativeGeoTargetTypeEnum;
    /**
     * The setting used for positive geotargeting in this particular campaign.
     */
    positiveGeoTargetType?: GoogleAdsSearchads360V0ResourcesCampaignGeoTargetTypeSettingPositiveGeoTargetTypeEnum;
}
