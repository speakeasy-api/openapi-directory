import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchTargetsTargetIdWebhooksIdRequest extends SpeakeasyBase {
    webhookInput: shared.WebhookInput;
    /**
     * Object Id
     */
    id: string;
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not found
 */
export declare class PatchTargetsTargetIdWebhooksId404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PatchTargetsTargetIdWebhooksId403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PatchTargetsTargetIdWebhooksId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PatchTargetsTargetIdWebhooksId400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PatchTargetsTargetIdWebhooksIdResponse extends SpeakeasyBase {
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
    patchTargetsTargetIdWebhooksId400ApplicationJSONObject?: PatchTargetsTargetIdWebhooksId400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    patchTargetsTargetIdWebhooksId401ApplicationJSONObject?: PatchTargetsTargetIdWebhooksId401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    patchTargetsTargetIdWebhooksId403ApplicationJSONObject?: PatchTargetsTargetIdWebhooksId403ApplicationJSON;
    /**
     * Not found
     */
    patchTargetsTargetIdWebhooksId404ApplicationJSONObject?: PatchTargetsTargetIdWebhooksId404ApplicationJSON;
}
