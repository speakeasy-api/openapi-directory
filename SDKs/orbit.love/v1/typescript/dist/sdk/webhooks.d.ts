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
     * Delete a webhook
     */
    deleteWorkspaceSlugWebhooksId(req: operations.DeleteWorkspaceSlugWebhooksIdRequest, security: operations.DeleteWorkspaceSlugWebhooksIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteWorkspaceSlugWebhooksIdResponse>;
    /**
     * List webhooks in a workspace
     */
    getWorkspaceSlugWebhooks(req: operations.GetWorkspaceSlugWebhooksRequest, security: operations.GetWorkspaceSlugWebhooksSecurity, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceSlugWebhooksResponse>;
    /**
     * Get a webhook
     */
    getWorkspaceSlugWebhooksId(req: operations.GetWorkspaceSlugWebhooksIdRequest, security: operations.GetWorkspaceSlugWebhooksIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceSlugWebhooksIdResponse>;
    /**
     * Create a webhook
     */
    postWorkspaceSlugWebhooks(req: operations.PostWorkspaceSlugWebhooksRequest, security: operations.PostWorkspaceSlugWebhooksSecurity, config?: AxiosRequestConfig): Promise<operations.PostWorkspaceSlugWebhooksResponse>;
    /**
     * Update a webhook
     */
    putWorkspaceSlugWebhooksId(req: operations.PutWorkspaceSlugWebhooksIdRequest, security: operations.PutWorkspaceSlugWebhooksIdSecurity, config?: AxiosRequestConfig): Promise<operations.PutWorkspaceSlugWebhooksIdResponse>;
}
