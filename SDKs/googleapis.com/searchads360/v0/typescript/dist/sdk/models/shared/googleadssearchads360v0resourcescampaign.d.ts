import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAdsSearchads360V0CommonCustomParameter } from "./googleadssearchads360v0commoncustomparameter";
import { GoogleAdsSearchads360V0CommonManualCpc } from "./googleadssearchads360v0commonmanualcpc";
import { GoogleAdsSearchads360V0CommonMaximizeConversions } from "./googleadssearchads360v0commonmaximizeconversions";
import { GoogleAdsSearchads360V0CommonMaximizeConversionValue } from "./googleadssearchads360v0commonmaximizeconversionvalue";
import { GoogleAdsSearchads360V0CommonPercentCpc } from "./googleadssearchads360v0commonpercentcpc";
import { GoogleAdsSearchads360V0CommonRealTimeBiddingSetting } from "./googleadssearchads360v0commonrealtimebiddingsetting";
import { GoogleAdsSearchads360V0CommonTargetCpa } from "./googleadssearchads360v0commontargetcpa";
import { GoogleAdsSearchads360V0CommonTargetImpressionShare } from "./googleadssearchads360v0commontargetimpressionshare";
import { GoogleAdsSearchads360V0CommonTargetRoas } from "./googleadssearchads360v0commontargetroas";
import { GoogleAdsSearchads360V0CommonTargetSpend } from "./googleadssearchads360v0commontargetspend";
import { GoogleAdsSearchads360V0ResourcesCampaignDynamicSearchAdsSetting } from "./googleadssearchads360v0resourcescampaigndynamicsearchadssetting";
import { GoogleAdsSearchads360V0ResourcesCampaignGeoTargetTypeSetting } from "./googleadssearchads360v0resourcescampaigngeotargettypesetting";
import { GoogleAdsSearchads360V0ResourcesCampaignNetworkSettings } from "./googleadssearchads360v0resourcescampaignnetworksettings";
import { GoogleAdsSearchads360V0ResourcesCampaignOptimizationGoalSetting } from "./googleadssearchads360v0resourcescampaignoptimizationgoalsetting";
import { GoogleAdsSearchads360V0ResourcesCampaignSelectiveOptimization } from "./googleadssearchads360v0resourcescampaignselectiveoptimization";
import { GoogleAdsSearchads360V0ResourcesCampaignShoppingSetting } from "./googleadssearchads360v0resourcescampaignshoppingsetting";
import { GoogleAdsSearchads360V0ResourcesCampaignTrackingSetting } from "./googleadssearchads360v0resourcescampaigntrackingsetting";
/**
 * The ad serving optimization status of the campaign.
 */
export declare enum GoogleAdsSearchads360V0ResourcesCampaignAdServingOptimizationStatusEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    Optimize = "OPTIMIZE",
    ConversionOptimize = "CONVERSION_OPTIMIZE",
    Rotate = "ROTATE",
    RotateIndefinitely = "ROTATE_INDEFINITELY",
    Unavailable = "UNAVAILABLE"
}
/**
 * Immutable. Optional refinement to `advertising_channel_type`. Must be a valid sub-type of the parent channel type. Can be set only when creating campaigns. After campaign is created, the field can not be changed.
 */
