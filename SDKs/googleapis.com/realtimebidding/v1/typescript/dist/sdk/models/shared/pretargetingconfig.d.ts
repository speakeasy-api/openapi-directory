import { SpeakeasyBase } from "../../../internal/utils";
import { AppTargeting } from "./apptargeting";
import { CreativeDimensions } from "./creativedimensions";
import { NumericTargetingDimension } from "./numerictargetingdimension";
import { StringTargetingDimension } from "./stringtargetingdimension";
export declare enum PretargetingConfigAllowedUserTargetingModesEnum {
    UserTargetingModeUnspecified = "USER_TARGETING_MODE_UNSPECIFIED",
    RemarketingAds = "REMARKETING_ADS",
    InterestBasedTargeting = "INTEREST_BASED_TARGETING"
}
export declare enum PretargetingConfigIncludedEnvironmentsEnum {
    EnvironmentUnspecified = "ENVIRONMENT_UNSPECIFIED",
    App = "APP",
    Web = "WEB"
}
export declare enum PretargetingConfigIncludedFormatsEnum {
    CreativeFormatUnspecified = "CREATIVE_FORMAT_UNSPECIFIED",
    Html = "HTML",
    Vast = "VAST",
    Native = "NATIVE"
}
export declare enum PretargetingConfigIncludedPlatformsEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED",
    PersonalComputer = "PERSONAL_COMPUTER",
    Phone = "PHONE",
    Tablet = "TABLET",
    ConnectedTv = "CONNECTED_TV"
}
export declare enum PretargetingConfigIncludedUserIdTypesEnum {
    UserIdTypeUnspecified = "USER_ID_TYPE_UNSPECIFIED",
    HostedMatchData = "HOSTED_MATCH_DATA",
    GoogleCookie = "GOOGLE_COOKIE",
    DeviceId = "DEVICE_ID"
}
/**
 * The interstitial targeting specified for this configuration. The unset value will allow bid requests to be sent regardless of whether they are for interstitials or not.
 */
export declare enum PretargetingConfigInterstitialTargetingEnum {
    InterstitialTargetingUnspecified = "INTERSTITIAL_TARGETING_UNSPECIFIED",
    OnlyInterstitialRequests = "ONLY_INTERSTITIAL_REQUESTS",
    OnlyNonInterstitialRequests = "ONLY_NON_INTERSTITIAL_REQUESTS"
}
/**
 * Output only. The state of this pretargeting configuration.
 */
export declare enum PretargetingConfigStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Suspended = "SUSPENDED"
}
/**
 * Pretargeting configuration: a set of targeting dimensions applied at the pretargeting stage of the RTB funnel. These control which inventory a bidder will receive bid requests for.
 */
