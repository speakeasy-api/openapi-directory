import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreativeAdTechnologyProviders extends SpeakeasyBase {
    /**
     * The detected ad technology provider IDs for this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/providers.csv for mapping of provider ID to provided name, a privacy policy URL, and a list of domains which can be attributed to the provider. If this creative contains provider IDs that are outside of those listed in the `BidRequest.adslot.consented_providers_settings.consented_providers` field on the  Authorized Buyers Real-Time Bidding protocol or the `BidRequest.user.ext.consented_providers_settings.consented_providers` field on the OpenRTB protocol, a bid submitted for a European Economic Area (EEA) user with this creative is not compliant with the GDPR policies as mentioned in the "Third-party Ad Technology Vendors" section of Authorized Buyers Program Guidelines.
     */
    detectedProviderIds?: string[];
    /**
     * Whether the creative contains an unidentified ad technology provider. If true, a bid submitted for a European Economic Area (EEA) user with this creative is not compliant with the GDPR policies as mentioned in the "Third-party Ad Technology Vendors" section of Authorized Buyers Program Guidelines.
     */
    hasUnidentifiedProvider?: boolean;
}
export declare class CreativeCorrectionsContexts extends SpeakeasyBase {
    /**
     * Only set when contextType=AUCTION_TYPE. Represents the auction types this correction applies to.
     */
    auctionType?: string[];
    /**
     * The type of context (e.g., location, platform, auction type, SSL-ness).
     */
    contextType?: string;
    /**
     * Only set when contextType=LOCATION. Represents the geo criterias this correction applies to.
     */
    geoCriteriaId?: number[];
    /**
     * Only set when contextType=PLATFORM. Represents the platforms this correction applies to.
     */
    platform?: string[];
}
export declare class CreativeCorrections extends SpeakeasyBase {
    /**
     * All known serving contexts containing serving status information.
     */
    contexts?: CreativeCorrectionsContexts[];
    /**
     * Additional details about the correction.
     */
    details?: string[];
    /**
     * The type of correction that was applied to the creative.
     */
    reason?: string;
}
export declare class CreativeFilteringReasonsReasons extends SpeakeasyBase {
    /**
     * The number of times the creative was filtered for the status. The count is aggregated across all publishers on the exchange.
     */
    filteringCount?: string;
    /**
     * The filtering status code as defined in  creative-status-codes.txt.
     */
    filteringStatus?: number;
}
/**
 * The filtering reasons for the creative. Read-only. This field should not be set in requests.
 */
export declare class CreativeFilteringReasons extends SpeakeasyBase {
    /**
     * The date in ISO 8601 format for the data. The data is collected from 00:00:00 to 23:59:59 in PST.
     */
    date?: string;
    /**
     * The filtering reasons.
     */
    reasons?: CreativeFilteringReasonsReasons[];
}
/**
 * The app icon, for app download ads.
 */
export declare class CreativeNativeAdAppIcon extends SpeakeasyBase {
    height?: number;
    url?: string;
    width?: number;
}
/**
 * A large image.
 */
export declare class CreativeNativeAdImage extends SpeakeasyBase {
    height?: number;
    url?: string;
    width?: number;
}
/**
 * A smaller image, for the advertiser logo.
 */
export declare class CreativeNativeAdLogo extends SpeakeasyBase {
    height?: number;
    url?: string;
    width?: number;
}
/**
 * If nativeAd is set, HTMLSnippet, videoVastXML, and the videoURL outside of nativeAd should not be set. (The videoURL inside nativeAd can be set.)
 */
export declare class CreativeNativeAd extends SpeakeasyBase {
    advertiser?: string;
    /**
     * The app icon, for app download ads.
     */
    appIcon?: CreativeNativeAdAppIcon;
    /**
     * A long description of the ad.
     */
    body?: string;
    /**
     * A label for the button that the user is supposed to click.
     */
    callToAction?: string;
    /**
     * The URL that the browser/SDK will load when the user clicks the ad.
     */
    clickLinkUrl?: string;
    /**
     * The URL to use for click tracking.
     */
    clickTrackingUrl?: string;
    /**
     * A short title for the ad.
     */
    headline?: string;
    /**
     * A large image.
     */
    image?: CreativeNativeAdImage;
    /**
     * The URLs are called when the impression is rendered.
     */
    impressionTrackingUrl?: string[];
    /**
     * A smaller image, for the advertiser logo.
     */
    logo?: CreativeNativeAdLogo;
    /**
     * The price of the promoted app including the currency info.
     */
    price?: string;
    /**
     * The app rating in the app store. Must be in the range [0-5].
     */
    starRating?: number;
    /**
     * The URL of the XML VAST for a native ad. Note this is a separate field from resource.video_url.
     */
    videoURL?: string;
}
export declare class CreativeServingRestrictionsContexts extends SpeakeasyBase {
    /**
     * Only set when contextType=AUCTION_TYPE. Represents the auction types this restriction applies to.
     */
    auctionType?: string[];
    /**
     * The type of context (e.g., location, platform, auction type, SSL-ness).
     */
    contextType?: string;
    /**
     * Only set when contextType=LOCATION. Represents the geo criterias this restriction applies to. Impressions are considered to match a context if either the user location or publisher location matches a given geoCriteriaId.
     */
    geoCriteriaId?: number[];
    /**
     * Only set when contextType=PLATFORM. Represents the platforms this restriction applies to.
     */
    platform?: string[];
}
export declare class CreativeServingRestrictionsDisapprovalReasons extends SpeakeasyBase {
    /**
     * Additional details about the reason for disapproval.
     */
    details?: string[];
    /**
     * The categorized reason for disapproval.
     */
    reason?: string;
}
export declare class CreativeServingRestrictions extends SpeakeasyBase {
    /**
     * All known contexts/restrictions.
     */
    contexts?: CreativeServingRestrictionsContexts[];
    /**
     * The reasons for disapproval within this restriction, if any. Note that not all disapproval reasons may be categorized, so it is possible for the creative to have a status of DISAPPROVED or CONDITIONALLY_APPROVED with an empty list for disapproval_reasons. In this case, please reach out to your TAM to help debug the issue.
     */
    disapprovalReasons?: CreativeServingRestrictionsDisapprovalReasons[];
    /**
     * Why the creative is ineligible to serve in this context (e.g., it has been explicitly disapproved or is pending review).
     */
    reason?: string;
}
/**
 * A creative and its classification data.
 */
