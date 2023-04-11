import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Workspaces {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get all workspaces for the current user
     */
    getWorkspaces(config?: AxiosRequestConfig): Promise<operations.GetWorkspacesResponse>;
    /**
     * Get a workspace
     */
    getWorkspacesWorkspaceSlug(req: operations.GetWorkspacesWorkspaceSlugRequest, security: operations.GetWorkspacesWorkspaceSlugSecurity, config?: AxiosRequestConfig): Promise<operations.GetWorkspacesWorkspaceSlugResponse>;
}
