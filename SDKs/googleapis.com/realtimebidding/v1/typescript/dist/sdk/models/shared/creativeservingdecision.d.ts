import { SpeakeasyBase } from "../../../internal/utils";
import { AdTechnologyProviders } from "./adtechnologyproviders";
import { AdvertiserAndBrand } from "./advertiserandbrand";
import { PolicyCompliance } from "./policycompliance";
export declare enum CreativeServingDecisionDetectedAttributesEnum {
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
 * Top level status and detected attributes of a creative.
 */
export declare class CreativeServingDecision extends SpeakeasyBase {
    /**
     * The list of detected Ad Technology Providers for this creative. Bids placed for inventory that will serve to EEA or UK users are expected to comply with GDPR requirements. You must ensure that the creatives used in such bids should contain only user consented ad technology providers as indicated in the bid request. Google reserves the right to filter non-compliant bids. User consented ad technology providers can be found in the [Google Protocol](https://developers.google.com/authorized-buyers/rtb/downloads/realtime-bidding-proto) with the `BidRequest.adslot.consented_providers_settings` field, and can be found as an [OpenRTB extension](https://developers.google.com/authorized-buyers/rtb/downloads/openrtb-adx-proto) with the `BidRequest.user.ext.consented_providers_settings` and `BidRequest.user.ext.consent` fields. See https://support.google.com/authorizedbuyers/answer/9789378 for additional information about the Google TCF v2 integration.
     */
    adTechnologyProviders?: AdTechnologyProviders;
    /**
     * Policy compliance of the creative for a transaction type or a region.
     */
    chinaPolicyCompliance?: PolicyCompliance;
    /**
     * Policy compliance of the creative for a transaction type or a region.
     */
    dealsPolicyCompliance?: PolicyCompliance;
    /**
     * Detected advertisers and brands.
     */
    detectedAdvertisers?: AdvertiserAndBrand[];
    /**
     * Publisher-excludable attributes that were detected for this creative. Can be used to filter the response of the creatives.list method. If the `excluded_attribute` field of a [bid request](https://developers.google.com/authorized-buyers/rtb/downloads/realtime-bidding-proto) contains one of the attributes that were declared or detected for a given creative, and a bid is submitted with that creative, the bid will be filtered before the auction.
     */
    detectedAttributes?: CreativeServingDecisionDetectedAttributesEnum[];
    /**
     * The set of detected destination URLs for the creative. Can be used to filter the response of the creatives.list method.
     */
    detectedClickThroughUrls?: string[];
    /**
     * The detected domains for this creative.
     */
    detectedDomains?: string[];
    /**
     * The detected languages for this creative. The order is arbitrary. The codes are 2 or 5 characters and are documented at https://developers.google.com/adwords/api/docs/appendix/languagecodes. Can be used to filter the response of the creatives.list method.
     */
    detectedLanguages?: string[];
    /**
     * Detected product categories, if any. See the ad-product-categories.txt file in the technical documentation for a list of IDs. Can be used to filter the response of the creatives.list method.
     */
    detectedProductCategories?: number[];
    /**
     * Detected sensitive categories, if any. Can be used to filter the response of the creatives.list method. See the ad-sensitive-categories.txt file in the technical documentation for a list of IDs. You should use these IDs along with the excluded-sensitive-category field in the bid request to filter your bids.
     */
    detectedSensitiveCategories?: number[];
    /**
     * IDs of the ad technology vendors that were detected to be used by this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/vendors.txt for possible values. Can be used to filter the response of the creatives.list method. If the `allowed_vendor_type` field of a [bid request](https://developers.google.com/authorized-buyers/rtb/downloads/realtime-bidding-proto) does not contain one of the vendor type IDs that were declared or detected for a given creative, and a bid is submitted with that creative, the bid will be filtered before the auction.
     */
    detectedVendorIds?: number[];
    /**
     * The last time the creative status was updated. Can be used to filter the response of the creatives.list method.
     */
    lastStatusUpdate?: string;
    /**
     * Policy compliance of the creative for a transaction type or a region.
     */
    networkPolicyCompliance?: PolicyCompliance;
    /**
     * Policy compliance of the creative for a transaction type or a region.
     */
    platformPolicyCompliance?: PolicyCompliance;
    /**
     * Policy compliance of the creative for a transaction type or a region.
     */
    russiaPolicyCompliance?: PolicyCompliance;
}
