import { SpeakeasyBase } from "../../../internal/utils";
/**
 * determines if the user has completed the integration with the gateway
 */
export declare enum VoiceCapabilityPaymentsGatewaysModeEnum {
    Test = "test",
    Live = "live"
}
export declare class VoiceCapabilityPaymentsGateways extends SpeakeasyBase {
    /**
     * used to identify the gateway in the credentials service
     */
    credential?: string;
    /**
     * determines if the user has completed the integration with the gateway
     */
    mode?: VoiceCapabilityPaymentsGatewaysModeEnum;
    /**
     * payment gateway type (Stripe, Azure)
     */
    type?: string;
}
/**
 * encompass all the payment related fields
 */
export declare class VoiceCapabilityPayments extends SpeakeasyBase {
    /**
     * payment gateways like Stripe
     */
    gateways?: VoiceCapabilityPaymentsGateways[];
}
/**
 * The HTTP method used to fetch your NCCO from your `answer_url`
 */
export declare enum VoiceCapabilityWebhooksAnswerUrlHttpMethodEnum {
    Get = "GET",
    Post = "POST"
}
export declare class VoiceCapabilityWebhooksAnswerUrl extends SpeakeasyBase {
    /**
     * The URL that Vonage requests when a call is placed/received. Must return an NCCO
     */
    address?: string;
    /**
     * If Vonage can't connect to the webhook URL for this specified amount of time, then Vonage makes one additional attempt to connect to the webhook endpoint. This is an integer value specified in milliseconds.
     */
    connectionTimeout?: number;
    /**
     * The HTTP method used to fetch your NCCO from your `answer_url`
     */
    httpMethod?: VoiceCapabilityWebhooksAnswerUrlHttpMethodEnum;
    /**
     * If a response from the webhook URL can't be read for this specified amount of time, then Vonage makes one additional attempt to read the webhook endpoint. This is an integer value specified in milliseconds.
     */
    socketTimeout?: number;
}
/**
 * The HTTP method used to send events to your server
 */
export declare enum VoiceCapabilityWebhooksEventUrlHttpMethodEnum {
    Get = "GET",
    Post = "POST"
}
/**
 * Vonage will send call events (e.g. `ringing`, `answered`) to this URL
 */
export declare class VoiceCapabilityWebhooksEventUrl extends SpeakeasyBase {
    /**
     * The URL that Vonage sends events related to your call to
     */
    address?: string;
    /**
     * If Vonage can't connect to the webhook URL for this specified amount of time, then Vonage makes one additional attempt to connect to the webhook endpoint. This is an integer value specified in milliseconds.
     */
    connectionTimeout?: number;
    /**
     * The HTTP method used to send events to your server
     */
    httpMethod?: VoiceCapabilityWebhooksEventUrlHttpMethodEnum;
    /**
     * If a response from the webhook URL can't be read for this specified amount of time, then Vonage makes one additional attempt to read the webhook endpoint. This is an integer value specified in milliseconds.
     */
    socketTimeout?: number;
}
/**
 * The HTTP method used to fetch your NCCO from your `answer_url`
 */
export declare enum VoiceCapabilityWebhooksFallbackAnswerUrlHttpMethodEnum {
    Get = "GET",
    Post = "POST"
}
export declare class VoiceCapabilityWebhooksFallbackAnswerUrl extends SpeakeasyBase {
    /**
     * If your `answer_url` is offline or returns a HTTP error code, Vonage will make a request to a
     *
     * @remarks
     * `fallback_answer_url` if it is set. This URL must return an NCCO.
     *
     */
    address?: string;
    /**
     * If Vonage can't connect to the webhook URL for this specified amount of time, then Vonage makes one additional attempt to connect to the webhook endpoint. This is an integer value specified in milliseconds.
     */
    connectionTimeout?: number;
    /**
     * The HTTP method used to fetch your NCCO from your `answer_url`
     */
    httpMethod?: VoiceCapabilityWebhooksFallbackAnswerUrlHttpMethodEnum;
    /**
     * If a response from the webhook URL can't be read for this specified amount of time, then Vonage makes one additional attempt to read the webhook endpoint. This is an integer value specified in milliseconds.
     */
    socketTimeout?: number;
}
export declare class VoiceCapabilityWebhooks extends SpeakeasyBase {
    answerUrl?: VoiceCapabilityWebhooksAnswerUrl;
    /**
     * Vonage will send call events (e.g. `ringing`, `answered`) to this URL
     */
    eventUrl?: VoiceCapabilityWebhooksEventUrl;
    fallbackAnswerUrl?: VoiceCapabilityWebhooksFallbackAnswerUrl;
}
/**
 * Voice related configuration
 */
export declare class VoiceCapability extends SpeakeasyBase {
    /**
     * ttl used by the NCCO in case you’re using a conversation action (is set in hours and is 48 by default)
     */
    conversationTtl?: number;
    /**
     * encompass all the payment related fields
     */
    payments?: VoiceCapabilityPayments;
    /**
     * verify that a request is coming from Vonage servers (a jwt token will be sent on the callback authorization header)
     */
    signedCallbacks?: boolean;
    webhooks?: VoiceCapabilityWebhooks;
}
