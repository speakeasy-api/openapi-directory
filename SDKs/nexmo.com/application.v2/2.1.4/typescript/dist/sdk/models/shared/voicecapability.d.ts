import { SpeakeasyBase } from "../../../internal/utils";
export declare enum VoiceCapabilityPaymentsGatewaysModeEnum {
    Test = "test",
    Live = "live"
}
export declare class VoiceCapabilityPaymentsGateways extends SpeakeasyBase {
    credential?: string;
    mode?: VoiceCapabilityPaymentsGatewaysModeEnum;
    type?: string;
}
/**
 * encompass all the payment related fields
**/
export declare class VoiceCapabilityPayments extends SpeakeasyBase {
    gateways?: VoiceCapabilityPaymentsGateways[];
}
export declare enum VoiceCapabilityWebhooksAnswerUrlHttpMethodEnum {
    Get = "GET",
    Post = "POST"
}
export declare class VoiceCapabilityWebhooksAnswerUrl extends SpeakeasyBase {
    address?: string;
    connectionTimeout?: number;
    httpMethod?: VoiceCapabilityWebhooksAnswerUrlHttpMethodEnum;
    socketTimeout?: number;
}
export declare enum VoiceCapabilityWebhooksEventUrlHttpMethodEnum {
    Get = "GET",
    Post = "POST"
}
/**
 * Vonage will send call events (e.g. `ringing`, `answered`) to this URL
**/
export declare class VoiceCapabilityWebhooksEventUrl extends SpeakeasyBase {
    address?: string;
    connectionTimeout?: number;
    httpMethod?: VoiceCapabilityWebhooksEventUrlHttpMethodEnum;
    socketTimeout?: number;
}
export declare enum VoiceCapabilityWebhooksFallbackAnswerUrlHttpMethodEnum {
    Get = "GET",
    Post = "POST"
}
export declare class VoiceCapabilityWebhooksFallbackAnswerUrl extends SpeakeasyBase {
    address?: string;
    connectionTimeout?: number;
    httpMethod?: VoiceCapabilityWebhooksFallbackAnswerUrlHttpMethodEnum;
    socketTimeout?: number;
}
export declare class VoiceCapabilityWebhooks extends SpeakeasyBase {
    answerUrl?: VoiceCapabilityWebhooksAnswerUrl;
    eventUrl?: VoiceCapabilityWebhooksEventUrl;
    fallbackAnswerUrl?: VoiceCapabilityWebhooksFallbackAnswerUrl;
}
/**
 * Voice related configuration
**/
export declare class VoiceCapability extends SpeakeasyBase {
    conversationTtl?: number;
    payments?: VoiceCapabilityPayments;
    signedCallbacks?: boolean;
    webhooks?: VoiceCapabilityWebhooks;
}
