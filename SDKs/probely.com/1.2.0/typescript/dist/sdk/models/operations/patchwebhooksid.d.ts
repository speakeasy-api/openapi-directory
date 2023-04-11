import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchWebhooksIdRequest extends SpeakeasyBase {
    webhookInput: shared.WebhookInput;
    /**
     * Object Id
     */
    id: string;
}
/**
 * Not found
 */
export declare class PatchWebhooksId404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PatchWebhooksId403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PatchWebhooksId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PatchWebhooksId400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PatchWebhooksIdResponse extends SpeakeasyBase {
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
    patchWebhooksId400ApplicationJSONObject?: PatchWebhooksId400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    patchWebhooksId401ApplicationJSONObject?: PatchWebhooksId401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    patchWebhooksId403ApplicationJSONObject?: PatchWebhooksId403ApplicationJSON;
    /**
     * Not found
     */
    patchWebhooksId404ApplicationJSONObject?: PatchWebhooksId404ApplicationJSON;
}
