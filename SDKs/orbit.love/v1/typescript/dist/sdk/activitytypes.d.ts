import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ActivityTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List all activity types for a workspace
     */
    getWorkspaceSlugActivityTypes(req: operations.GetWorkspaceSlugActivityTypesRequest, security: operations.GetWorkspaceSlugActivityTypesSecurity, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceSlugActivityTypesResponse>;
}
