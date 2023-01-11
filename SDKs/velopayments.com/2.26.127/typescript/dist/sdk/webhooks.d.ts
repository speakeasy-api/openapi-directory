import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Webhooks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createWebhookV1 - Create Webhook
     *
     * Create Webhook
    **/
    createWebhookV1(req: operations.CreateWebhookV1Request, config?: AxiosRequestConfig): Promise<operations.CreateWebhookV1Response>;
    /**
     * getWebhookV1 - Get details about the given webhook.
     *
     * Get details about the given webhook.
    **/
    getWebhookV1(req: operations.GetWebhookV1Request, config?: AxiosRequestConfig): Promise<operations.GetWebhookV1Response>;
    /**
     * listWebhooksV1 - List the details about the webhooks for the given payor.
     *
     * List the details about the webhooks for the given payor.
    **/
    listWebhooksV1(req: operations.ListWebhooksV1Request, config?: AxiosRequestConfig): Promise<operations.ListWebhooksV1Response>;
    pingWebhookV1(req: operations.PingWebhookV1Request, config?: AxiosRequestConfig): Promise<operations.PingWebhookV1Response>;
    /**
     * updateWebhookV1 - Update Webhook
     *
     * Update Webhook
    **/
    updateWebhookV1(req: operations.UpdateWebhookV1Request, config?: AxiosRequestConfig): Promise<operations.UpdateWebhookV1Response>;
}
