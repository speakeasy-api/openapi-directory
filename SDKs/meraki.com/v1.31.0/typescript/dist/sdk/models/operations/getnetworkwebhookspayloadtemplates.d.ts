import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkWebhooksPayloadTemplatesRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkWebhooksPayloadTemplates200ApplicationJSONHeaders extends SpeakeasyBase {
    /**
     * The name of the header attribute
     */
    name?: string;
    /**
     * The value returned in the header attribute, in liquid template
     */
    template?: string;
}
export declare class GetNetworkWebhooksPayloadTemplates200ApplicationJSON extends SpeakeasyBase {
    /**
     * The body of the payload template, in liquid template
     */
    body?: string;
    /**
     * The payload template headers, will be rendered as a key-value pair in the webhook.
     */
    headers?: GetNetworkWebhooksPayloadTemplates200ApplicationJSONHeaders[];
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
export declare class GetNetworkWebhooksPayloadTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkWebhooksPayloadTemplates200ApplicationJSONObjects?: GetNetworkWebhooksPayloadTemplates200ApplicationJSON[];
}
