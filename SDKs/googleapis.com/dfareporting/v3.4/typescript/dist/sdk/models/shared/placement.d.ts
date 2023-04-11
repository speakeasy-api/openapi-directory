import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
import { LastModifiedInfo } from "./lastmodifiedinfo";
import { LookbackConfiguration } from "./lookbackconfiguration";
import { PricingSchedule } from "./pricingschedule";
import { Size } from "./size";
import { TagSetting } from "./tagsetting";
import { VideoSettings } from "./videosettings";
/**
 * Placement compatibility. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering on desktop, on mobile devices or in mobile apps for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are no longer allowed for new placement insertions. Instead, use DISPLAY or DISPLAY_INTERSTITIAL. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard. This field is required on insertion.
 */
export declare enum PlacementCompatibilityEnum {
    Display = "DISPLAY",
    DisplayInterstitial = "DISPLAY_INTERSTITIAL",
    App = "APP",
    AppInterstitial = "APP_INTERSTITIAL",
    InStreamVideo = "IN_STREAM_VIDEO",
    InStreamAudio = "IN_STREAM_AUDIO"
}
/**
 * Payment source for this placement. This is a required field that is read-only after insertion.
 */
export declare enum PlacementPaymentSourceEnum {
    PlacementAgencyPaid = "PLACEMENT_AGENCY_PAID",
    PlacementPublisherPaid = "PLACEMENT_PUBLISHER_PAID"
}
/**
 * Third-party placement status.
 */
export declare enum PlacementStatusEnum {
    PendingReview = "PENDING_REVIEW",
    PaymentAccepted = "PAYMENT_ACCEPTED",
    PaymentRejected = "PAYMENT_REJECTED",
    AcknowledgeRejection = "ACKNOWLEDGE_REJECTION",
    AcknowledgeAcceptance = "ACKNOWLEDGE_ACCEPTANCE",
    Draft = "DRAFT"
}
export declare enum PlacementTagFormatsEnum {
    PlacementTagStandard = "PLACEMENT_TAG_STANDARD",
    PlacementTagIframeJavascript = "PLACEMENT_TAG_IFRAME_JAVASCRIPT",
    PlacementTagIframeIlayer = "PLACEMENT_TAG_IFRAME_ILAYER",
    PlacementTagInternalRedirect = "PLACEMENT_TAG_INTERNAL_REDIRECT",
    PlacementTagJavascript = "PLACEMENT_TAG_JAVASCRIPT",
    PlacementTagInterstitialIframeJavascript = "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT",
    PlacementTagInterstitialInternalRedirect = "PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT",
    PlacementTagInterstitialJavascript = "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT",
    PlacementTagClickCommands = "PLACEMENT_TAG_CLICK_COMMANDS",
    PlacementTagInstreamVideoPrefetch = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH",
    PlacementTagTracking = "PLACEMENT_TAG_TRACKING",
    PlacementTagTrackingIframe = "PLACEMENT_TAG_TRACKING_IFRAME",
    PlacementTagTrackingJavascript = "PLACEMENT_TAG_TRACKING_JAVASCRIPT",
    PlacementTagInstreamVideoPrefetchVast3 = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3",
    PlacementTagIframeJavascriptLegacy = "PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY",
    PlacementTagJavascriptLegacy = "PLACEMENT_TAG_JAVASCRIPT_LEGACY",
    PlacementTagInterstitialIframeJavascriptLegacy = "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY",
    PlacementTagInterstitialJavascriptLegacy = "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY",
    PlacementTagInstreamVideoPrefetchVast4 = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4",
    PlacementTagTrackingThirdPartyMeasurement = "PLACEMENT_TAG_TRACKING_THIRD_PARTY_MEASUREMENT"
}
/**
 * VPAID adapter setting for this placement. Controls which VPAID format the measurement adapter will use for in-stream video creatives assigned to this placement. *Note:* Flash is no longer supported. This field now defaults to HTML5 when the following values are provided: FLASH, BOTH.
 */
export declare enum PlacementVpaidAdapterChoiceEnum {
    Default = "DEFAULT",
    Flash = "FLASH",
    Html5 = "HTML5",
    Both = "BOTH"
}
/**
 * Contains properties of a placement.
 */
