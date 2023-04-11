import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class IdentityProviders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete the identity provider
     */
    deleteRealmIdentityProviderInstancesAlias(req: operations.DeleteRealmIdentityProviderInstancesAliasRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmIdentityProviderInstancesAliasResponse>;
    /**
     * Delete a mapper for the identity provider
     */
    deleteRealmIdentityProviderInstancesAliasMappersId(req: operations.DeleteRealmIdentityProviderInstancesAliasMappersIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmIdentityProviderInstancesAliasMappersIdResponse>;
    /**
     * Get identity providers
     */
    getRealmIdentityProviderInstances(req: operations.GetRealmIdentityProviderInstancesRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmIdentityProviderInstancesResponse>;
    /**
     * Get the identity provider
     */
    getRealmIdentityProviderInstancesAlias(req: operations.GetRealmIdentityProviderInstancesAliasRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmIdentityProviderInstancesAliasResponse>;
    /**
     * Export public broker configuration for identity provider
     */
    getRealmIdentityProviderInstancesAliasExport(req: operations.GetRealmIdentityProviderInstancesAliasExportRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmIdentityProviderInstancesAliasExportResponse>;
    /**
     * Return object stating whether client Authorization permissions have been initialized or not and a reference
     */
    getRealmIdentityProviderInstancesAliasManagementPermissions(req: operations.GetRealmIdentityProviderInstancesAliasManagementPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmIdentityProviderInstancesAliasManagementPermissionsResponse>;
    /**
     * Get mapper types for identity provider
     */
    getRealmIdentityProviderInstancesAliasMapperTypes(req: operations.GetRealmIdentityProviderInstancesAliasMapperTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmIdentityProviderInstancesAliasMapperTypesResponse>;
    /**
     * Get mappers for identity provider
     */
    getRealmIdentityProviderInstancesAliasMappers(req: operations.GetRealmIdentityProviderInstancesAliasMappersRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmIdentityProviderInstancesAliasMappersResponse>;
    /**
     * Get mapper by id for the identity provider
     */
    getRealmIdentityProviderInstancesAliasMappersId(req: operations.GetRealmIdentityProviderInstancesAliasMappersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmIdentityProviderInstancesAliasMappersIdResponse>;
    /**
     * Get identity providers
     */
    getRealmIdentityProviderProvidersProviderId(req: operations.GetRealmIdentityProviderProvidersProviderIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmIdentityProviderProvidersProviderIdResponse>;
    /**
     * Import identity provider from uploaded JSON file
     */
    postRealmIdentityProviderImportConfig(req: operations.PostRealmIdentityProviderImportConfigRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmIdentityProviderImportConfigResponse>;
    /**
     * Create a new identity provider
     */
    postRealmIdentityProviderInstances(req: operations.PostRealmIdentityProviderInstancesRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmIdentityProviderInstancesResponse>;
    /**
     * Add a mapper to identity provider
     */
    postRealmIdentityProviderInstancesAliasMappers(req: operations.PostRealmIdentityProviderInstancesAliasMappersRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmIdentityProviderInstancesAliasMappersResponse>;
    /**
     * Update the identity provider
     */
    putRealmIdentityProviderInstancesAlias(req: operations.PutRealmIdentityProviderInstancesAliasRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmIdentityProviderInstancesAliasResponse>;
    /**
     * Return object stating whether client Authorization permissions have been initialized or not and a reference
     */
    putRealmIdentityProviderInstancesAliasManagementPermissions(req: operations.PutRealmIdentityProviderInstancesAliasManagementPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmIdentityProviderInstancesAliasManagementPermissionsResponse>;
    /**
     * Update a mapper for the identity provider
     */
    putRealmIdentityProviderInstancesAliasMappersId(req: operations.PutRealmIdentityProviderInstancesAliasMappersIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmIdentityProviderInstancesAliasMappersIdResponse>;
}
