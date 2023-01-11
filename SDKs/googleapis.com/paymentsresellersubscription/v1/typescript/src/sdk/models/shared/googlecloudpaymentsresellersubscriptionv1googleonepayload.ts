import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum {
    OfferingUnspecified = "OFFERING_UNSPECIFIED",
    OfferingVasBundle = "OFFERING_VAS_BUNDLE",
    OfferingVasStandalone = "OFFERING_VAS_STANDALONE",
    OfferingHardBundle = "OFFERING_HARD_BUNDLE",
    OfferingSoftBundle = "OFFERING_SOFT_BUNDLE"
}

export enum GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnum {
    ChannelUnspecified = "CHANNEL_UNSPECIFIED",
    ChannelRetail = "CHANNEL_RETAIL",
    ChannelOnlineWeb = "CHANNEL_ONLINE_WEB",
    ChannelOnlineAndroidApp = "CHANNEL_ONLINE_ANDROID_APP",
    ChannelOnlineIosApp = "CHANNEL_ONLINE_IOS_APP"
}


// GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload
/** 
 * Payload specific to Google One products.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=campaigns" })
  campaigns?: string[];

  @SpeakeasyMetadata({ data: "json, name=offering" })
  offering?: GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum;

  @SpeakeasyMetadata({ data: "json, name=salesChannel" })
  salesChannel?: GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnum;

  @SpeakeasyMetadata({ data: "json, name=storeId" })
  storeId?: string;
}
