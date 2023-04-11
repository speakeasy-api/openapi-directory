import { SpeakeasyBase } from "../../../internal/utils";
import { ClickThroughUrl } from "./clickthroughurl";
import { ClickThroughUrlSuffixProperties } from "./clickthroughurlsuffixproperties";
import { CreativeGroupAssignment } from "./creativegroupassignment";
import { CreativeRotation } from "./creativerotation";
import { DayPartTargeting } from "./dayparttargeting";
import { DefaultClickThroughEventTagProperties } from "./defaultclickthrougheventtagproperties";
import { DeliverySchedule } from "./deliveryschedule";
import { DimensionValue } from "./dimensionvalue";
import { EventTagOverride } from "./eventtagoverride";
import { GeoTargeting } from "./geotargeting";
import { KeyValueTargetingExpression } from "./keyvaluetargetingexpression";
import { LanguageTargeting } from "./languagetargeting";
import { LastModifiedInfo } from "./lastmodifiedinfo";
import { ListTargetingExpression } from "./listtargetingexpression";
import { PlacementAssignment } from "./placementassignment";
import { Size } from "./size";
import { TechnologyTargeting } from "./technologytargeting";
/**
 * Compatibility of this ad. Applicable when type is AD_SERVING_DEFAULT_AD. DISPLAY and DISPLAY_INTERSTITIAL refer to either rendering on desktop or on mobile devices or in mobile apps for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are only used for existing default ads. New mobile placements must be assigned DISPLAY or DISPLAY_INTERSTITIAL and default ads created for those placements will be limited to those compatibility types. IN_STREAM_VIDEO refers to rendering in-stream video ads developed with the VAST standard.
 */
export declare enum AdCompatibilityEnum {
    Display = "DISPLAY",
    DisplayInterstitial = "DISPLAY_INTERSTITIAL",
    App = "APP",
    AppInterstitial = "APP_INTERSTITIAL",
    InStreamVideo = "IN_STREAM_VIDEO",
    InStreamAudio = "IN_STREAM_AUDIO"
}
/**
 * Type of ad. This is a required field on insertion. Note that default ads ( AD_SERVING_DEFAULT_AD) cannot be created directly (see Creative resource).
 */
export declare enum AdTypeEnum {
    AdServingStandardAd = "AD_SERVING_STANDARD_AD",
    AdServingDefaultAd = "AD_SERVING_DEFAULT_AD",
    AdServingClickTracker = "AD_SERVING_CLICK_TRACKER",
    AdServingTracking = "AD_SERVING_TRACKING",
    AdServingBrandSafeAd = "AD_SERVING_BRAND_SAFE_AD"
}
/**
 * Contains properties of a Campaign Manager ad.
 */
