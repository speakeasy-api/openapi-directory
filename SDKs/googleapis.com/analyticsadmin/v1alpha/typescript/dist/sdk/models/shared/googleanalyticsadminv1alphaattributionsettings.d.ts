import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The lookback window configuration for acquisition conversion events. The default window size is 30 days.
 */
export declare enum GoogleAnalyticsAdminV1alphaAttributionSettingsAcquisitionConversionEventLookbackWindowEnum {
    AcquisitionConversionEventLookbackWindowUnspecified = "ACQUISITION_CONVERSION_EVENT_LOOKBACK_WINDOW_UNSPECIFIED",
    AcquisitionConversionEventLookbackWindow7Days = "ACQUISITION_CONVERSION_EVENT_LOOKBACK_WINDOW_7_DAYS",
    AcquisitionConversionEventLookbackWindow30Days = "ACQUISITION_CONVERSION_EVENT_LOOKBACK_WINDOW_30_DAYS"
}
/**
 * Required. The lookback window for all other, non-acquisition conversion events. The default window size is 90 days.
 */
export declare enum GoogleAnalyticsAdminV1alphaAttributionSettingsOtherConversionEventLookbackWindowEnum {
    OtherConversionEventLookbackWindowUnspecified = "OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_UNSPECIFIED",
    OtherConversionEventLookbackWindow30Days = "OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_30_DAYS",
    OtherConversionEventLookbackWindow60Days = "OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_60_DAYS",
    OtherConversionEventLookbackWindow90Days = "OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_90_DAYS"
}
/**
 * Required. The reporting attribution model used to calculate conversion credit in this property's reports. Changing the attribution model will apply to both historical and future data. These changes will be reflected in reports with conversion and revenue data. User and session data will be unaffected.
 */
export declare enum GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnum {
    ReportingAttributionModelUnspecified = "REPORTING_ATTRIBUTION_MODEL_UNSPECIFIED",
    CrossChannelDataDriven = "CROSS_CHANNEL_DATA_DRIVEN",
    CrossChannelLastClick = "CROSS_CHANNEL_LAST_CLICK",
    CrossChannelFirstClick = "CROSS_CHANNEL_FIRST_CLICK",
    CrossChannelLinear = "CROSS_CHANNEL_LINEAR",
    CrossChannelPositionBased = "CROSS_CHANNEL_POSITION_BASED",
    CrossChannelTimeDecay = "CROSS_CHANNEL_TIME_DECAY",
    AdsPreferredLastClick = "ADS_PREFERRED_LAST_CLICK"
}
/**
 * The attribution settings used for a given property. This is a singleton resource.
 */
export declare class GoogleAnalyticsAdminV1alphaAttributionSettings extends SpeakeasyBase {
    /**
     * Required. The lookback window configuration for acquisition conversion events. The default window size is 30 days.
     */
    acquisitionConversionEventLookbackWindow?: GoogleAnalyticsAdminV1alphaAttributionSettingsAcquisitionConversionEventLookbackWindowEnum;
    /**
     * Output only. Resource name of this attribution settings resource. Format: properties/{property_id}/attributionSettings Example: "properties/1000/attributionSettings"
     */
    name?: string;
    /**
     * Required. The lookback window for all other, non-acquisition conversion events. The default window size is 90 days.
     */
    otherConversionEventLookbackWindow?: GoogleAnalyticsAdminV1alphaAttributionSettingsOtherConversionEventLookbackWindowEnum;
    /**
     * Required. The reporting attribution model used to calculate conversion credit in this property's reports. Changing the attribution model will apply to both historical and future data. These changes will be reflected in reports with conversion and revenue data. User and session data will be unaffected.
     */
    reportingAttributionModel?: GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnum;
}
