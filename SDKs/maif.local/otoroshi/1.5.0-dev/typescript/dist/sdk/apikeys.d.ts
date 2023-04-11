import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Everything about Otoroshi api keys
 */
export declare class Apikeys {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get all api keys
     *
     * @remarks
     * Get all api keys
     */
    allApiKeys(config?: AxiosRequestConfig): Promise<operations.AllApiKeysResponse>;
    /**
     * Get an api key
     *
     * @remarks
     * Get an api key for a specified service descriptor
     */
    apiKey(req: operations.ApiKeyRequest, security: operations.ApiKeySecurity, config?: AxiosRequestConfig): Promise<operations.ApiKeyResponse>;
    /**
     * Get an api key
     *
     * @remarks
     * Get an api key for a specified service group
     */
    apiKeyFromGroup(req: operations.ApiKeyFromGroupRequest, security: operations.ApiKeyFromGroupSecurity, config?: AxiosRequestConfig): Promise<operations.ApiKeyFromGroupResponse>;
    /**
     * Get the quota state of an api key
     *
     * @remarks
     * Get the quota state of an api key
     */
    apiKeyFromGroupQuotas(req: operations.ApiKeyFromGroupQuotasRequest, security: operations.ApiKeyFromGroupQuotasSecurity, config?: AxiosRequestConfig): Promise<operations.ApiKeyFromGroupQuotasResponse>;
    /**
     * Get the group of an api key
     *
     * @remarks
     * Get the group of an api key
     */
    apiKeyGroup(req: operations.ApiKeyGroupRequest, security: operations.ApiKeyGroupSecurity, config?: AxiosRequestConfig): Promise<operations.ApiKeyGroupResponse>;
    /**
     * Get the quota state of an api key
     *
     * @remarks
     * Get the quota state of an api key
     */
    apiKeyQuotas(req: operations.ApiKeyQuotasRequest, security: operations.ApiKeyQuotasSecurity, config?: AxiosRequestConfig): Promise<operations.ApiKeyQuotasResponse>;
    /**
     * Get all api keys for the group of a service
     *
     * @remarks
     * Get all api keys for the group of a service
     */
    apiKeys(req: operations.ApiKeysRequest, security: operations.ApiKeysSecurity, config?: AxiosRequestConfig): Promise<operations.ApiKeysResponse>;
    /**
     * Get all api keys for the group of a service
     *
     * @remarks
     * Get all api keys for the group of a service
     */
    apiKeysFromGroup(req: operations.ApiKeysFromGroupRequest, security: operations.ApiKeysFromGroupSecurity, config?: AxiosRequestConfig): Promise<operations.ApiKeysFromGroupResponse>;
    /**
     * Create a new api key for a service
     */
    createApiKey(req: operations.CreateApiKeyRequest, security: operations.CreateApiKeySecurity, config?: AxiosRequestConfig): Promise<operations.CreateApiKeyResponse>;
    /**
     * Create a new api key for a group
     *
     * @remarks
     * Create a new api key for a group
     */
    createApiKeyFromGroup(req: operations.CreateApiKeyFromGroupRequest, security: operations.CreateApiKeyFromGroupSecurity, config?: AxiosRequestConfig): Promise<operations.CreateApiKeyFromGroupResponse>;
    /**
     * Delete an api key
     *
     * @remarks
     * Delete an api key for a specified service descriptor
     */
    deleteApiKey(req: operations.DeleteApiKeyRequest, security: operations.DeleteApiKeySecurity, config?: AxiosRequestConfig): Promise<operations.DeleteApiKeyResponse>;
    /**
     * Delete an api key
     *
     * @remarks
     * Delete an api key for a specified service group
     */
    deleteApiKeyFromGroup(req: operations.DeleteApiKeyFromGroupRequest, security: operations.DeleteApiKeyFromGroupSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteApiKeyFromGroupResponse>;
    /**
     * Update an api key with a diff
     *
     * @remarks
     * Update an api key for a specified service descriptor with a diff
     */
    patchApiKey(req: operations.PatchApiKeyRequest, security: operations.PatchApiKeySecurity, config?: AxiosRequestConfig): Promise<operations.PatchApiKeyResponse>;
    /**
     * Update an api key with a diff
     *
     * @remarks
     * Update an api key for a specified service descriptor with a diff
     */
    patchApiKeyFromGroup(req: operations.PatchApiKeyFromGroupRequest, security: operations.PatchApiKeyFromGroupSecurity, config?: AxiosRequestConfig): Promise<operations.PatchApiKeyFromGroupResponse>;
    /**
     * Reset the quota state of an api key
     *
     * @remarks
     * Reset the quota state of an api key
     */
    resetApiKeyFromGroupQuotas(req: operations.ResetApiKeyFromGroupQuotasRequest, security: operations.ResetApiKeyFromGroupQuotasSecurity, config?: AxiosRequestConfig): Promise<operations.ResetApiKeyFromGroupQuotasResponse>;
    /**
     * Reset the quota state of an api key
     *
     * @remarks
     * Reset the quota state of an api key
     */
    resetApiKeyQuotas(req: operations.ResetApiKeyQuotasRequest, security: operations.ResetApiKeyQuotasSecurity, config?: AxiosRequestConfig): Promise<operations.ResetApiKeyQuotasResponse>;
    /**
     * Update an api key
     *
     * @remarks
     * Update an api key for a specified service descriptor
     */
    updateApiKey(req: operations.UpdateApiKeyRequest, security: operations.UpdateApiKeySecurity, config?: AxiosRequestConfig): Promise<operations.UpdateApiKeyResponse>;
    /**
     * Update an api key
     *
     * @remarks
     * Update an api key for a specified service group
     */
    updateApiKeyFromGroup(req: operations.UpdateApiKeyFromGroupRequest, security: operations.UpdateApiKeyFromGroupSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateApiKeyFromGroupResponse>;
}
