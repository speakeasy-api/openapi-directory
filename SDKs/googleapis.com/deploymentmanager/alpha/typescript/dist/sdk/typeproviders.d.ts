import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TypeProviders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a type provider.
     */
    deploymentmanagerTypeProvidersDelete(req: operations.DeploymentmanagerTypeProvidersDeleteRequest, security: operations.DeploymentmanagerTypeProvidersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerTypeProvidersDeleteResponse>;
    /**
     * Gets information about a specific type provider.
     */
    deploymentmanagerTypeProvidersGet(req: operations.DeploymentmanagerTypeProvidersGetRequest, security: operations.DeploymentmanagerTypeProvidersGetSecurity, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerTypeProvidersGetResponse>;
    /**
     * Gets a type info for a type provided by a TypeProvider.
     */
    deploymentmanagerTypeProvidersGetType(req: operations.DeploymentmanagerTypeProvidersGetTypeRequest, security: operations.DeploymentmanagerTypeProvidersGetTypeSecurity, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerTypeProvidersGetTypeResponse>;
    /**
     * Creates a type provider.
     */
    deploymentmanagerTypeProvidersInsert(req: operations.DeploymentmanagerTypeProvidersInsertRequest, security: operations.DeploymentmanagerTypeProvidersInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerTypeProvidersInsertResponse>;
    /**
     * Lists all resource type providers for Deployment Manager.
     */
    deploymentmanagerTypeProvidersList(req: operations.DeploymentmanagerTypeProvidersListRequest, security: operations.DeploymentmanagerTypeProvidersListSecurity, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerTypeProvidersListResponse>;
    /**
     * Lists all the type info for a TypeProvider.
     */
    deploymentmanagerTypeProvidersListTypes(req: operations.DeploymentmanagerTypeProvidersListTypesRequest, security: operations.DeploymentmanagerTypeProvidersListTypesSecurity, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerTypeProvidersListTypesResponse>;
    /**
     * Patches a type provider.
     */
    deploymentmanagerTypeProvidersPatch(req: operations.DeploymentmanagerTypeProvidersPatchRequest, security: operations.DeploymentmanagerTypeProvidersPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerTypeProvidersPatchResponse>;
    /**
     * Updates a type provider.
     */
    deploymentmanagerTypeProvidersUpdate(req: operations.DeploymentmanagerTypeProvidersUpdateRequest, security: operations.DeploymentmanagerTypeProvidersUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerTypeProvidersUpdateResponse>;
}
