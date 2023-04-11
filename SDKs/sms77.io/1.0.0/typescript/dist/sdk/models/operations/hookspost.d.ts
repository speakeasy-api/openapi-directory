import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Determines the action to execute.
 */
export declare enum HooksPOSTActionEnum {
    Subscribe = "subscribe",
    Unsubscribe = "unsubscribe"
}
/**
 * Type of event for which you would like to receive a webhook.
 */
export declare enum HooksPOSTEventTypeEnum {
    All = "all",
    SmsMo = "sms_mo",
    Dlr = "dlr",
    VoiceStatus = "voice_status"
}
/**
 * Request method in which you want to receive the webhook.
 */
export declare enum HooksPOSTRequestMethodEnum {
    Post = "POST",
    Json = "JSON",
    Get = "GET"
}
export declare class HooksPOSTRequest extends SpeakeasyBase {
    /**
     * Determines the action to execute.
     */
    action: HooksPOSTActionEnum;
    /**
     * Type of event for which you would like to receive a webhook.
     */
    eventType?: HooksPOSTEventTypeEnum;
    /**
     * The Webhook ID you wish to unsubscribe.
     */
    id?: number;
    /**
     * Request method in which you want to receive the webhook.
     */
    requestMethod?: HooksPOSTRequestMethodEnum;
    /**
     * Target URL of your Webhook.
     */
    targetUrl?: string;
}
/**
 * Hook subscribed
 */
export declare class HooksPost200ApplicationJSON extends SpeakeasyBase {
    id?: number;
    success?: boolean;
}
export declare class HooksPOSTResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Hook subscribed
     */
    hooksPOST200ApplicationJSONObject?: HooksPost200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
