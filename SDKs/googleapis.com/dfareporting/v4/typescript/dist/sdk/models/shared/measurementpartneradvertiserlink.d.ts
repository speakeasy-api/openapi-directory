import { SpeakeasyBase } from "../../../internal/utils";
/**
 * .
 */
export declare enum MeasurementPartnerAdvertiserLinkLinkStatusEnum {
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
 * Measurement partner used for tag wrapping.
 */
export declare enum MeasurementPartnerAdvertiserLinkMeasurementPartnerEnum {
    None = "NONE",
    IntegralAdScience = "INTEGRAL_AD_SCIENCE",
    DoubleVerify = "DOUBLE_VERIFY"
}
export declare class MeasurementPartnerAdvertiserLink extends SpeakeasyBase {
    /**
     * .
     */
    linkStatus?: MeasurementPartnerAdvertiserLinkLinkStatusEnum;
    /**
     * Measurement partner used for tag wrapping.
     */
    measurementPartner?: MeasurementPartnerAdvertiserLinkMeasurementPartnerEnum;
    /**
     * .
     */
    partnerAdvertiserId?: string;
}
