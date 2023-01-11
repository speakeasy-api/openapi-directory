import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VoiceCapabilityPaymentsGatewaysModeEnum {
    Test = "test",
    Live = "live"
}


export class VoiceCapabilityPaymentsGateways extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=credential" })
  credential?: string;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: VoiceCapabilityPaymentsGatewaysModeEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// VoiceCapabilityPayments
/** 
 * encompass all the payment related fields
**/
export class VoiceCapabilityPayments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gateways", elemType: VoiceCapabilityPaymentsGateways })
  gateways?: VoiceCapabilityPaymentsGateways[];
}

export enum VoiceCapabilityWebhooksAnswerUrlHttpMethodEnum {
    Get = "GET",
    Post = "POST"
}


export class VoiceCapabilityWebhooksAnswerUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=connection_timeout" })
  connectionTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=http_method" })
  httpMethod?: VoiceCapabilityWebhooksAnswerUrlHttpMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=socket_timeout" })
  socketTimeout?: number;
}

export enum VoiceCapabilityWebhooksEventUrlHttpMethodEnum {
    Get = "GET",
    Post = "POST"
}


// VoiceCapabilityWebhooksEventUrl
/** 
 * Vonage will send call events (e.g. `ringing`, `answered`) to this URL
**/
export class VoiceCapabilityWebhooksEventUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=connection_timeout" })
  connectionTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=http_method" })
  httpMethod?: VoiceCapabilityWebhooksEventUrlHttpMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=socket_timeout" })
  socketTimeout?: number;
}

export enum VoiceCapabilityWebhooksFallbackAnswerUrlHttpMethodEnum {
    Get = "GET",
    Post = "POST"
}


export class VoiceCapabilityWebhooksFallbackAnswerUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=connection_timeout" })
  connectionTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=http_method" })
  httpMethod?: VoiceCapabilityWebhooksFallbackAnswerUrlHttpMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=socket_timeout" })
  socketTimeout?: number;
}


export class VoiceCapabilityWebhooks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answer_url" })
  answerUrl?: VoiceCapabilityWebhooksAnswerUrl;

  @SpeakeasyMetadata({ data: "json, name=event_url" })
  eventUrl?: VoiceCapabilityWebhooksEventUrl;

  @SpeakeasyMetadata({ data: "json, name=fallback_answer_url" })
  fallbackAnswerUrl?: VoiceCapabilityWebhooksFallbackAnswerUrl;
}


// VoiceCapability
/** 
 * Voice related configuration
**/
export class VoiceCapability extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversation_ttl" })
  conversationTtl?: number;

  @SpeakeasyMetadata({ data: "json, name=payments" })
  payments?: VoiceCapabilityPayments;

  @SpeakeasyMetadata({ data: "json, name=signed_callbacks" })
  signedCallbacks?: boolean;

  @SpeakeasyMetadata({ data: "json, name=webhooks" })
  webhooks?: VoiceCapabilityWebhooks;
}
