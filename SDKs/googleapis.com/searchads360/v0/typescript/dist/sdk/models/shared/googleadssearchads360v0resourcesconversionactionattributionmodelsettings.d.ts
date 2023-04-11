import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The attribution model type of this conversion action.
 */
export declare enum GoogleAdsSearchads360V0ResourcesConversionActionAttributionModelSettingsAttributionModelEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    External = "EXTERNAL",
    GoogleAdsLastClick = "GOOGLE_ADS_LAST_CLICK",
    GoogleSearchAttributionFirstClick = "GOOGLE_SEARCH_ATTRIBUTION_FIRST_CLICK",
    GoogleSearchAttributionLinear = "GOOGLE_SEARCH_ATTRIBUTION_LINEAR",
    GoogleSearchAttributionTimeDecay = "GOOGLE_SEARCH_ATTRIBUTION_TIME_DECAY",
    GoogleSearchAttributionPositionBased = "GOOGLE_SEARCH_ATTRIBUTION_POSITION_BASED",
    GoogleSearchAttributionDataDriven = "GOOGLE_SEARCH_ATTRIBUTION_DATA_DRIVEN"
}
/**
 * Output only. The status of the data-driven attribution model for the conversion action.
 */
export declare enum GoogleAdsSearchads360V0ResourcesConversionActionAttributionModelSettingsDataDrivenModelStatusEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    Available = "AVAILABLE",
    Stale = "STALE",
    Expired = "EXPIRED",
    NeverGenerated = "NEVER_GENERATED"
}
/**
 * Settings related to this conversion action's attribution model.
 */
export declare class GoogleAdsSearchads360V0ResourcesConversionActionAttributionModelSettings extends SpeakeasyBase {
    /**
     * The attribution model type of this conversion action.
     */
    attributionModel?: GoogleAdsSearchads360V0ResourcesConversionActionAttributionModelSettingsAttributionModelEnum;
    /**
     * Output only. The status of the data-driven attribution model for the conversion action.
     */
    dataDrivenModelStatus?: GoogleAdsSearchads360V0ResourcesConversionActionAttributionModelSettingsDataDrivenModelStatusEnum;
}