export declare class Creative extends SpeakeasyBase {
    /**
     * The HTML snippet that displays the ad when inserted in the web page. If set, videoURL, videoVastXML, and nativeAd should not be set.
     */
    htmlSnippet?: string;
    /**
     * Account id.
     */
    accountId?: number;
    /**
     * The link to the Ad Preferences page. This is only supported for native ads.
     */
    adChoicesDestinationUrl?: string;
    adTechnologyProviders?: CreativeAdTechnologyProviders;
    /**
     * Detected advertiser id, if any. Read-only. This field should not be set in requests.
     */
    advertiserId?: string[];
    /**
     * The name of the company being advertised in the creative. A list of advertisers is provided in the advertisers.txt file.
     */
    advertiserName?: string;
    /**
     * The agency id for this creative.
     */
    agencyId?: string;
    /**
     * The last upload timestamp of this creative if it was uploaded via API. Read-only. The value of this field is generated, and will be ignored for uploads. (formatted RFC 3339 timestamp).
     */
    apiUploadTimestamp?: Date;
    /**
     * List of buyer selectable attributes for the ads that may be shown from this snippet. Each attribute is represented by an integer as defined in  buyer-declarable-creative-attributes.txt.
     */
    attribute?: number[];
    /**
     * A buyer-specific id identifying the creative in this ad.
     */
    buyerCreativeId?: string;
    /**
     * The set of destination urls for the snippet.
     */
    clickThroughUrl?: string[];
    /**
     * Shows any corrections that were applied to this creative. Read-only. This field should not be set in requests.
     */
    corrections?: CreativeCorrections[];
    /**
     * Creative status identity type that the creative item applies to. Ad Exchange real-time bidding is migrating to the sizeless creative verification. Originally, Ad Exchange assigned creative verification status to a unique combination of a buyer creative ID and creative dimensions. Post-migration, a single verification status will be assigned at the buyer creative ID level. This field allows to distinguish whether a given creative status applies to a unique combination of a buyer creative ID and creative dimensions, or to a buyer creative ID as a whole.
     */
    creativeStatusIdentityType?: string;
    /**
     * Top-level deals status. Read-only. This field should not be set in requests. If disapproved, an entry for auctionType=DIRECT_DEALS (or ALL) in servingRestrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case it may be preferable to read from servingRestrictions directly.
     */
    dealsStatus?: string;
    /**
     * Detected domains for this creative. Read-only. This field should not be set in requests.
     */
    detectedDomains?: string[];
    /**
     * The filtering reasons for the creative. Read-only. This field should not be set in requests.
     */
    filteringReasons?: CreativeFilteringReasons;
    /**
     * Ad height.
     */
    height?: number;
    /**
     * The set of urls to be called to record an impression.
     */
    impressionTrackingUrl?: string[];
    /**
     * Resource type.
     */
    kind?: string;
    /**
     * Detected languages for this creative. Read-only. This field should not be set in requests.
     */
    languages?: string[];
    /**
     * If nativeAd is set, HTMLSnippet, videoVastXML, and the videoURL outside of nativeAd should not be set. (The videoURL inside nativeAd can be set.)
     */
    nativeAd?: CreativeNativeAd;
    /**
     * Top-level open auction status. Read-only. This field should not be set in requests. If disapproved, an entry for auctionType=OPEN_AUCTION (or ALL) in servingRestrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case it may be preferable to read from ServingRestrictions directly.
     */
    openAuctionStatus?: string;
    /**
     * Detected product categories, if any. Each category is represented by an integer as defined in  ad-product-categories.txt. Read-only. This field should not be set in requests.
     */
    productCategories?: number[];
    /**
     * All restricted categories for the ads that may be shown from this snippet. Each category is represented by an integer as defined in the  ad-restricted-categories.txt.
     */
    restrictedCategories?: number[];
    /**
     * Detected sensitive categories, if any. Each category is represented by an integer as defined in  ad-sensitive-categories.txt. Read-only. This field should not be set in requests.
     */
    sensitiveCategories?: number[];
    /**
     * The granular status of this ad in specific contexts. A context here relates to where something ultimately serves (for example, a physical location, a platform, an HTTPS vs HTTP request, or the type of auction). Read-only. This field should not be set in requests. See the examples in the Creatives guide for more details.
     */
    servingRestrictions?: CreativeServingRestrictions[];
    /**
     * List of vendor types for the ads that may be shown from this snippet. Each vendor type is represented by an integer as defined in vendors.txt.
     */
    vendorType?: number[];
    /**
     * The version for this creative. Read-only. This field should not be set in requests.
     */
    version?: number;
    /**
     * The URL to fetch a video ad. If set, HTMLSnippet, videoVastXML, and nativeAd should not be set. Note, this is different from resource.native_ad.video_url above.
     */
    videoURL?: string;
    /**
     * The contents of a VAST document for a video ad. This document should conform to the VAST 2.0 or 3.0 standard. If set, HTMLSnippet, videoURL, and nativeAd and should not be set.
     */
    videoVastXML?: string;
    /**
     * Ad width.
     */
    width?: number;
}
