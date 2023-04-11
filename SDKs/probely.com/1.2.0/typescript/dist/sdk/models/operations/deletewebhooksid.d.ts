import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteWebhooksIdRequest extends SpeakeasyBase {
    /**
     * Object Id
     */
    id: string;
}
/**
 * Not found
 */
export declare class DeleteWebhooksId404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class DeleteWebhooksId403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class DeleteWebhooksId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class DeleteWebhooksIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Access token is missing or invalid
     */
    deleteWebhooksId401ApplicationJSONObject?: DeleteWebhooksId401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    deleteWebhooksId403ApplicationJSONObject?: DeleteWebhooksId403ApplicationJSON;
    /**
     * Not found
     */
    deleteWebhooksId404ApplicationJSONObject?: DeleteWebhooksId404ApplicationJSON;
}
