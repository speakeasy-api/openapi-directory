import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkWebhooksWebhookTestRequest extends SpeakeasyBase {
    networkId: string;
    webhookTestId: string;
}
/**
 * Current status of the webhook delivery
 */
export declare enum GetNetworkWebhooksWebhookTest200ApplicationJSONStatusEnum {
    Abandoned = "abandoned",
    Delivered = "delivered",
    Enqueued = "enqueued",
    Processing = "processing",
    Retrying = "retrying"
}
/**
 * Successful operation
 */
export declare class GetNetworkWebhooksWebhookTest200ApplicationJSON extends SpeakeasyBase {
    /**
     * Webhook delivery identifier
     */
    id?: string;
    /**
     * Current status of the webhook delivery
     */
    status?: GetNetworkWebhooksWebhookTest200ApplicationJSONStatusEnum;
    /**
     * URL where the webhook was delivered
     */
    url?: string;
}
export declare class GetNetworkWebhooksWebhookTestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkWebhooksWebhookTest200ApplicationJSONObject?: GetNetworkWebhooksWebhookTest200ApplicationJSON;
}
