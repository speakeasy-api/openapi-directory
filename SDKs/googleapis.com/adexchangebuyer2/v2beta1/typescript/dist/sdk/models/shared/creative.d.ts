import { SpeakeasyBase } from "../../../internal/utils";
import { AdTechnologyProviders } from "./adtechnologyproviders";
import { Correction } from "./correction";
import { HtmlContent } from "./htmlcontent";
import { NativeContent } from "./nativecontent";
import { ServingRestriction } from "./servingrestriction";
import { VideoContent } from "./videocontent";
export declare enum CreativeAttributesEnum {
    AttributeUnspecified = "ATTRIBUTE_UNSPECIFIED",
    ImageRichMedia = "IMAGE_RICH_MEDIA",
    AdobeFlashFlv = "ADOBE_FLASH_FLV",
    IsTagged = "IS_TAGGED",
    IsCookieTargeted = "IS_COOKIE_TARGETED",
    IsUserInterestTargeted = "IS_USER_INTEREST_TARGETED",
    ExpandingDirectionNone = "EXPANDING_DIRECTION_NONE",
    ExpandingDirectionUp = "EXPANDING_DIRECTION_UP",
    ExpandingDirectionDown = "EXPANDING_DIRECTION_DOWN",
    ExpandingDirectionLeft = "EXPANDING_DIRECTION_LEFT",
    ExpandingDirectionRight = "EXPANDING_DIRECTION_RIGHT",
    ExpandingDirectionUpLeft = "EXPANDING_DIRECTION_UP_LEFT",
    ExpandingDirectionUpRight = "EXPANDING_DIRECTION_UP_RIGHT",
    ExpandingDirectionDownLeft = "EXPANDING_DIRECTION_DOWN_LEFT",
    ExpandingDirectionDownRight = "EXPANDING_DIRECTION_DOWN_RIGHT",
    CreativeTypeHtml = "CREATIVE_TYPE_HTML",
    CreativeTypeVastVideo = "CREATIVE_TYPE_VAST_VIDEO",
    ExpandingDirectionUpOrDown = "EXPANDING_DIRECTION_UP_OR_DOWN",
    ExpandingDirectionLeftOrRight = "EXPANDING_DIRECTION_LEFT_OR_RIGHT",
    ExpandingDirectionAnyDiagonal = "EXPANDING_DIRECTION_ANY_DIAGONAL",
    ExpandingActionRolloverToExpand = "EXPANDING_ACTION_ROLLOVER_TO_EXPAND",
    InstreamVastVideoTypeVpaidFlash = "INSTREAM_VAST_VIDEO_TYPE_VPAID_FLASH",
    RichMediaCapabilityTypeMraid = "RICH_MEDIA_CAPABILITY_TYPE_MRAID",
    RichMediaCapabilityTypeFlash = "RICH_MEDIA_CAPABILITY_TYPE_FLASH",
    RichMediaCapabilityTypeHtml5 = "RICH_MEDIA_CAPABILITY_TYPE_HTML5",
    SkippableInstreamVideo = "SKIPPABLE_INSTREAM_VIDEO",
    RichMediaCapabilityTypeSsl = "RICH_MEDIA_CAPABILITY_TYPE_SSL",
    RichMediaCapabilityTypeNonSsl = "RICH_MEDIA_CAPABILITY_TYPE_NON_SSL",
    RichMediaCapabilityTypeInterstitial = "RICH_MEDIA_CAPABILITY_TYPE_INTERSTITIAL",
    NonSkippableInstreamVideo = "NON_SKIPPABLE_INSTREAM_VIDEO",
    NativeEligibilityEligible = "NATIVE_ELIGIBILITY_ELIGIBLE",
    NonVpaid = "NON_VPAID",
    NativeEligibilityNotEligible = "NATIVE_ELIGIBILITY_NOT_ELIGIBLE",
    AnyInterstitial = "ANY_INTERSTITIAL",
    NonInterstitial = "NON_INTERSTITIAL",
    InBannerVideo = "IN_BANNER_VIDEO",
    RenderingSizelessAdx = "RENDERING_SIZELESS_ADX",
    Omsdk10 = "OMSDK_1_0"
}
/**
 * Output only. The top-level deals status of this creative. If disapproved, an entry for 'auctionType=DIRECT_DEALS' (or 'ALL') in serving_restrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case, it may be preferable to read from serving_restrictions directly. Can be used to filter the response of the creatives.list method.
 */
