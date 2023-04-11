import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ProjectWebhooks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete project webhooks
     *
     * @remarks
     * Delete project webhooks. Projects currently support registering only 1 webhook. This endpoint deletes the previously registered webhook.
     */
    deleteProjectWebhook(req: operations.DeleteProjectWebhookRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectWebhookResponse>;
    /**
     * View project webhooks
     *
     * @remarks
     * This endpoint returns Project entity which contains `callback_url` field for webhook URL. Currently projects can have only 1 webhook registered.
     */
    getProjectWebhooks(req: operations.GetProjectWebhooksRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectWebhooksResponse>;
    /**
     * Update project webhook
     *
     * @remarks
     * Update project webhook URL
     */
    postProjectWebhook(req: operations.PostProjectWebhookRequest, config?: AxiosRequestConfig): Promise<operations.PostProjectWebhookResponse>;
    /**
     * Update project webhook
     *
     * @remarks
     * Update project webhook URL
     */
    updateProjectWebhook(req: operations.UpdateProjectWebhookRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProjectWebhookResponse>;
}
