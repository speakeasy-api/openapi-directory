import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateNetworkWebhooksWebhookTestRequestBody extends SpeakeasyBase {
    /**
     * The type of alert which the test webhook will send. Optional. Defaults to power_supply_down.
     */
    alertTypeId?: string;
    /**
     * The ID of the payload template of the test webhook. Defaults to the HTTP server's template ID if one exists for the given URL, or Generic template ID otherwise
     */
    payloadTemplateId?: string;
    /**
     * The name of the payload template.
     */
    payloadTemplateName?: string;
    /**
     * The shared secret the test webhook will send. Optional. Defaults to an empty string.
     */
    sharedSecret?: string;
    /**
     * The URL where the test webhook will be sent
     */
    url: string;
}
export declare class CreateNetworkWebhooksWebhookTestRequest extends SpeakeasyBase {
    requestBody: CreateNetworkWebhooksWebhookTestRequestBody;
    networkId: string;
}
/**
 * Current status of the webhook delivery
 */
export declare enum CreateNetworkWebhooksWebhookTest201ApplicationJSONStatusEnum {
    Abandoned = "abandoned",
    Delivered = "delivered",
    Enqueued = "enqueued",
    Processing = "processing",
    Retrying = "retrying"
}
/**
 * Successful operation
 */
export declare class CreateNetworkWebhooksWebhookTest201ApplicationJSON extends SpeakeasyBase {
    /**
     * Webhook delivery identifier
     */
    id?: string;
    /**
     * Current status of the webhook delivery
     */
    status?: CreateNetworkWebhooksWebhookTest201ApplicationJSONStatusEnum;
    /**
     * URL where the webhook was delivered
     */
    url?: string;
}
export declare class CreateNetworkWebhooksWebhookTestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createNetworkWebhooksWebhookTest201ApplicationJSONObject?: CreateNetworkWebhooksWebhookTest201ApplicationJSON;
}
