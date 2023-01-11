import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MessagesCapabilityWebhooksInboundUrlHttpMethodEnum {
    Post = "POST"
}


// MessagesCapabilityWebhooksInboundUrl
/** 
 * Vonage will forward inbound messages to this URL
**/
export class MessagesCapabilityWebhooksInboundUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=http_method" })
  httpMethod?: MessagesCapabilityWebhooksInboundUrlHttpMethodEnum;
}

export enum MessagesCapabilityWebhooksStatusUrlHttpMethodEnum {
    Post = "POST"
}


// MessagesCapabilityWebhooksStatusUrl
/** 
 * Vonage will send message status updates (e.g. `delivered`, `seen`) to this URL
**/
export class MessagesCapabilityWebhooksStatusUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=http_method" })
  httpMethod?: MessagesCapabilityWebhooksStatusUrlHttpMethodEnum;
}


export class MessagesCapabilityWebhooks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inbound_url" })
  inboundUrl?: MessagesCapabilityWebhooksInboundUrl;

  @SpeakeasyMetadata({ data: "json, name=status_url" })
  statusUrl?: MessagesCapabilityWebhooksStatusUrl;
}


// MessagesCapability
/** 
 * Messages / Dispatch related configuration
**/
export class MessagesCapability extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;

  @SpeakeasyMetadata({ data: "json, name=webhooks" })
  webhooks?: MessagesCapabilityWebhooks;
}
