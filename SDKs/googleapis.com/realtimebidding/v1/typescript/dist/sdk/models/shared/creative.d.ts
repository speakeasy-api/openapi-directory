import { SpeakeasyBase } from "../../../internal/utils";
import { CreativeServingDecision } from "./creativeservingdecision";
import { HtmlContent } from "./htmlcontent";
import { NativeContent } from "./nativecontent";
import { VideoContent } from "./videocontent";
export declare enum CreativeDeclaredAttributesEnum {
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
export declare enum CreativeDeclaredRestrictedCategoriesEnum {
    RestrictedCategoryUnspecified = "RESTRICTED_CATEGORY_UNSPECIFIED",
    Alcohol = "ALCOHOL"
}
export declare enum CreativeRestrictedCategoriesEnum {
    RestrictedCategoryUnspecified = "RESTRICTED_CATEGORY_UNSPECIFIED",
    Alcohol = "ALCOHOL"
}
/**
 * A creative and its classification data.
 */
export declare class CreativeInput extends SpeakeasyBase {
    /**
     * The link to AdChoices destination page. This is only supported for native ads.
     */
    adChoicesDestinationUrl?: string;
    /**
     * The name of the company being advertised in the creative. Can be used to filter the response of the creatives.list method.
     */
    advertiserName?: string;
    /**
     * The agency ID for this creative.
     */
    agencyId?: string;
    /**
     * Buyer-specific creative ID that references this creative in bid responses. This field is Ignored in update operations. Can be used to filter the response of the creatives.list method. The maximum length of the creative ID is 128 bytes.
     */
    creativeId?: string;
    /**
     * Top level status and detected attributes of a creative.
     */
    creativeServingDecision?: CreativeServingDecision;
    /**
     * All declared attributes for the ads that may be shown from this creative. Can be used to filter the response of the creatives.list method. If the `excluded_attribute` field of a [bid request](https://developers.google.com/authorized-buyers/rtb/downloads/realtime-bidding-proto") contains one of the attributes that were declared or detected for a given creative, and a bid is submitted with that creative, the bid will be filtered before the auction.
     */
    declaredAttributes?: CreativeDeclaredAttributesEnum[];
    /**
     * The set of declared destination URLs for the creative. Can be used to filter the response of the creatives.list method.
     */
    declaredClickThroughUrls?: string[];
    /**
     * All declared restricted categories for the ads that may be shown from this creative. Can be used to filter the response of the creatives.list method.
     */
    declaredRestrictedCategories?: CreativeDeclaredRestrictedCategoriesEnum[];
    /**
     * IDs for the declared ad technology vendors that may be used by this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/vendors.txt for possible values. Can be used to filter the response of the creatives.list method.
     */
    declaredVendorIds?: number[];
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
     * Experimental field that can be used during the [FLEDGE Origin Trial](/authorized-buyers/rtb/fledge-origin-trial). The URL to fetch an interest group ad used in [TURTLEDOVE on-device auction](https://github.com/WICG/turtledove/blob/main/FLEDGE.md#1-browsers-record-interest-groups"). This should be unique among all creatives for a given `accountId`. This URL should be the same as the URL returned by [generateBid()](https://github.com/WICG/turtledove/blob/main/FLEDGE.md#32-on-device-bidding).
     */
    renderUrl?: string;
    /**
     * All restricted categories for the ads that may be shown from this creative.
     */
    restrictedCategories?: CreativeRestrictedCategoriesEnum[];
    /**
     * Video content for a creative.
     */
    video?: VideoContent;
}
/**
 * Output only. The format of this creative. Can be used to filter the response of the creatives.list method.
 */
export declare enum CreativeCreativeFormatEnum {
    CreativeFormatUnspecified = "CREATIVE_FORMAT_UNSPECIFIED",
    Html = "HTML",
    Video = "VIDEO",
    Native = "NATIVE"
}
/**
 * A creative and its classification data.
 */
export declare class Creative extends SpeakeasyBase {
    /**
     * Output only. ID of the buyer account that this creative is owned by. Can be used to filter the response of the creatives.list method with equality and inequality check.
     */
    accountId?: string;
    /**
     * The link to AdChoices destination page. This is only supported for native ads.
     */
    adChoicesDestinationUrl?: string;
    /**
     * The name of the company being advertised in the creative. Can be used to filter the response of the creatives.list method.
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
     * Output only. The format of this creative. Can be used to filter the response of the creatives.list method.
     */
    creativeFormat?: CreativeCreativeFormatEnum;
    /**
     * Buyer-specific creative ID that references this creative in bid responses. This field is Ignored in update operations. Can be used to filter the response of the creatives.list method. The maximum length of the creative ID is 128 bytes.
     */
    creativeId?: string;
    /**
     * Top level status and detected attributes of a creative.
     */
    creativeServingDecision?: CreativeServingDecision;
    /**
     * Output only. IDs of all of the deals with which this creative has been used in bidding. Can be used to filter the response of the creatives.list method.
     */
    dealIds?: string[];
    /**
     * All declared attributes for the ads that may be shown from this creative. Can be used to filter the response of the creatives.list method. If the `excluded_attribute` field of a [bid request](https://developers.google.com/authorized-buyers/rtb/downloads/realtime-bidding-proto") contains one of the attributes that were declared or detected for a given creative, and a bid is submitted with that creative, the bid will be filtered before the auction.
     */
    declaredAttributes?: CreativeDeclaredAttributesEnum[];
    /**
     * The set of declared destination URLs for the creative. Can be used to filter the response of the creatives.list method.
     */
    declaredClickThroughUrls?: string[];
    /**
     * All declared restricted categories for the ads that may be shown from this creative. Can be used to filter the response of the creatives.list method.
     */
    declaredRestrictedCategories?: CreativeDeclaredRestrictedCategoriesEnum[];
    /**
     * IDs for the declared ad technology vendors that may be used by this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/vendors.txt for possible values. Can be used to filter the response of the creatives.list method.
     */
    declaredVendorIds?: number[];
    /**
     * HTML content for a creative.
     */
    html?: HtmlContent;
    /**
     * The set of URLs to be called to record an impression.
     */
    impressionTrackingUrls?: string[];
    /**
     * Output only. Name of the creative. Follows the pattern `buyers/{buyer}/creatives/{creative}`, where `{buyer}` represents the account ID of the buyer who owns the creative, and `{creative}` is the buyer-specific creative ID that references this creative in the bid response.
     */
    name?: string;
    /**
     * Native content for a creative.
     */
    native?: NativeContent;
    /**
     * Experimental field that can be used during the [FLEDGE Origin Trial](/authorized-buyers/rtb/fledge-origin-trial). The URL to fetch an interest group ad used in [TURTLEDOVE on-device auction](https://github.com/WICG/turtledove/blob/main/FLEDGE.md#1-browsers-record-interest-groups"). This should be unique among all creatives for a given `accountId`. This URL should be the same as the URL returned by [generateBid()](https://github.com/WICG/turtledove/blob/main/FLEDGE.md#32-on-device-bidding).
     */
    renderUrl?: string;
    /**
     * All restricted categories for the ads that may be shown from this creative.
     */
    restrictedCategories?: CreativeRestrictedCategoriesEnum[];
    /**
     * Output only. The version of the creative. Version for a new creative is 1 and it increments during subsequent creative updates.
     */
    version?: number;
    /**
     * Video content for a creative.
     */
    video?: VideoContent;
}