export declare enum GoogleAdsSearchads360V0ResourcesCampaignAdvertisingChannelSubTypeEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    SearchMobileApp = "SEARCH_MOBILE_APP",
    DisplayMobileApp = "DISPLAY_MOBILE_APP",
    SearchExpress = "SEARCH_EXPRESS",
    DisplayExpress = "DISPLAY_EXPRESS",
    ShoppingSmartAds = "SHOPPING_SMART_ADS",
    DisplayGmailAd = "DISPLAY_GMAIL_AD",
    DisplaySmartCampaign = "DISPLAY_SMART_CAMPAIGN",
    VideoOutstream = "VIDEO_OUTSTREAM",
    VideoAction = "VIDEO_ACTION",
    VideoNonSkippable = "VIDEO_NON_SKIPPABLE",
    AppCampaign = "APP_CAMPAIGN",
    AppCampaignForEngagement = "APP_CAMPAIGN_FOR_ENGAGEMENT",
    LocalCampaign = "LOCAL_CAMPAIGN",
    ShoppingComparisonListingAds = "SHOPPING_COMPARISON_LISTING_ADS",
    SmartCampaign = "SMART_CAMPAIGN",
    VideoSequence = "VIDEO_SEQUENCE",
    AppCampaignForPreRegistration = "APP_CAMPAIGN_FOR_PRE_REGISTRATION",
    VideoReachTargetFrequency = "VIDEO_REACH_TARGET_FREQUENCY"
}
/**
 * Immutable. The primary serving target for ads within the campaign. The targeting options can be refined in `network_settings`. This field is required and should not be empty when creating new campaigns. Can be set only when creating campaigns. After the campaign is created, the field can not be changed.
 */
export declare enum GoogleAdsSearchads360V0ResourcesCampaignAdvertisingChannelTypeEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    Search = "SEARCH",
    Display = "DISPLAY",
    Shopping = "SHOPPING",
    Hotel = "HOTEL",
    Video = "VIDEO",
    MultiChannel = "MULTI_CHANNEL",
    Local = "LOCAL",
    Smart = "SMART",
    PerformanceMax = "PERFORMANCE_MAX",
    LocalServices = "LOCAL_SERVICES",
    Discovery = "DISCOVERY"
}
/**
 * Output only. The system status of the campaign's bidding strategy.
 */
export declare enum GoogleAdsSearchads360V0ResourcesCampaignBiddingStrategySystemStatusEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    Enabled = "ENABLED",
    LearningNew = "LEARNING_NEW",
    LearningSettingChange = "LEARNING_SETTING_CHANGE",
    LearningBudgetChange = "LEARNING_BUDGET_CHANGE",
    LearningCompositionChange = "LEARNING_COMPOSITION_CHANGE",
    LearningConversionTypeChange = "LEARNING_CONVERSION_TYPE_CHANGE",
    LearningConversionSettingChange = "LEARNING_CONVERSION_SETTING_CHANGE",
    LimitedByCpcBidCeiling = "LIMITED_BY_CPC_BID_CEILING",
    LimitedByCpcBidFloor = "LIMITED_BY_CPC_BID_FLOOR",
    LimitedByData = "LIMITED_BY_DATA",
    LimitedByBudget = "LIMITED_BY_BUDGET",
    LimitedByLowPrioritySpend = "LIMITED_BY_LOW_PRIORITY_SPEND",
    LimitedByLowQuality = "LIMITED_BY_LOW_QUALITY",
    LimitedByInventory = "LIMITED_BY_INVENTORY",
    MisconfiguredZeroEligibility = "MISCONFIGURED_ZERO_ELIGIBILITY",
    MisconfiguredConversionTypes = "MISCONFIGURED_CONVERSION_TYPES",
    MisconfiguredConversionSettings = "MISCONFIGURED_CONVERSION_SETTINGS",
    MisconfiguredSharedBudget = "MISCONFIGURED_SHARED_BUDGET",
    MisconfiguredStrategyType = "MISCONFIGURED_STRATEGY_TYPE",
    Paused = "PAUSED",
    Unavailable = "UNAVAILABLE",
    MultipleLearning = "MULTIPLE_LEARNING",
    MultipleLimited = "MULTIPLE_LIMITED",
    MultipleMisconfigured = "MULTIPLE_MISCONFIGURED",
    Multiple = "MULTIPLE"
}
/**
 * Output only. The type of bidding strategy. A bidding strategy can be created by setting either the bidding scheme to create a standard bidding strategy or the `bidding_strategy` field to create a portfolio bidding strategy. This field is read-only.
 */
