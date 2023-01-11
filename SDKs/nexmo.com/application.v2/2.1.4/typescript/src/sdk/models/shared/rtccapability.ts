import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RtcCapabilityWebhooksEventUrlHttpMethodEnum {
    Get = "GET",
    Post = "POST"
}


// RtcCapabilityWebhooksEventUrl
/** 
 * Vonage will send RTC events to this URL
**/
export class RtcCapabilityWebhooksEventUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=http_method" })
  httpMethod?: RtcCapabilityWebhooksEventUrlHttpMethodEnum;
}


export class RtcCapabilityWebhooks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=event_url" })
  eventUrl?: RtcCapabilityWebhooksEventUrl;
}


// RtcCapability
/** 
 * RTC / Conversation Service related configuration
**/
export class RtcCapability extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=leg_persistence_time" })
  legPersistenceTime?: number;

  @SpeakeasyMetadata({ data: "json, name=signed_callbacks" })
  signedCallbacks?: boolean;

  @SpeakeasyMetadata({ data: "json, name=webhooks" })
  webhooks?: RtcCapabilityWebhooks;
}
