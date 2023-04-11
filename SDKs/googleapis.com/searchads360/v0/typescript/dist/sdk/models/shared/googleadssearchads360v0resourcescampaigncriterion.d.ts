import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAdsSearchads360V0CommonDeviceInfo } from "./googleadssearchads360v0commondeviceinfo";
import { GoogleAdsSearchads360V0CommonLanguageInfo } from "./googleadssearchads360v0commonlanguageinfo";
import { GoogleAdsSearchads360V0CommonLocationGroupInfo } from "./googleadssearchads360v0commonlocationgroupinfo";
import { GoogleAdsSearchads360V0CommonLocationInfo } from "./googleadssearchads360v0commonlocationinfo";
/**
 * Output only. The type of the criterion.
 */
export declare enum GoogleAdsSearchads360V0ResourcesCampaignCriterionTypeEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    Keyword = "KEYWORD",
    Placement = "PLACEMENT",
    MobileAppCategory = "MOBILE_APP_CATEGORY",
    MobileApplication = "MOBILE_APPLICATION",
    Device = "DEVICE",
    Location = "LOCATION",
    ListingGroup = "LISTING_GROUP",
    AdSchedule = "AD_SCHEDULE",
    AgeRange = "AGE_RANGE",
    Gender = "GENDER",
    IncomeRange = "INCOME_RANGE",
    ParentalStatus = "PARENTAL_STATUS",
    YoutubeVideo = "YOUTUBE_VIDEO",
    YoutubeChannel = "YOUTUBE_CHANNEL",
    UserList = "USER_LIST",
    Proximity = "PROXIMITY",
    Topic = "TOPIC",
    ListingScope = "LISTING_SCOPE",
    Language = "LANGUAGE",
    IpBlock = "IP_BLOCK",
    ContentLabel = "CONTENT_LABEL",
    Carrier = "CARRIER",
    UserInterest = "USER_INTEREST",
    Webpage = "WEBPAGE",
    OperatingSystemVersion = "OPERATING_SYSTEM_VERSION",
    AppPaymentModel = "APP_PAYMENT_MODEL",
    MobileDevice = "MOBILE_DEVICE",
    CustomAffinity = "CUSTOM_AFFINITY",
    CustomIntent = "CUSTOM_INTENT",
    LocationGroup = "LOCATION_GROUP",
    CustomAudience = "CUSTOM_AUDIENCE",
    CombinedAudience = "COMBINED_AUDIENCE",
    KeywordTheme = "KEYWORD_THEME",
    Audience = "AUDIENCE",
    LocalServiceId = "LOCAL_SERVICE_ID"
}
/**
 * A campaign criterion.
 */
export declare class GoogleAdsSearchads360V0ResourcesCampaignCriterion extends SpeakeasyBase {
    /**
     * The modifier for the bids when the criterion matches. The modifier must be in the range: 0.1 - 10.0. Most targetable criteria types support modifiers. Use 0 to opt out of a Device type.
     */
    bidModifier?: number;
    /**
     * Output only. The ID of the criterion. This field is ignored during mutate.
     */
    criterionId?: string;
    /**
     * A device criterion.
     */
    device?: GoogleAdsSearchads360V0CommonDeviceInfo;
    /**
     * Output only. The display name of the criterion. This field is ignored for mutates.
     */
    displayName?: string;
    /**
     * A language criterion.
     */
    language?: GoogleAdsSearchads360V0CommonLanguageInfo;
    /**
     * A location criterion.
     */
    location?: GoogleAdsSearchads360V0CommonLocationInfo;
    /**
     * A radius around a list of locations specified through a feed.
     */
    locationGroup?: GoogleAdsSearchads360V0CommonLocationGroupInfo;
    /**
     * Immutable. Whether to target (`false`) or exclude (`true`) the criterion.
     */
    negative?: boolean;
    /**
     * Immutable. The resource name of the campaign criterion. Campaign criterion resource names have the form: `customers/{customer_id}/campaignCriteria/{campaign_id}~{criterion_id}`
     */
    resourceName?: string;
    /**
     * Output only. The type of the criterion.
     */
    type?: GoogleAdsSearchads360V0ResourcesCampaignCriterionTypeEnum;
}