export declare class Placement extends SpeakeasyBase {
    /**
     * Account ID of this placement. This field can be left blank.
     */
    accountId?: string;
    /**
     * Whether this placement opts out of ad blocking. When true, ad blocking is disabled for this placement. When false, the campaign and site settings take effect.
     */
    adBlockingOptOut?: boolean;
    /**
     * Additional sizes associated with this placement. When inserting or updating a placement, only the size ID field is used.
     */
    additionalSizes?: Size[];
    /**
     * Advertiser ID of this placement. This field can be left blank.
     */
    advertiserId?: string;
    /**
     * Represents a DimensionValue resource.
     */
    advertiserIdDimensionValue?: DimensionValue;
    /**
     * Whether this placement is archived.
     */
    archived?: boolean;
    /**
     * Campaign ID of this placement. This field is a required field on insertion.
     */
    campaignId?: string;
    /**
     * Represents a DimensionValue resource.
     */
    campaignIdDimensionValue?: DimensionValue;
    /**
     * Comments for this placement.
     */
    comment?: string;
    /**
     * Placement compatibility. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering on desktop, on mobile devices or in mobile apps for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are no longer allowed for new placement insertions. Instead, use DISPLAY or DISPLAY_INTERSTITIAL. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard. This field is required on insertion.
     */
    compatibility?: PlacementCompatibilityEnum;
    /**
     * ID of the content category assigned to this placement.
     */
    contentCategoryId?: string;
    /**
     * Modification timestamp.
     */
    createInfo?: LastModifiedInfo;
    /**
     * Directory site ID of this placement. On insert, you must set either this field or the siteId field to specify the site associated with this placement. This is a required field that is read-only after insertion.
     */
    directorySiteId?: string;
    /**
     * Represents a DimensionValue resource.
     */
    directorySiteIdDimensionValue?: DimensionValue;
    /**
     * External ID for this placement.
     */
    externalId?: string;
    /**
     * ID of this placement. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Represents a DimensionValue resource.
     */
    idDimensionValue?: DimensionValue;
    /**
     * Key name of this placement. This is a read-only, auto-generated field.
     */
    keyName?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#placement".
     */
    kind?: string;
    /**
     * Modification timestamp.
     */
    lastModifiedInfo?: LastModifiedInfo;
    /**
     * Lookback configuration settings.
     */
    lookbackConfiguration?: LookbackConfiguration;
    /**
     * Name of this placement.This is a required field and must be less than or equal to 512 characters long.
     */
    name?: string;
    /**
     * Whether payment was approved for this placement. This is a read-only field relevant only to publisher-paid placements.
     */
    paymentApproved?: boolean;
    /**
     * Payment source for this placement. This is a required field that is read-only after insertion.
     */
    paymentSource?: PlacementPaymentSourceEnum;
    /**
     * ID of this placement's group, if applicable.
     */
    placementGroupId?: string;
    /**
     * Represents a DimensionValue resource.
     */
    placementGroupIdDimensionValue?: DimensionValue;
    /**
     * ID of the placement strategy assigned to this placement.
     */
    placementStrategyId?: string;
    /**
     * Pricing Schedule
     */
    pricingSchedule?: PricingSchedule;
    /**
     * Whether this placement is the primary placement of a roadblock (placement group). You cannot change this field from true to false. Setting this field to true will automatically set the primary field on the original primary placement of the roadblock to false, and it will automatically set the roadblock's primaryPlacementId field to the ID of this placement.
     */
    primary?: boolean;
    /**
     * Modification timestamp.
     */
    publisherUpdateInfo?: LastModifiedInfo;
    /**
     * Site ID associated with this placement. On insert, you must set either this field or the directorySiteId field to specify the site associated with this placement. This is a required field that is read-only after insertion.
     */
    siteId?: string;
    /**
     * Represents a DimensionValue resource.
     */
    siteIdDimensionValue?: DimensionValue;
    /**
     * Represents the dimensions of ads, placements, creatives, or creative assets.
     */
    size?: Size;
    /**
     * Whether creatives assigned to this placement must be SSL-compliant.
     */
    sslRequired?: boolean;
    /**
     * Third-party placement status.
     */
    status?: PlacementStatusEnum;
    /**
     * Subaccount ID of this placement. This field can be left blank.
     */
    subaccountId?: string;
    /**
     * Tag formats to generate for this placement. This field is required on insertion. Acceptable values are: - "PLACEMENT_TAG_STANDARD" - "PLACEMENT_TAG_IFRAME_JAVASCRIPT" - "PLACEMENT_TAG_IFRAME_ILAYER" - "PLACEMENT_TAG_INTERNAL_REDIRECT" - "PLACEMENT_TAG_JAVASCRIPT" - "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT" - "PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT" - "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT" - "PLACEMENT_TAG_CLICK_COMMANDS" - "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH" - "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3" - "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4" - "PLACEMENT_TAG_TRACKING" - "PLACEMENT_TAG_TRACKING_IFRAME" - "PLACEMENT_TAG_TRACKING_JAVASCRIPT"
     */
    tagFormats?: PlacementTagFormatsEnum[];
    /**
     * Tag Settings
     */
    tagSetting?: TagSetting;
    /**
     * Whether Verification and ActiveView are disabled for in-stream video creatives for this placement. The same setting videoActiveViewOptOut exists on the site level -- the opt out occurs if either of these settings are true. These settings are distinct from DirectorySites.settings.activeViewOptOut or Sites.siteSettings.activeViewOptOut which only apply to display ads. However, Accounts.activeViewOptOut opts out both video traffic, as well as display ads, from Verification and ActiveView.
     */
    videoActiveViewOptOut?: boolean;
    /**
     * Video Settings
     */
    videoSettings?: VideoSettings;
    /**
     * VPAID adapter setting for this placement. Controls which VPAID format the measurement adapter will use for in-stream video creatives assigned to this placement. *Note:* Flash is no longer supported. This field now defaults to HTML5 when the following values are provided: FLASH, BOTH.
     */
    vpaidAdapterChoice?: PlacementVpaidAdapterChoiceEnum;
}