export declare class PretargetingConfig extends SpeakeasyBase {
    /**
     * Targeting modes included by this configuration. A bid request must allow all the specified targeting modes. An unset value allows all bid requests to be sent, regardless of which targeting modes they allow.
     */
    allowedUserTargetingModes?: PretargetingConfigAllowedUserTargetingModesEnum[];
    /**
     * A subset of app inventory to target. Bid requests that match criteria in at least one of the specified dimensions will be sent.
     */
    appTargeting?: AppTargeting;
    /**
     * Output only. The identifier that corresponds to this pretargeting configuration that helps buyers track and attribute their spend across their own arbitrary divisions. If a bid request matches more than one configuration, the buyer chooses which billing_id to attribute each of their bids.
     */
    billingId?: string;
    /**
     * The diplay name associated with this configuration. This name must be unique among all the pretargeting configurations a bidder has.
     */
    displayName?: string;
    /**
     * The sensitive content category label IDs excluded in this configuration. Bid requests for inventory with any of the specified content label IDs will not be sent. Refer to this file https://storage.googleapis.com/adx-rtb-dictionaries/content-labels.txt for category IDs.
     */
    excludedContentLabelIds?: string[];
    /**
     * Generic targeting used for targeting dimensions that contain a list of included and excluded numeric IDs used in app, user list, geo, and vertical id targeting.
     */
    geoTargeting?: NumericTargetingDimension;
    /**
     * Creative dimensions included by this configuration. Only bid requests eligible for at least one of the specified creative dimensions will be sent. An unset value allows all bid requests to be sent, regardless of creative dimension.
     */
    includedCreativeDimensions?: CreativeDimensions[];
    /**
     * Environments that are being included. Bid requests will not be sent for a given environment if it is not included. Further restrictions can be applied to included environments to target only a subset of its inventory. An unset value includes all environments.
     */
    includedEnvironments?: PretargetingConfigIncludedEnvironmentsEnum[];
    /**
     * Creative formats included by this configuration. Only bid requests eligible for at least one of the specified creative formats will be sent. An unset value will allow all bid requests to be sent, regardless of format.
     */
    includedFormats?: PretargetingConfigIncludedFormatsEnum[];
    /**
     * The languages included in this configuration, represented by their language code. See https://developers.google.com/adwords/api/docs/appendix/languagecodes.
     */
    includedLanguages?: string[];
    /**
     * The mobile operating systems included in this configuration as defined in https://storage.googleapis.com/adx-rtb-dictionaries/mobile-os.csv
     */
    includedMobileOperatingSystemIds?: string[];
    /**
     * The platforms included by this configration. Bid requests for devices with the specified platform types will be sent. An unset value allows all bid requests to be sent, regardless of platform.
     */
    includedPlatforms?: PretargetingConfigIncludedPlatformsEnum[];
    /**
     * User identifier types included in this configuration. At least one of the user identifier types specified in this list must be available for the bid request to be sent.
     */
    includedUserIdTypes?: PretargetingConfigIncludedUserIdTypesEnum[];
    /**
     * The interstitial targeting specified for this configuration. The unset value will allow bid requests to be sent regardless of whether they are for interstitials or not.
     */
    interstitialTargeting?: PretargetingConfigInterstitialTargetingEnum;
    /**
     * Output only. Existing included or excluded geos that are invalid. Previously targeted geos may become invalid due to privacy restrictions.
     */
    invalidGeoIds?: string[];
    /**
     * The maximum QPS threshold for this configuration. The bidder should receive no more than this number of bid requests matching this configuration per second across all their bidding endpoints among all trading locations. Further information available at https://developers.google.com/authorized-buyers/rtb/peer-guide
     */
    maximumQps?: string;
    /**
     * The targeted minimum viewability decile, ranging in values [0, 10]. A value of 5 means that the configuration will only match adslots for which we predict at least 50% viewability. Values > 10 will be rounded down to 10. An unset value or a value of 0 indicates that bid requests will be sent regardless of viewability.
     */
    minimumViewabilityDecile?: number;
    /**
     * Output only. Name of the pretargeting configuration that must follow the pattern `bidders/{bidder_account_id}/pretargetingConfigs/{config_id}`
     */
    name?: string;
    /**
     * Generic targeting with string values used in app, website and publisher targeting.
     */
    publisherTargeting?: StringTargetingDimension;
    /**
     * Output only. The state of this pretargeting configuration.
     */
    state?: PretargetingConfigStateEnum;
    /**
     * Generic targeting used for targeting dimensions that contain a list of included and excluded numeric IDs used in app, user list, geo, and vertical id targeting.
     */
    userListTargeting?: NumericTargetingDimension;
    /**
     * Generic targeting used for targeting dimensions that contain a list of included and excluded numeric IDs used in app, user list, geo, and vertical id targeting.
     */
    verticalTargeting?: NumericTargetingDimension;
    /**
     * Generic targeting with string values used in app, website and publisher targeting.
     */
    webTargeting?: StringTargetingDimension;
}
/**
 * Pretargeting configuration: a set of targeting dimensions applied at the pretargeting stage of the RTB funnel. These control which inventory a bidder will receive bid requests for.
 */
