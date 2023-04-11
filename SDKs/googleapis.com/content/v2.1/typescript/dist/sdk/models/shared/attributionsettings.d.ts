import { SpeakeasyBase } from "../../../internal/utils";
import { AttributionSettingsConversionType } from "./attributionsettingsconversiontype";
/**
 * Required. Attribution model.
 */
export declare enum AttributionSettingsAttributionModelEnum {
    AttributionModelUnspecified = "ATTRIBUTION_MODEL_UNSPECIFIED",
    CrossChannelLastClick = "CROSS_CHANNEL_LAST_CLICK",
    AdsPreferredLastClick = "ADS_PREFERRED_LAST_CLICK",
    CrossChannelDataDriven = "CROSS_CHANNEL_DATA_DRIVEN",
    CrossChannelFirstClick = "CROSS_CHANNEL_FIRST_CLICK",
    CrossChannelLinear = "CROSS_CHANNEL_LINEAR",
    CrossChannelPositionBased = "CROSS_CHANNEL_POSITION_BASED",
    CrossChannelTimeDecay = "CROSS_CHANNEL_TIME_DECAY"
}
/**
 * Represents attribution settings for conversion sources receiving pre-attribution data.
 */
export declare class AttributionSettingsInput extends SpeakeasyBase {
    /**
     * Required. Lookback windows (in days) used for attribution in this source. Supported values are 7, 30, 60, 90.
     */
    attributionLookbackWindowInDays?: number;
    /**
     * Required. Attribution model.
     */
    attributionModel?: AttributionSettingsAttributionModelEnum;
}
/**
 * Represents attribution settings for conversion sources receiving pre-attribution data.
 */
export declare class AttributionSettings extends SpeakeasyBase {
    /**
     * Required. Lookback windows (in days) used for attribution in this source. Supported values are 7, 30, 60, 90.
     */
    attributionLookbackWindowInDays?: number;
    /**
     * Required. Attribution model.
     */
    attributionModel?: AttributionSettingsAttributionModelEnum;
    /**
     * Immutable. Unordered list. List of different conversion types a conversion event can be classified as. A standard "purchase" type will be automatically created if this list is empty at creation time.
     */
    conversionType?: AttributionSettingsConversionType[];
}
