import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Operations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets information about a specific operation.
     */
    deploymentmanagerOperationsGet(req: operations.DeploymentmanagerOperationsGetRequest, security: operations.DeploymentmanagerOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerOperationsGetResponse>;
    /**
     * Lists all operations for a project.
     */
    deploymentmanagerOperationsList(req: operations.DeploymentmanagerOperationsListRequest, security: operations.DeploymentmanagerOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerOperationsListResponse>;
}
