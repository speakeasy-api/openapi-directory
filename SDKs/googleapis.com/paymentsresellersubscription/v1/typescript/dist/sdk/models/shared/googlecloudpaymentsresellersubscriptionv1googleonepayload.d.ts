import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum {
    OfferingUnspecified = "OFFERING_UNSPECIFIED",
    OfferingVasBundle = "OFFERING_VAS_BUNDLE",
    OfferingVasStandalone = "OFFERING_VAS_STANDALONE",
    OfferingHardBundle = "OFFERING_HARD_BUNDLE",
    OfferingSoftBundle = "OFFERING_SOFT_BUNDLE"
}
export declare enum GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnum {
    ChannelUnspecified = "CHANNEL_UNSPECIFIED",
    ChannelRetail = "CHANNEL_RETAIL",
    ChannelOnlineWeb = "CHANNEL_ONLINE_WEB",
    ChannelOnlineAndroidApp = "CHANNEL_ONLINE_ANDROID_APP",
    ChannelOnlineIosApp = "CHANNEL_ONLINE_IOS_APP"
}
/**
 * Payload specific to Google One products.
**/
export declare class GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload extends SpeakeasyBase {
    campaigns?: string[];
    offering?: GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum;
    salesChannel?: GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnum;
    storeId?: string;
}
