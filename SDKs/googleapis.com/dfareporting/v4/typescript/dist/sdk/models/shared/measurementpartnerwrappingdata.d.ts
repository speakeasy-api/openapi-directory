import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Placement wrapping status.
 */
export declare enum MeasurementPartnerWrappingDataLinkStatusEnum {
    MeasurementPartnerUnlinked = "MEASUREMENT_PARTNER_UNLINKED",
    MeasurementPartnerLinked = "MEASUREMENT_PARTNER_LINKED",
    MeasurementPartnerLinkPending = "MEASUREMENT_PARTNER_LINK_PENDING",
    MeasurementPartnerLinkFailure = "MEASUREMENT_PARTNER_LINK_FAILURE",
    MeasurementPartnerLinkOptOut = "MEASUREMENT_PARTNER_LINK_OPT_OUT",
    MeasurementPartnerLinkOptOutPending = "MEASUREMENT_PARTNER_LINK_OPT_OUT_PENDING",
    MeasurementPartnerLinkWrappingPending = "MEASUREMENT_PARTNER_LINK_WRAPPING_PENDING",
    MeasurementPartnerModeChangePending = "MEASUREMENT_PARTNER_MODE_CHANGE_PENDING"
}
/**
 * Measurement partner used for wrapping the placement.
 */
export declare enum MeasurementPartnerWrappingDataMeasurementPartnerEnum {
    None = "NONE",
    IntegralAdScience = "INTEGRAL_AD_SCIENCE",
    DoubleVerify = "DOUBLE_VERIFY"
}
/**
 * Measurement mode for the wrapped placement.
 */
export declare enum MeasurementPartnerWrappingDataTagWrappingModeEnum {
    None = "NONE",
    Blocking = "BLOCKING",
    Monitoring = "MONITORING",
    MonitoringReadOnly = "MONITORING_READ_ONLY",
    VideoPixelMonitoring = "VIDEO_PIXEL_MONITORING",
    Tracking = "TRACKING",
    VpaidMonitoring = "VPAID_MONITORING",
    VpaidBlocking = "VPAID_BLOCKING",
    NonVpaidMonitoring = "NON_VPAID_MONITORING",
    VpaidOnlyMonitoring = "VPAID_ONLY_MONITORING",
    VpaidOnlyBlocking = "VPAID_ONLY_BLOCKING",
    VpaidOnlyFiltering = "VPAID_ONLY_FILTERING",
    VpaidFiltering = "VPAID_FILTERING",
    NonVpaidFiltering = "NON_VPAID_FILTERING"
}
/**
 * Placement tag wrapping
 */
export declare class MeasurementPartnerWrappingData extends SpeakeasyBase {
    /**
     * Placement wrapping status.
     */
    linkStatus?: MeasurementPartnerWrappingDataLinkStatusEnum;
    /**
     * Measurement partner used for wrapping the placement.
     */
    measurementPartner?: MeasurementPartnerWrappingDataMeasurementPartnerEnum;
    /**
     * Measurement mode for the wrapped placement.
     */
    tagWrappingMode?: MeasurementPartnerWrappingDataTagWrappingModeEnum;
    /**
     * Tag provided by the measurement partner during wrapping.
     */
    wrappedTag?: string;
}
