import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Types {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Lists all resource types for Deployment Manager.
     */
    deploymentmanagerTypesList(req: operations.DeploymentmanagerTypesListRequest, security: operations.DeploymentmanagerTypesListSecurity, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerTypesListResponse>;
}