export declare class PretargetingConfigInput extends SpeakeasyBase {
    /**
     * Targeting modes included by this configuration. A bid request must allow all the specified targeting modes. An unset value allows all bid requests to be sent, regardless of which targeting modes they allow.
     */
    allowedUserTargetingModes?: PretargetingConfigAllowedUserTargetingModesEnum[];
    /**
     * A subset of app inventory to target. Bid requests that match criteria in at least one of the specified dimensions will be sent.
     */
    appTargeting?: AppTargeting;
    /**
     * The diplay name associated with this configuration. This name must be unique among all the pretargeting configurations a bidder has.
     */
    displayName?: string;
    /**
     * The sensitive content category label IDs excluded in this configuration. Bid requests for inventory with any of the specified content label IDs will not be sent. Refer to this file https://storage.googleapis.com/adx-rtb-dictionaries/content-labels.txt for category IDs.
     */
    excludedContentLabelIds?: string[];
    /**
     * Generic targeting used for targeting dimensions that contain a list of included and excluded numeric IDs used in app, user list, geo, and vertical id targeting.
     */
    geoTargeting?: NumericTargetingDimension;
    /**
     * Creative dimensions included by this configuration. Only bid requests eligible for at least one of the specified creative dimensions will be sent. An unset value allows all bid requests to be sent, regardless of creative dimension.
     */
    includedCreativeDimensions?: CreativeDimensions[];
    /**
     * Environments that are being included. Bid requests will not be sent for a given environment if it is not included. Further restrictions can be applied to included environments to target only a subset of its inventory. An unset value includes all environments.
     */
    includedEnvironments?: PretargetingConfigIncludedEnvironmentsEnum[];
    /**
     * Creative formats included by this configuration. Only bid requests eligible for at least one of the specified creative formats will be sent. An unset value will allow all bid requests to be sent, regardless of format.
     */
    includedFormats?: PretargetingConfigIncludedFormatsEnum[];
    /**
     * The languages included in this configuration, represented by their language code. See https://developers.google.com/adwords/api/docs/appendix/languagecodes.
     */
    includedLanguages?: string[];
    /**
     * The mobile operating systems included in this configuration as defined in https://storage.googleapis.com/adx-rtb-dictionaries/mobile-os.csv
     */
    includedMobileOperatingSystemIds?: string[];
    /**
     * The platforms included by this configration. Bid requests for devices with the specified platform types will be sent. An unset value allows all bid requests to be sent, regardless of platform.
     */
    includedPlatforms?: PretargetingConfigIncludedPlatformsEnum[];
    /**
     * User identifier types included in this configuration. At least one of the user identifier types specified in this list must be available for the bid request to be sent.
     */
    includedUserIdTypes?: PretargetingConfigIncludedUserIdTypesEnum[];
    /**
     * The interstitial targeting specified for this configuration. The unset value will allow bid requests to be sent regardless of whether they are for interstitials or not.
     */
    interstitialTargeting?: PretargetingConfigInterstitialTargetingEnum;
    /**
     * The maximum QPS threshold for this configuration. The bidder should receive no more than this number of bid requests matching this configuration per second across all their bidding endpoints among all trading locations. Further information available at https://developers.google.com/authorized-buyers/rtb/peer-guide
     */
    maximumQps?: string;
    /**
     * The targeted minimum viewability decile, ranging in values [0, 10]. A value of 5 means that the configuration will only match adslots for which we predict at least 50% viewability. Values > 10 will be rounded down to 10. An unset value or a value of 0 indicates that bid requests will be sent regardless of viewability.
     */
    minimumViewabilityDecile?: number;
    /**
     * Generic targeting with string values used in app, website and publisher targeting.
     */
    publisherTargeting?: StringTargetingDimension;
    /**
     * Generic targeting used for targeting dimensions that contain a list of included and excluded numeric IDs used in app, user list, geo, and vertical id targeting.
     */
    userListTargeting?: NumericTargetingDimension;
    /**
     * Generic targeting used for targeting dimensions that contain a list of included and excluded numeric IDs used in app, user list, geo, and vertical id targeting.
     */
    verticalTargeting?: NumericTargetingDimension;
    /**
     * Generic targeting with string values used in app, website and publisher targeting.
     */
    webTargeting?: StringTargetingDimension;
}
