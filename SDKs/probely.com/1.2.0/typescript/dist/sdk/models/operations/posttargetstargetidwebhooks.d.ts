import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostTargetsTargetIdWebhooksRequest extends SpeakeasyBase {
    webhookInput: shared.WebhookInput;
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not found
 */
export declare class PostTargetsTargetIdWebhooks404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PostTargetsTargetIdWebhooks403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PostTargetsTargetIdWebhooks401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PostTargetsTargetIdWebhooks400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PostTargetsTargetIdWebhooksResponse extends SpeakeasyBase {
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
    postTargetsTargetIdWebhooks400ApplicationJSONObject?: PostTargetsTargetIdWebhooks400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    postTargetsTargetIdWebhooks401ApplicationJSONObject?: PostTargetsTargetIdWebhooks401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    postTargetsTargetIdWebhooks403ApplicationJSONObject?: PostTargetsTargetIdWebhooks403ApplicationJSON;
    /**
     * Not found
     */
    postTargetsTargetIdWebhooks404ApplicationJSONObject?: PostTargetsTargetIdWebhooks404ApplicationJSON;
}
