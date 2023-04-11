import { SpeakeasyBase } from "../../../internal/utils";
import { CustomViewabilityMetric } from "./customviewabilitymetric";
import { DimensionValue } from "./dimensionvalue";
import { LookbackConfiguration } from "./lookbackconfiguration";
import { OmnitureSettings } from "./omnituresettings";
import { TagSettings } from "./tagsettings";
import { ThirdPartyAuthenticationToken } from "./thirdpartyauthenticationtoken";
import { UserDefinedVariableConfiguration } from "./userdefinedvariableconfiguration";
/**
 * Day that will be counted as the first day of the week in reports. This is a required field.
 */
export declare enum FloodlightConfigurationFirstDayOfWeekEnum {
    Monday = "MONDAY",
    Sunday = "SUNDAY"
}
/**
 * Types of attribution options for natural search conversions.
 */
export declare enum FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum {
    ExcludeNaturalSearchConversionAttribution = "EXCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION",
    IncludeNaturalSearchConversionAttribution = "INCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION",
    IncludeNaturalSearchTieredConversionAttribution = "INCLUDE_NATURAL_SEARCH_TIERED_CONVERSION_ATTRIBUTION"
}
/**
 * Contains properties of a Floodlight configuration.
 */
export declare class FloodlightConfiguration extends SpeakeasyBase {
    /**
     * Account ID of this floodlight configuration. This is a read-only field that can be left blank.
     */
    accountId?: string;
    /**
     * Advertiser ID of the parent advertiser of this floodlight configuration.
     */
    advertiserId?: string;
    /**
     * Represents a DimensionValue resource.
     */
    advertiserIdDimensionValue?: DimensionValue;
    /**
     * Whether advertiser data is shared with Google Analytics.
     */
    analyticsDataSharingEnabled?: boolean;
    /**
     * Custom Viewability Metric
     */
    customViewabilityMetric?: CustomViewabilityMetric;
    /**
     * Whether the exposure-to-conversion report is enabled. This report shows detailed pathway information on up to 10 of the most recent ad exposures seen by a user before converting.
     */
    exposureToConversionEnabled?: boolean;
    /**
     * Day that will be counted as the first day of the week in reports. This is a required field.
     */
    firstDayOfWeek?: FloodlightConfigurationFirstDayOfWeekEnum;
    /**
     * ID of this floodlight configuration. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Represents a DimensionValue resource.
     */
    idDimensionValue?: DimensionValue;
    /**
     * Whether in-app attribution tracking is enabled.
     */
    inAppAttributionTrackingEnabled?: boolean;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightConfiguration".
     */
    kind?: string;
    /**
     * Lookback configuration settings.
     */
    lookbackConfiguration?: LookbackConfiguration;
    /**
     * Types of attribution options for natural search conversions.
     */
    naturalSearchConversionAttributionOption?: FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum;
    /**
     * Omniture Integration Settings.
     */
    omnitureSettings?: OmnitureSettings;
    /**
     * Subaccount ID of this floodlight configuration. This is a read-only field that can be left blank.
     */
    subaccountId?: string;
    /**
     * Dynamic and Image Tag Settings.
     */
    tagSettings?: TagSettings;
    /**
     * List of third-party authentication tokens enabled for this configuration.
     */
    thirdPartyAuthenticationTokens?: ThirdPartyAuthenticationToken[];
    /**
     * List of user defined variables enabled for this configuration.
     */
    userDefinedVariableConfigurations?: UserDefinedVariableConfiguration[];
}
