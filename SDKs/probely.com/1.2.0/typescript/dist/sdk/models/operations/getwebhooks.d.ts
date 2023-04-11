import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Not allowed to perform operation
 */
export declare class GetWebhooks403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetWebhooks401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Webhook list
 */
export declare class GetWebhooks200ApplicationJSON extends SpeakeasyBase {
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
export declare class GetWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Webhook list
     */
    getWebhooks200ApplicationJSONObject?: GetWebhooks200ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    getWebhooks401ApplicationJSONObject?: GetWebhooks401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    getWebhooks403ApplicationJSONObject?: GetWebhooks403ApplicationJSON;
}
