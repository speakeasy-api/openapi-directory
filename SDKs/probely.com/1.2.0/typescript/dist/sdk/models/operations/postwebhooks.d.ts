import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Not found
 */
export declare class PostWebhooks404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PostWebhooks403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PostWebhooks401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PostWebhooks400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PostWebhooksResponse extends SpeakeasyBase {
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
    postWebhooks400ApplicationJSONObject?: PostWebhooks400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    postWebhooks401ApplicationJSONObject?: PostWebhooks401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    postWebhooks403ApplicationJSONObject?: PostWebhooks403ApplicationJSON;
    /**
     * Not found
     */
    postWebhooks404ApplicationJSONObject?: PostWebhooks404ApplicationJSON;
}
