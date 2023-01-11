import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ProjectWebhooks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteProjectWebhook - Delete project webhooks
     *
     * Delete project webhooks. Projects currently support registering only 1 webhook. This endpoint deletes the previously registered webhook.
    **/
    deleteProjectWebhook(req: operations.DeleteProjectWebhookRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectWebhookResponse>;
    /**
     * getProjectWebhooks - Get project information (includes callback_url for webhook)
     *
     * Get project information (includes callback_url for webhook). Currently projects can have only 1 webhook registered.
    **/
    getProjectWebhooks(req: operations.GetProjectWebhooksRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectWebhooksResponse>;
    /**
     * postProjectWebhook - Update project webhook URL
     *
     * Update project webhook URL
    **/
    postProjectWebhook(req: operations.PostProjectWebhookRequest, config?: AxiosRequestConfig): Promise<operations.PostProjectWebhookResponse>;
    /**
     * updateProjectWebhook - Update project webhook URL
     *
     * Update project webhook URL
    **/
    updateProjectWebhook(req: operations.UpdateProjectWebhookRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProjectWebhookResponse>;
}
