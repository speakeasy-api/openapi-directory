import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Manifests {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets information about a specific manifest.
     */
    deploymentmanagerManifestsGet(req: operations.DeploymentmanagerManifestsGetRequest, security: operations.DeploymentmanagerManifestsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerManifestsGetResponse>;
    /**
     * Lists all manifests for a given deployment.
     */
    deploymentmanagerManifestsList(req: operations.DeploymentmanagerManifestsListRequest, security: operations.DeploymentmanagerManifestsListSecurity, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerManifestsListResponse>;
}
