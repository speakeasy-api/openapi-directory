import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTargetsTargetIdWebhooksRequest extends SpeakeasyBase {
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not allowed to perform operation
 */
export declare class GetTargetsTargetIdWebhooks403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetTargetsTargetIdWebhooks401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Webhook list
 */
export declare class GetTargetsTargetIdWebhooks200ApplicationJSON extends SpeakeasyBase {
    /**
     * Number of objects in the response.
     */
    count?: number;
    /**
     * Number of objects per page.
     */
    length?: number;
    /**
     * Current page.
     */
    page?: number;
    /**
     * Number of pages.
     */
    pageTotal?: number;
    /**
     * Webhook objects
     */
    results?: shared.Webhook[];
}
export declare class GetTargetsTargetIdWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Webhook list
     */
    getTargetsTargetIdWebhooks200ApplicationJSONObject?: GetTargetsTargetIdWebhooks200ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    getTargetsTargetIdWebhooks401ApplicationJSONObject?: GetTargetsTargetIdWebhooks401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    getTargetsTargetIdWebhooks403ApplicationJSONObject?: GetTargetsTargetIdWebhooks403ApplicationJSON;
}
