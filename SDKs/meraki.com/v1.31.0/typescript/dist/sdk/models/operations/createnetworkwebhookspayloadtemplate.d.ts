import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders extends SpeakeasyBase {
    /**
     * The name of the header template
     */
    name?: string;
    /**
     * The liquid template for the headers
     */
    template?: string;
}
export declare class CreateNetworkWebhooksPayloadTemplateRequestBody extends SpeakeasyBase {
    /**
     * The liquid template used for the body of the webhook message. Either `body` or `bodyFile` must be specified.
     */
    body?: string;
    /**
     * A file containing liquid template used for the body of the webhook message. Either `body` or `bodyFile` must be specified.
     */
    bodyFile?: string;
    /**
     * The liquid template used with the webhook headers.
     */
    headers?: CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders[];
    /**
     * A file containing the liquid template used with the webhook headers.
     */
    headersFile?: string;
    /**
     * The name of the new template
     */
    name: string;
}
export declare class CreateNetworkWebhooksPayloadTemplateRequest extends SpeakeasyBase {
    requestBody: CreateNetworkWebhooksPayloadTemplateRequestBody;
    networkId: string;
}
export declare class CreateNetworkWebhooksPayloadTemplate201ApplicationJSONHeaders extends SpeakeasyBase {
    /**
     * The name of the header attribute
     */
    name?: string;
    /**
     * The value returned in the header attribute, in liquid template
     */
    template?: string;
}
/**
 * Successful operation
 */
export declare class CreateNetworkWebhooksPayloadTemplate201ApplicationJSON extends SpeakeasyBase {
    /**
     * The body of the payload template, in liquid template
     */
    body?: string;
    /**
     * The payload template headers, will be rendered as a key-value pair in the webhook.
     */
    headers?: CreateNetworkWebhooksPayloadTemplate201ApplicationJSONHeaders[];
    /**
     * The name of the payload template
     */
    name?: string;
    /**
     * Webhook payload template Id
     */
    payloadTemplateId?: string;
    /**
     * The type of the payload template
     */
    type?: string;
}
export declare class CreateNetworkWebhooksPayloadTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createNetworkWebhooksPayloadTemplate201ApplicationJSONObject?: CreateNetworkWebhooksPayloadTemplate201ApplicationJSON;
}
