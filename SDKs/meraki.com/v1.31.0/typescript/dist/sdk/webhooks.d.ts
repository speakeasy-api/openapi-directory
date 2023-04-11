import * as operations from "./models/operations";
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
     * Add an HTTP server to a network
     *
     * @remarks
     * Add an HTTP server to a network
     */
    createNetworkWebhooksHttpServer(req: operations.CreateNetworkWebhooksHttpServerRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkWebhooksHttpServerResponse>;
    /**
     * Create a webhook payload template for a network
     *
     * @remarks
     * Create a webhook payload template for a network
     */
    createNetworkWebhooksPayloadTemplate(req: operations.CreateNetworkWebhooksPayloadTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkWebhooksPayloadTemplateResponse>;
    /**
     * Send a test webhook for a network
     *
     * @remarks
     * Send a test webhook for a network
     */
    createNetworkWebhooksWebhookTest(req: operations.CreateNetworkWebhooksWebhookTestRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkWebhooksWebhookTestResponse>;
    /**
     * Delete an HTTP server from a network
     *
     * @remarks
     * Delete an HTTP server from a network
     */
    deleteNetworkWebhooksHttpServer(req: operations.DeleteNetworkWebhooksHttpServerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkWebhooksHttpServerResponse>;
    /**
     * Destroy a webhook payload template for a network
     *
     * @remarks
     * Destroy a webhook payload template for a network. Does not work for included templates ('wpt_00001', 'wpt_00002', 'wpt_00003', 'wpt_00004', 'wpt_00005' or 'wpt_00006')
     */
    deleteNetworkWebhooksPayloadTemplate(req: operations.DeleteNetworkWebhooksPayloadTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkWebhooksPayloadTemplateResponse>;
    /**
     * Return an HTTP server for a network
     *
     * @remarks
     * Return an HTTP server for a network
     */
    getNetworkWebhooksHttpServer(req: operations.GetNetworkWebhooksHttpServerRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWebhooksHttpServerResponse>;
    /**
     * List the HTTP servers for a network
     *
     * @remarks
     * List the HTTP servers for a network
     */
    getNetworkWebhooksHttpServers(req: operations.GetNetworkWebhooksHttpServersRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWebhooksHttpServersResponse>;
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
     * Return the status of a webhook test for a network
     *
     * @remarks
     * Return the status of a webhook test for a network
     */
    getNetworkWebhooksWebhookTest(req: operations.GetNetworkWebhooksWebhookTestRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWebhooksWebhookTestResponse>;
    /**
     * Return a list of alert types to be used with managing webhook alerts
     *
     * @remarks
     * Return a list of alert types to be used with managing webhook alerts
     */
    getOrganizationWebhooksAlertTypes(req: operations.GetOrganizationWebhooksAlertTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationWebhooksAlertTypesResponse>;
    /**
     * Return the log of webhook POSTs sent
     *
     * @remarks
     * Return the log of webhook POSTs sent
     */
    getOrganizationWebhooksLogs(req: operations.GetOrganizationWebhooksLogsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationWebhooksLogsResponse>;
    /**
     * Update an HTTP server
     *
     * @remarks
     * Update an HTTP server. To change a URL, create a new HTTP server.
     */
    updateNetworkWebhooksHttpServer(req: operations.UpdateNetworkWebhooksHttpServerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWebhooksHttpServerResponse>;
    /**
     * Update a webhook payload template for a network
     *
     * @remarks
     * Update a webhook payload template for a network
     */
    updateNetworkWebhooksPayloadTemplate(req: operations.UpdateNetworkWebhooksPayloadTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWebhooksPayloadTemplateResponse>;
}
