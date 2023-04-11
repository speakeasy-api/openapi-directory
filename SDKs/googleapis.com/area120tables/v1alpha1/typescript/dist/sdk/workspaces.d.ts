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
     * Gets a workspace. Returns NOT_FOUND if the workspace does not exist.
     */
    area120tablesWorkspacesGet(req: operations.Area120tablesWorkspacesGetRequest, security: operations.Area120tablesWorkspacesGetSecurity, config?: AxiosRequestConfig): Promise<operations.Area120tablesWorkspacesGetResponse>;
    /**
     * Lists workspaces for the user.
     */
    area120tablesWorkspacesList(req: operations.Area120tablesWorkspacesListRequest, security: operations.Area120tablesWorkspacesListSecurity, config?: AxiosRequestConfig): Promise<operations.Area120tablesWorkspacesListResponse>;
}
