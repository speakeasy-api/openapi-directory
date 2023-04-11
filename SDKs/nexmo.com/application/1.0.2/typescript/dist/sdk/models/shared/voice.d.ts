import { SpeakeasyBase } from "../../../internal/utils";
export declare enum VoiceWebhooksEndpointTypeEnum {
    AnswerUrl = "answer_url",
    EventUrl = "event_url"
}
/**
 * The HTTP method used to send event information to the `event_url` or `answer_url`.
 */
export declare enum VoiceWebhooksHttpMethodEnum {
    Get = "GET",
    Post = "POST"
}
export declare class VoiceWebhooks extends SpeakeasyBase {
    /**
     * `answer_url`: The URL where your webhook delivers the Nexmo Call Control Object that governs this call. As soon as your user answers a call Nexmo makes a request to answer_url. `event_url`: Nexmo sends event information asynchronously to this URL when status changes.
     */
    endpoint: string;
    endpointType: VoiceWebhooksEndpointTypeEnum;
    /**
     * The HTTP method used to send event information to the `event_url` or `answer_url`.
     */
    httpMethod: VoiceWebhooksHttpMethodEnum;
}
/**
 * The Nexmo product that you access with this application.
 */
export declare class Voice extends SpeakeasyBase {
    webhooks?: VoiceWebhooks[];
}
