import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Resources {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets information about a single resource.
     */
    deploymentmanagerResourcesGet(req: operations.DeploymentmanagerResourcesGetRequest, security: operations.DeploymentmanagerResourcesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerResourcesGetResponse>;
    /**
     * Lists all resources in a given deployment.
     */
    deploymentmanagerResourcesList(req: operations.DeploymentmanagerResourcesListRequest, security: operations.DeploymentmanagerResourcesListSecurity, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerResourcesListResponse>;
}
