import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Webhooks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Webhook
     *
     * @remarks
     * Create Webhook
     */
    createWebhookV1(req: shared.CreateWebhookRequest, config?: AxiosRequestConfig): Promise<operations.CreateWebhookV1Response>;
    /**
     * Get details about the given webhook.
     *
     * @remarks
     * Get details about the given webhook.
     */
    getWebhookV1(req: operations.GetWebhookV1Request, config?: AxiosRequestConfig): Promise<operations.GetWebhookV1Response>;
    /**
     * List the details about the webhooks for the given payor.
     *
     * @remarks
     * List the details about the webhooks for the given payor.
     */
    listWebhooksV1(req: operations.ListWebhooksV1Request, config?: AxiosRequestConfig): Promise<operations.ListWebhooksV1Response>;
    pingWebhookV1(req: operations.PingWebhookV1Request, config?: AxiosRequestConfig): Promise<operations.PingWebhookV1Response>;
    /**
     * Update Webhook
     *
     * @remarks
     * Update Webhook
     */
    updateWebhookV1(req: operations.UpdateWebhookV1Request, config?: AxiosRequestConfig): Promise<operations.UpdateWebhookV1Response>;
}
