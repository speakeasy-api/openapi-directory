import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWebhooksIdRequest extends SpeakeasyBase {
    /**
     * Object Id
     */
    id: string;
}
/**
 * Not allowed to perform operation
 */
export declare class GetWebhooksId403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetWebhooksId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class GetWebhooksIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Webhooks
     */
    webhook?: shared.Webhook;
    /**
     * Access token is missing or invalid
     */
    getWebhooksId401ApplicationJSONObject?: GetWebhooksId401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    getWebhooksId403ApplicationJSONObject?: GetWebhooksId403ApplicationJSON;
}
