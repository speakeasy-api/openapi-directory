import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PayloadTemplates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a webhook payload template for a network
     *
     * @remarks
     * Create a webhook payload template for a network
     */
    createNetworkWebhooksPayloadTemplate(req: operations.CreateNetworkWebhooksPayloadTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkWebhooksPayloadTemplateResponse>;
    /**
     * Destroy a webhook payload template for a network
     *
     * @remarks
     * Destroy a webhook payload template for a network. Does not work for included templates ('wpt_00001', 'wpt_00002', 'wpt_00003', 'wpt_00004', 'wpt_00005' or 'wpt_00006')
     */
    deleteNetworkWebhooksPayloadTemplate(req: operations.DeleteNetworkWebhooksPayloadTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkWebhooksPayloadTemplateResponse>;
    /**
     * Get the webhook payload template for a network
     *
     * @remarks
     * Get the webhook payload template for a network
     */
    getNetworkWebhooksPayloadTemplate(req: operations.GetNetworkWebhooksPayloadTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWebhooksPayloadTemplateResponse>;
    /**
     * List the webhook payload templates for a network
     *
     * @remarks
     * List the webhook payload templates for a network
     */
    getNetworkWebhooksPayloadTemplates(req: operations.GetNetworkWebhooksPayloadTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWebhooksPayloadTemplatesResponse>;
    /**
     * Update a webhook payload template for a network
     *
     * @remarks
     * Update a webhook payload template for a network
     */
    updateNetworkWebhooksPayloadTemplate(req: operations.UpdateNetworkWebhooksPayloadTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWebhooksPayloadTemplateResponse>;
}