export declare enum CreativeDealsStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    NotChecked = "NOT_CHECKED",
    ConditionallyApproved = "CONDITIONALLY_APPROVED",
    Approved = "APPROVED",
    Disapproved = "DISAPPROVED",
    PendingReview = "PENDING_REVIEW",
    StatusTypeUnspecified = "STATUS_TYPE_UNSPECIFIED"
}
/**
 * Output only. The top-level open auction status of this creative. If disapproved, an entry for 'auctionType = OPEN_AUCTION' (or 'ALL') in serving_restrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case, it may be preferable to read from serving_restrictions directly. Can be used to filter the response of the creatives.list method.
 */
export declare enum CreativeOpenAuctionStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    NotChecked = "NOT_CHECKED",
    ConditionallyApproved = "CONDITIONALLY_APPROVED",
    Approved = "APPROVED",
    Disapproved = "DISAPPROVED",
    PendingReview = "PENDING_REVIEW",
    StatusTypeUnspecified = "STATUS_TYPE_UNSPECIFIED"
}
export declare enum CreativeRestrictedCategoriesEnum {
    NoRestrictedCategories = "NO_RESTRICTED_CATEGORIES",
    Alcohol = "ALCOHOL"
}
/**
 * A creative and its classification data.
 */
export declare class Creative extends SpeakeasyBase {
    /**
     * The account that this creative belongs to. Can be used to filter the response of the creatives.list method.
     */
    accountId?: string;
    /**
     * The link to AdChoices destination page.
     */
    adChoicesDestinationUrl?: string;
    /**
     * Detected ad technology provider information.
     */
    adTechnologyProviders?: AdTechnologyProviders;
    /**
     * The name of the company being advertised in the creative.
     */
    advertiserName?: string;
    /**
     * The agency ID for this creative.
     */
    agencyId?: string;
    /**
     * Output only. The last update timestamp of the creative through the API.
     */
    apiUpdateTime?: string;
    /**
     * All attributes for the ads that may be shown from this creative. Can be used to filter the response of the creatives.list method.
     */
    attributes?: CreativeAttributesEnum[];
    /**
     * The set of destination URLs for the creative.
     */
    clickThroughUrls?: string[];
    /**
     * Output only. Shows any corrections that were applied to this creative.
     */
    corrections?: Correction[];
    /**
     * The buyer-defined creative ID of this creative. Can be used to filter the response of the creatives.list method.
     */
    creativeId?: string;
    /**
     * Output only. The top-level deals status of this creative. If disapproved, an entry for 'auctionType=DIRECT_DEALS' (or 'ALL') in serving_restrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case, it may be preferable to read from serving_restrictions directly. Can be used to filter the response of the creatives.list method.
     */
    dealsStatus?: CreativeDealsStatusEnum;
    /**
     * The set of declared destination URLs for the creative.
     */
    declaredClickThroughUrls?: string[];
    /**
     * Output only. Detected advertiser IDs, if any.
     */
    detectedAdvertiserIds?: string[];
    /**
     * Output only. The detected domains for this creative.
     */
    detectedDomains?: string[];
    /**
     * Output only. The detected languages for this creative. The order is arbitrary. The codes are 2 or 5 characters and are documented at https://developers.google.com/adwords/api/docs/appendix/languagecodes.
     */
    detectedLanguages?: string[];
    /**
     * Output only. Detected product categories, if any. See the ad-product-categories.txt file in the technical documentation for a list of IDs.
     */
    detectedProductCategories?: number[];
    /**
     * Output only. Detected sensitive categories, if any. See the ad-sensitive-categories.txt file in the technical documentation for a list of IDs. You should use these IDs along with the excluded-sensitive-category field in the bid request to filter your bids.
     */
    detectedSensitiveCategories?: number[];
    /**
     * HTML content for a creative.
     */
    html?: HtmlContent;
    /**
     * The set of URLs to be called to record an impression.
     */
    impressionTrackingUrls?: string[];
    /**
     * Native content for a creative.
     */
    native?: NativeContent;
    /**
     * Output only. The top-level open auction status of this creative. If disapproved, an entry for 'auctionType = OPEN_AUCTION' (or 'ALL') in serving_restrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case, it may be preferable to read from serving_restrictions directly. Can be used to filter the response of the creatives.list method.
     */
    openAuctionStatus?: CreativeOpenAuctionStatusEnum;
    /**
     * All restricted categories for the ads that may be shown from this creative.
     */
    restrictedCategories?: CreativeRestrictedCategoriesEnum[];
    /**
     * Output only. The granular status of this ad in specific contexts. A context here relates to where something ultimately serves (for example, a physical location, a platform, an HTTPS versus HTTP request, or the type of auction).
     */
    servingRestrictions?: ServingRestriction[];
    /**
     * All vendor IDs for the ads that may be shown from this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/vendors.txt for possible values.
     */
    vendorIds?: number[];
    /**
     * Output only. The version of this creative.
     */
    version?: number;
    /**
     * Video content for a creative.
     */
    video?: VideoContent;
}
