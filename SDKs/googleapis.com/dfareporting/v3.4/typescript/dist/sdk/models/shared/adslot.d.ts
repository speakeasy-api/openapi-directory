import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Ad slot compatibility. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop, mobile devices or in mobile apps for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard.
 */
export declare enum AdSlotCompatibilityEnum {
    Display = "DISPLAY",
    DisplayInterstitial = "DISPLAY_INTERSTITIAL",
    App = "APP",
    AppInterstitial = "APP_INTERSTITIAL",
    InStreamVideo = "IN_STREAM_VIDEO",
    InStreamAudio = "IN_STREAM_AUDIO"
}
/**
 * Payment source type of this ad slot.
 */
export declare enum AdSlotPaymentSourceTypeEnum {
    PlanningPaymentSourceTypeAgencyPaid = "PLANNING_PAYMENT_SOURCE_TYPE_AGENCY_PAID",
    PlanningPaymentSourceTypePublisherPaid = "PLANNING_PAYMENT_SOURCE_TYPE_PUBLISHER_PAID"
}
/**
 * Ad Slot
 */
export declare class AdSlot extends SpeakeasyBase {
    /**
     * Comment for this ad slot.
     */
    comment?: string;
    /**
     * Ad slot compatibility. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop, mobile devices or in mobile apps for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard.
     */
    compatibility?: AdSlotCompatibilityEnum;
    /**
     * Height of this ad slot.
     */
    height?: string;
    /**
     * ID of the placement from an external platform that is linked to this ad slot.
     */
    linkedPlacementId?: string;
    /**
     * Name of this ad slot.
     */
    name?: string;
    /**
     * Payment source type of this ad slot.
     */
    paymentSourceType?: AdSlotPaymentSourceTypeEnum;
    /**
     * Primary ad slot of a roadblock inventory item.
     */
    primary?: boolean;
    /**
     * Width of this ad slot.
     */
    width?: string;
}
