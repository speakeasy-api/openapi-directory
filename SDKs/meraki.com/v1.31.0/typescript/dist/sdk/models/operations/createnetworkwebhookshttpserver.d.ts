import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The payload template to use when posting data to the HTTP server.
 */
export declare class CreateNetworkWebhooksHttpServerRequestBodyPayloadTemplate extends SpeakeasyBase {
    /**
     * The name of the payload template.
     */
    name?: string;
    /**
     * The ID of the payload template. Defaults to 'wpt_00001' for the Meraki template. For Meraki-included templates: for the Webex (included) template use 'wpt_00002'; for the Slack (included) template use 'wpt_00003'; for the Microsoft Teams (included) template use 'wpt_00004'; for the ServiceNow (included) template use 'wpt_00006'
     */
    payloadTemplateId?: string;
}
export declare class CreateNetworkWebhooksHttpServerRequestBody extends SpeakeasyBase {
    /**
     * A name for easy reference to the HTTP server
     */
    name: string;
    /**
     * The payload template to use when posting data to the HTTP server.
     */
    payloadTemplate?: CreateNetworkWebhooksHttpServerRequestBodyPayloadTemplate;
    /**
     * A shared secret that will be included in POSTs sent to the HTTP server. This secret can be used to verify that the request was sent by Meraki.
     */
    sharedSecret?: string;
    /**
     * The URL of the HTTP server. Once set, cannot be updated.
     */
    url: string;
}
export declare class CreateNetworkWebhooksHttpServerRequest extends SpeakeasyBase {
    requestBody: CreateNetworkWebhooksHttpServerRequestBody;
    networkId: string;
}
/**
 * The payload template to use when posting data to the HTTP server.
 */
export declare class CreateNetworkWebhooksHttpServer201ApplicationJSONPayloadTemplate extends SpeakeasyBase {
    /**
     * The name of the payload template.
     */
    name?: string;
    /**
     * The ID of the payload template.
     */
    payloadTemplateId?: string;
}
/**
 * Successful operation
 */
export declare class CreateNetworkWebhooksHttpServer201ApplicationJSON extends SpeakeasyBase {
    /**
     * A Base64 encoded ID.
     */
    id?: string;
    /**
     * A name for easy reference to the HTTP server
     */
    name?: string;
    /**
     * A Meraki network ID.
     */
    networkId?: string;
    /**
     * The payload template to use when posting data to the HTTP server.
     */
    payloadTemplate?: CreateNetworkWebhooksHttpServer201ApplicationJSONPayloadTemplate;
    /**
     * The URL of the HTTP server.
     */
    url?: string;
}
export declare class CreateNetworkWebhooksHttpServerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createNetworkWebhooksHttpServer201ApplicationJSONObject?: CreateNetworkWebhooksHttpServer201ApplicationJSON;
}
