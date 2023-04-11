import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class UrlMaps {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves the list of all UrlMap resources, regional and global, available to the specified project.
     */
    computeUrlMapsAggregatedList(req: operations.ComputeUrlMapsAggregatedListRequest, security: operations.ComputeUrlMapsAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeUrlMapsAggregatedListResponse>;
    /**
     * Deletes the specified UrlMap resource.
     */
    computeUrlMapsDelete(req: operations.ComputeUrlMapsDeleteRequest, security: operations.ComputeUrlMapsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeUrlMapsDeleteResponse>;
    /**
     * Returns the specified UrlMap resource.
     */
    computeUrlMapsGet(req: operations.ComputeUrlMapsGetRequest, security: operations.ComputeUrlMapsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeUrlMapsGetResponse>;
    /**
     * Creates a UrlMap resource in the specified project using the data included in the request.
     */
    computeUrlMapsInsert(req: operations.ComputeUrlMapsInsertRequest, security: operations.ComputeUrlMapsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeUrlMapsInsertResponse>;
    /**
     * Initiates a cache invalidation operation, invalidating the specified path, scoped to the specified UrlMap. For more information, see [Invalidating cached content](/cdn/docs/invalidating-cached-content).
     */
    computeUrlMapsInvalidateCache(req: operations.ComputeUrlMapsInvalidateCacheRequest, security: operations.ComputeUrlMapsInvalidateCacheSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeUrlMapsInvalidateCacheResponse>;
    /**
     * Retrieves the list of UrlMap resources available to the specified project.
     */
    computeUrlMapsList(req: operations.ComputeUrlMapsListRequest, security: operations.ComputeUrlMapsListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeUrlMapsListResponse>;
    /**
     * Patches the specified UrlMap resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
     */
    computeUrlMapsPatch(req: operations.ComputeUrlMapsPatchRequest, security: operations.ComputeUrlMapsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeUrlMapsPatchResponse>;
    /**
     * Updates the specified UrlMap resource with the data included in the request.
     */
    computeUrlMapsUpdate(req: operations.ComputeUrlMapsUpdateRequest, security: operations.ComputeUrlMapsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeUrlMapsUpdateResponse>;
    /**
     * Runs static validation for the UrlMap. In particular, the tests of the provided UrlMap will be run. Calling this method does NOT create the UrlMap.
     */
    computeUrlMapsValidate(req: operations.ComputeUrlMapsValidateRequest, security: operations.ComputeUrlMapsValidateSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeUrlMapsValidateResponse>;
}
