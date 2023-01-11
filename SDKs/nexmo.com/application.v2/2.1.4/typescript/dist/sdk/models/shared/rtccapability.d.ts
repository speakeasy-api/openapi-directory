import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RtcCapabilityWebhooksEventUrlHttpMethodEnum {
    Get = "GET",
    Post = "POST"
}
/**
 * Vonage will send RTC events to this URL
**/
export declare class RtcCapabilityWebhooksEventUrl extends SpeakeasyBase {
    address?: string;
    httpMethod?: RtcCapabilityWebhooksEventUrlHttpMethodEnum;
}
export declare class RtcCapabilityWebhooks extends SpeakeasyBase {
    eventUrl?: RtcCapabilityWebhooksEventUrl;
}
/**
 * RTC / Conversation Service related configuration
**/
export declare class RtcCapability extends SpeakeasyBase {
    legPersistenceTime?: number;
    signedCallbacks?: boolean;
    webhooks?: RtcCapabilityWebhooks;
}