export declare enum GoogleAdsSearchads360V0ResourcesCampaignBiddingStrategyTypeEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    Commission = "COMMISSION",
    EnhancedCpc = "ENHANCED_CPC",
    Invalid = "INVALID",
    ManualCpa = "MANUAL_CPA",
    ManualCpc = "MANUAL_CPC",
    ManualCpm = "MANUAL_CPM",
    ManualCpv = "MANUAL_CPV",
    MaximizeConversions = "MAXIMIZE_CONVERSIONS",
    MaximizeConversionValue = "MAXIMIZE_CONVERSION_VALUE",
    PageOnePromoted = "PAGE_ONE_PROMOTED",
    PercentCpc = "PERCENT_CPC",
    TargetCpa = "TARGET_CPA",
    TargetCpm = "TARGET_CPM",
    TargetImpressionShare = "TARGET_IMPRESSION_SHARE",
    TargetOutrankShare = "TARGET_OUTRANK_SHARE",
    TargetRoas = "TARGET_ROAS",
    TargetSpend = "TARGET_SPEND"
}
export declare enum GoogleAdsSearchads360V0ResourcesCampaignExcludedParentAssetFieldTypesEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    Headline = "HEADLINE",
    Description = "DESCRIPTION",
    MandatoryAdText = "MANDATORY_AD_TEXT",
    MarketingImage = "MARKETING_IMAGE",
    MediaBundle = "MEDIA_BUNDLE",
    YoutubeVideo = "YOUTUBE_VIDEO",
    BookOnGoogle = "BOOK_ON_GOOGLE",
    LeadForm = "LEAD_FORM",
    Promotion = "PROMOTION",
    Callout = "CALLOUT",
    StructuredSnippet = "STRUCTURED_SNIPPET",
    Sitelink = "SITELINK",
    MobileApp = "MOBILE_APP",
    HotelCallout = "HOTEL_CALLOUT",
    Call = "CALL",
    Price = "PRICE",
    LongHeadline = "LONG_HEADLINE",
    BusinessName = "BUSINESS_NAME",
    SquareMarketingImage = "SQUARE_MARKETING_IMAGE",
    PortraitMarketingImage = "PORTRAIT_MARKETING_IMAGE",
    Logo = "LOGO",
    LandscapeLogo = "LANDSCAPE_LOGO",
    Video = "VIDEO",
    CallToActionSelection = "CALL_TO_ACTION_SELECTION",
    AdImage = "AD_IMAGE"
}
/**
 * Output only. The ad serving status of the campaign.
 */
export declare enum GoogleAdsSearchads360V0ResourcesCampaignServingStatusEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    Serving = "SERVING",
    None = "NONE",
    Ended = "ENDED",
    Pending = "PENDING",
    Suspended = "SUSPENDED"
}
/**
 * The status of the campaign. When a new campaign is added, the status defaults to ENABLED.
 */
export declare enum GoogleAdsSearchads360V0ResourcesCampaignStatusEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    Enabled = "ENABLED",
    Paused = "PAUSED",
    Removed = "REMOVED"
}
/**
 * A campaign.
 */
