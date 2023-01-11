import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MessagesCapabilityWebhooksInboundUrlHttpMethodEnum {
    Post = "POST"
}
/**
 * Vonage will forward inbound messages to this URL
**/
export declare class MessagesCapabilityWebhooksInboundUrl extends SpeakeasyBase {
    address?: string;
    httpMethod?: MessagesCapabilityWebhooksInboundUrlHttpMethodEnum;
}
export declare enum MessagesCapabilityWebhooksStatusUrlHttpMethodEnum {
    Post = "POST"
}
/**
 * Vonage will send message status updates (e.g. `delivered`, `seen`) to this URL
**/
export declare class MessagesCapabilityWebhooksStatusUrl extends SpeakeasyBase {
    address?: string;
    httpMethod?: MessagesCapabilityWebhooksStatusUrlHttpMethodEnum;
}
export declare class MessagesCapabilityWebhooks extends SpeakeasyBase {
    inboundUrl?: MessagesCapabilityWebhooksInboundUrl;
    statusUrl?: MessagesCapabilityWebhooksStatusUrl;
}
/**
 * Messages / Dispatch related configuration
**/
export declare class MessagesCapability extends SpeakeasyBase {
    version?: string;
    webhooks?: MessagesCapabilityWebhooks;
}