export declare class Ad extends SpeakeasyBase {
    /**
     * Account ID of this ad. This is a read-only field that can be left blank.
     */
    accountId?: string;
    /**
     * Whether this ad is active. When true, archived must be false.
     */
    active?: boolean;
    /**
     * Advertiser ID of this ad. This is a required field on insertion.
     */
    advertiserId?: string;
    /**
     * Represents a DimensionValue resource.
     */
    advertiserIdDimensionValue?: DimensionValue;
    /**
     * Whether this ad is archived. When true, active must be false.
     */
    archived?: boolean;
    /**
     * Audience segment ID that is being targeted for this ad. Applicable when type is AD_SERVING_STANDARD_AD.
     */
    audienceSegmentId?: string;
    /**
     * Campaign ID of this ad. This is a required field on insertion.
     */
    campaignId?: string;
    /**
     * Represents a DimensionValue resource.
     */
    campaignIdDimensionValue?: DimensionValue;
    /**
     * Click-through URL
     */
    clickThroughUrl?: ClickThroughUrl;
    /**
     * Click Through URL Suffix settings.
     */
    clickThroughUrlSuffixProperties?: ClickThroughUrlSuffixProperties;
    /**
     * Comments for this ad.
     */
    comments?: string;
    /**
     * Compatibility of this ad. Applicable when type is AD_SERVING_DEFAULT_AD. DISPLAY and DISPLAY_INTERSTITIAL refer to either rendering on desktop or on mobile devices or in mobile apps for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are only used for existing default ads. New mobile placements must be assigned DISPLAY or DISPLAY_INTERSTITIAL and default ads created for those placements will be limited to those compatibility types. IN_STREAM_VIDEO refers to rendering in-stream video ads developed with the VAST standard.
     */
    compatibility?: AdCompatibilityEnum;
    /**
     * Modification timestamp.
     */
    createInfo?: LastModifiedInfo;
    /**
     * Creative group assignments for this ad. Applicable when type is AD_SERVING_CLICK_TRACKER. Only one assignment per creative group number is allowed for a maximum of two assignments.
     */
    creativeGroupAssignments?: CreativeGroupAssignment[];
    /**
     * Creative Rotation.
     */
    creativeRotation?: CreativeRotation;
    /**
     * Day Part Targeting.
     */
    dayPartTargeting?: DayPartTargeting;
    /**
     * Properties of inheriting and overriding the default click-through event tag. A campaign may override the event tag defined at the advertiser level, and an ad may also override the campaign's setting further.
     */
    defaultClickThroughEventTagProperties?: DefaultClickThroughEventTagProperties;
    /**
     * Delivery Schedule.
     */
    deliverySchedule?: DeliverySchedule;
    /**
     * Whether this ad is a dynamic click tracker. Applicable when type is AD_SERVING_CLICK_TRACKER. This is a required field on insert, and is read-only after insert.
     */
    dynamicClickTracker?: boolean;
    endTime?: Date;
    /**
     * Event tag overrides for this ad.
     */
    eventTagOverrides?: EventTagOverride[];
    /**
     * Geographical Targeting.
     */
    geoTargeting?: GeoTargeting;
    /**
     * ID of this ad. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Represents a DimensionValue resource.
     */
    idDimensionValue?: DimensionValue;
    /**
     * Key Value Targeting Expression.
     */
    keyValueTargetingExpression?: KeyValueTargetingExpression;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#ad".
     */
    kind?: string;
    /**
     * Language Targeting.
     */
    languageTargeting?: LanguageTargeting;
    /**
     * Modification timestamp.
     */
    lastModifiedInfo?: LastModifiedInfo;
    /**
     * Name of this ad. This is a required field and must be less than 256 characters long.
     */
    name?: string;
    /**
     * Placement assignments for this ad.
     */
    placementAssignments?: PlacementAssignment[];
    /**
     * Remarketing List Targeting Expression.
     */
    remarketingListExpression?: ListTargetingExpression;
    /**
     * Represents the dimensions of ads, placements, creatives, or creative assets.
     */
    size?: Size;
    /**
     * Whether this ad is ssl compliant. This is a read-only field that is auto-generated when the ad is inserted or updated.
     */
    sslCompliant?: boolean;
    /**
     * Whether this ad requires ssl. This is a read-only field that is auto-generated when the ad is inserted or updated.
     */
    sslRequired?: boolean;
    startTime?: Date;
    /**
     * Subaccount ID of this ad. This is a read-only field that can be left blank.
     */
    subaccountId?: string;
    /**
     * Targeting template ID, used to apply preconfigured targeting information to this ad. This cannot be set while any of dayPartTargeting, geoTargeting, keyValueTargetingExpression, languageTargeting, remarketingListExpression, or technologyTargeting are set. Applicable when type is AD_SERVING_STANDARD_AD.
     */
    targetingTemplateId?: string;
    /**
     * Technology Targeting.
     */
    technologyTargeting?: TechnologyTargeting;
    /**
     * Type of ad. This is a required field on insertion. Note that default ads ( AD_SERVING_DEFAULT_AD) cannot be created directly (see Creative resource).
     */
    type?: AdTypeEnum;
}
