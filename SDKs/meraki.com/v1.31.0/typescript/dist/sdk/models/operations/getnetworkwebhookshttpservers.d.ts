import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkWebhooksHttpServersRequest extends SpeakeasyBase {
    networkId: string;
}
/**
 * The payload template to use when posting data to the HTTP server.
 */
export declare class GetNetworkWebhooksHttpServers200ApplicationJSONPayloadTemplate extends SpeakeasyBase {
    /**
     * The name of the payload template.
     */
    name?: string;
    /**
     * The ID of the payload template.
     */
    payloadTemplateId?: string;
}
export declare class GetNetworkWebhooksHttpServers200ApplicationJSON extends SpeakeasyBase {
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
    payloadTemplate?: GetNetworkWebhooksHttpServers200ApplicationJSONPayloadTemplate;
    /**
     * The URL of the HTTP server.
     */
    url?: string;
}
export declare class GetNetworkWebhooksHttpServersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkWebhooksHttpServers200ApplicationJSONObjects?: GetNetworkWebhooksHttpServers200ApplicationJSON[];
}