export declare class GoogleAdsSearchads360V0ResourcesCampaign extends SpeakeasyBase {
    /**
     * The ad serving optimization status of the campaign.
     */
    adServingOptimizationStatus?: GoogleAdsSearchads360V0ResourcesCampaignAdServingOptimizationStatusEnum;
    /**
     * Immutable. Optional refinement to `advertising_channel_type`. Must be a valid sub-type of the parent channel type. Can be set only when creating campaigns. After campaign is created, the field can not be changed.
     */
    advertisingChannelSubType?: GoogleAdsSearchads360V0ResourcesCampaignAdvertisingChannelSubTypeEnum;
    /**
     * Immutable. The primary serving target for ads within the campaign. The targeting options can be refined in `network_settings`. This field is required and should not be empty when creating new campaigns. Can be set only when creating campaigns. After the campaign is created, the field can not be changed.
     */
    advertisingChannelType?: GoogleAdsSearchads360V0ResourcesCampaignAdvertisingChannelTypeEnum;
    /**
     * Portfolio bidding strategy used by campaign.
     */
    biddingStrategy?: string;
    /**
     * Output only. The system status of the campaign's bidding strategy.
     */
    biddingStrategySystemStatus?: GoogleAdsSearchads360V0ResourcesCampaignBiddingStrategySystemStatusEnum;
    /**
     * Output only. The type of bidding strategy. A bidding strategy can be created by setting either the bidding scheme to create a standard bidding strategy or the `bidding_strategy` field to create a portfolio bidding strategy. This field is read-only.
     */
    biddingStrategyType?: GoogleAdsSearchads360V0ResourcesCampaignBiddingStrategyTypeEnum;
    /**
     * The budget of the campaign.
     */
    campaignBudget?: string;
    /**
     * Output only. Timestamp of the campaign's creation time, formatted in ISO 8601.
     */
    createTime?: string;
    /**
     * The setting for controlling Dynamic Search Ads (DSA).
     */
    dynamicSearchAdsSetting?: GoogleAdsSearchads360V0ResourcesCampaignDynamicSearchAdsSetting;
    /**
     * The last day of the campaign in serving customer's timezone in YYYY-MM-DD format. On create, defaults to 2037-12-30, which means the campaign will run indefinitely. To set an existing campaign to run indefinitely, set this field to 2037-12-30.
     */
    endDate?: string;
    /**
     * Output only. ID of the campaign in the external engine account. This field is for non-Google Ads account only, for example, Yahoo Japan, Microsoft, Baidu etc. For Google Ads entity, use "campaign.id" instead.
     */
    engineId?: string;
    /**
     * The asset field types that should be excluded from this campaign. Asset links with these field types will not be inherited by this campaign from the upper level.
     */
    excludedParentAssetFieldTypes?: GoogleAdsSearchads360V0ResourcesCampaignExcludedParentAssetFieldTypesEnum[];
    /**
     * Suffix used to append query parameters to landing pages that are served with parallel tracking.
     */
    finalUrlSuffix?: string;
    /**
     * A list that limits how often each user will see this campaign's ads.
     */
    frequencyCaps?: Record<string, any>[];
    /**
     * Represents a collection of settings related to ads geotargeting.
     */
    geoTargetTypeSetting?: GoogleAdsSearchads360V0ResourcesCampaignGeoTargetTypeSetting;
    /**
     * Output only. The ID of the campaign.
     */
    id?: string;
    /**
     * Output only. The resource names of labels attached to this campaign.
     */
    labels?: string[];
    /**
     * Output only. The datetime when this campaign was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format.
     */
    lastModifiedTime?: string;
    /**
     * Manual bidding strategy that allows advertiser to set the bid per advertiser-specified action.
     */
    manualCpa?: Record<string, any>;
    /**
     * Manual click-based bidding where user pays per click.
     */
    manualCpc?: GoogleAdsSearchads360V0CommonManualCpc;
    /**
     * Manual impression-based bidding where user pays per thousand impressions.
     */
    manualCpm?: Record<string, any>;
    /**
     * An automated bidding strategy to help get the most conversion value for your campaigns while spending your budget.
     */
    maximizeConversionValue?: GoogleAdsSearchads360V0CommonMaximizeConversionValue;
    /**
     * An automated bidding strategy to help get the most conversions for your campaigns while spending your budget.
     */
    maximizeConversions?: GoogleAdsSearchads360V0CommonMaximizeConversions;
    /**
     * The name of the campaign. This field is required and should not be empty when creating new campaigns. It must not contain any null (code point 0x0), NL line feed (code point 0xA) or carriage return (code point 0xD) characters.
     */
    name?: string;
    /**
     * The network settings for the campaign.
     */
    networkSettings?: GoogleAdsSearchads360V0ResourcesCampaignNetworkSettings;
    /**
     * Optimization goal setting for this campaign, which includes a set of optimization goal types.
     */
    optimizationGoalSetting?: GoogleAdsSearchads360V0ResourcesCampaignOptimizationGoalSetting;
    /**
     * A bidding strategy where bids are a fraction of the advertised price for some good or service.
     */
    percentCpc?: GoogleAdsSearchads360V0CommonPercentCpc;
    /**
     * Settings for Real-Time Bidding, a feature only available for campaigns targeting the Ad Exchange network.
     */
    realTimeBiddingSetting?: GoogleAdsSearchads360V0CommonRealTimeBiddingSetting;
    /**
     * Immutable. The resource name of the campaign. Campaign resource names have the form: `customers/{customer_id}/campaigns/{campaign_id}`
     */
    resourceName?: string;
    /**
     * Selective optimization setting for this campaign, which includes a set of conversion actions to optimize this campaign towards.
     */
    selectiveOptimization?: GoogleAdsSearchads360V0ResourcesCampaignSelectiveOptimization;
    /**
     * Output only. The ad serving status of the campaign.
     */
    servingStatus?: GoogleAdsSearchads360V0ResourcesCampaignServingStatusEnum;
    /**
     * The setting for Shopping campaigns. Defines the universe of products that can be advertised by the campaign, and how this campaign interacts with other Shopping campaigns.
     */
    shoppingSetting?: GoogleAdsSearchads360V0ResourcesCampaignShoppingSetting;
    /**
     * The date when campaign started in serving customer's timezone in YYYY-MM-DD format.
     */
    startDate?: string;
    /**
     * The status of the campaign. When a new campaign is added, the status defaults to ENABLED.
     */
    status?: GoogleAdsSearchads360V0ResourcesCampaignStatusEnum;
    /**
     * An automated bid strategy that sets bids to help get as many conversions as possible at the target cost-per-acquisition (CPA) you set.
     */
    targetCpa?: GoogleAdsSearchads360V0CommonTargetCpa;
    /**
     * Target CPM (cost per thousand impressions) is an automated bidding strategy that sets bids to optimize performance given the target CPM you set.
     */
    targetCpm?: Record<string, any>;
    /**
     * An automated bidding strategy that sets bids so that a certain percentage of search ads are shown at the top of the first page (or other targeted location).
     */
    targetImpressionShare?: GoogleAdsSearchads360V0CommonTargetImpressionShare;
    /**
     * An automated bidding strategy that helps you maximize revenue while averaging a specific target return on ad spend (ROAS).
     */
    targetRoas?: GoogleAdsSearchads360V0CommonTargetRoas;
    /**
     * An automated bid strategy that sets your bids to help get as many clicks as possible within your budget.
     */
    targetSpend?: GoogleAdsSearchads360V0CommonTargetSpend;
    /**
     * Campaign-level settings for tracking information.
     */
    trackingSetting?: GoogleAdsSearchads360V0ResourcesCampaignTrackingSetting;
    /**
     * The URL template for constructing a tracking URL.
     */
    trackingUrlTemplate?: string;
    /**
     * The list of mappings used to substitute custom parameter tags in a `tracking_url_template`, `final_urls`, or `mobile_final_urls`.
     */
    urlCustomParameters?: GoogleAdsSearchads360V0CommonCustomParameter[];
    /**
     * Represents opting out of URL expansion to more targeted URLs. If opted out (true), only the final URLs in the asset group or URLs specified in the advertiser's Google Merchant Center or business data feeds are targeted. If opted in (false), the entire domain will be targeted. This field can only be set for Performance Max campaigns, where the default value is false.
     */
    urlExpansionOptOut?: boolean;
}
