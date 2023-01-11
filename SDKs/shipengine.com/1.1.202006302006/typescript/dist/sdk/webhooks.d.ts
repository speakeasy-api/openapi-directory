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
     * createWebhook - Create a Webhook
     *
     * Create a webook for specific events in the environment.
    **/
    createWebhook(req: operations.CreateWebhookRequest, config?: AxiosRequestConfig): Promise<operations.CreateWebhookResponse>;
    /**
     * deleteWebhook - Delete Webhook By ID
     *
     * Delete a webhook
    **/
    deleteWebhook(req: operations.DeleteWebhookRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWebhookResponse>;
    /**
     * getWebhookById - Get Webhook By ID
     *
     * Retrieve individual webhook by an ID
    **/
    getWebhookById(req: operations.GetWebhookByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetWebhookByIdResponse>;
    /**
     * listWebhooks - List Webhooks
     *
     * List all webhooks currently enabled for the account.
    **/
    listWebhooks(config?: AxiosRequestConfig): Promise<operations.ListWebhooksResponse>;
    /**
     * updateWebhook - Update a Webhook
     *
     * Update the webhook url property
    **/
    updateWebhook(req: operations.UpdateWebhookRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWebhookResponse>;
}
