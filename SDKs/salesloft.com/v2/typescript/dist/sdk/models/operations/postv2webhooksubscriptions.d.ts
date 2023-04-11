import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostV2WebhookSubscriptionsRequestBody extends SpeakeasyBase {
    /**
     * Any string to be used as a shared secret when subscription events are published. SalesLoft will send the value of this callback_token in the payload of each event so the receiver may verify it matches the original value. This ensures webhook events are being delivered by SalesLoft.
     */
    callbackToken: string;
    /**
     * URL for your callback handler
     */
    callbackUrl: string;
    /**
     * Type of event the subscription is for. Visit the "Event Types" section of the webhooks page to find a list of supported event types.
     */
    eventType: string;
}
export declare class PostV2WebhookSubscriptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
