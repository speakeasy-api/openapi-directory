import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutWebhooksIdRequest extends SpeakeasyBase {
    webhookInput: shared.WebhookInput;
    /**
     * Object Id
     */
    id: string;
}
/**
 * Not found
 */
export declare class PutWebhooksId404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PutWebhooksId403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PutWebhooksId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PutWebhooksId400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PutWebhooksIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Webhooks
     */
    webhook?: shared.Webhook;
    /**
     * Bad Request
     */
    putWebhooksId400ApplicationJSONObject?: PutWebhooksId400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    putWebhooksId401ApplicationJSONObject?: PutWebhooksId401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    putWebhooksId403ApplicationJSONObject?: PutWebhooksId403ApplicationJSON;
    /**
     * Not found
     */
    putWebhooksId404ApplicationJSONObject?: PutWebhooksId404ApplicationJSON;
}
