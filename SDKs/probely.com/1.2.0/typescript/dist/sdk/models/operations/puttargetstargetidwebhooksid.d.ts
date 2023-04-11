import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutTargetsTargetIdWebhooksIdRequest extends SpeakeasyBase {
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
export declare class PutTargetsTargetIdWebhooksId404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PutTargetsTargetIdWebhooksId403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PutTargetsTargetIdWebhooksId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PutTargetsTargetIdWebhooksId400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PutTargetsTargetIdWebhooksIdResponse extends SpeakeasyBase {
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
    putTargetsTargetIdWebhooksId400ApplicationJSONObject?: PutTargetsTargetIdWebhooksId400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    putTargetsTargetIdWebhooksId401ApplicationJSONObject?: PutTargetsTargetIdWebhooksId401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    putTargetsTargetIdWebhooksId403ApplicationJSONObject?: PutTargetsTargetIdWebhooksId403ApplicationJSON;
    /**
     * Not found
     */
    putTargetsTargetIdWebhooksId404ApplicationJSONObject?: PutTargetsTargetIdWebhooksId404ApplicationJSON;
}
