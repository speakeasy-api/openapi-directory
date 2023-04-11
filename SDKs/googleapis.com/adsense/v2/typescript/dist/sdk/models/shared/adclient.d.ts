import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. State of the ad client.
 */
export declare enum AdClientStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Ready = "READY",
    GettingReady = "GETTING_READY",
    RequiresReview = "REQUIRES_REVIEW"
}
/**
 * Representation of an ad client. An ad client represents a user's subscription with a specific AdSense product.
 */
export declare class AdClient extends SpeakeasyBase {
    /**
     * Output only. Resource name of the ad client. Format: accounts/{account}/adclients/{adclient}
     */
    name?: string;
    /**
     * Output only. Reporting product code of the ad client. For example, "AFC" for AdSense for Content. Corresponds to the `PRODUCT_CODE` dimension, and present only if the ad client supports reporting.
     */
    productCode?: string;
    /**
     * Output only. Unique ID of the ad client as used in the `AD_CLIENT_ID` reporting dimension. Present only if the ad client supports reporting.
     */
    reportingDimensionId?: string;
    /**
     * Output only. State of the ad client.
     */
    state?: AdClientStateEnum;
}
