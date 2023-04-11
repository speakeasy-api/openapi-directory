import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RegionUrlMaps {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the specified UrlMap resource.
     */
    computeRegionUrlMapsDelete(req: operations.ComputeRegionUrlMapsDeleteRequest, security: operations.ComputeRegionUrlMapsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionUrlMapsDeleteResponse>;
    /**
     * Returns the specified UrlMap resource.
     */
    computeRegionUrlMapsGet(req: operations.ComputeRegionUrlMapsGetRequest, security: operations.ComputeRegionUrlMapsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionUrlMapsGetResponse>;
    /**
     * Creates a UrlMap resource in the specified project using the data included in the request.
     */
    computeRegionUrlMapsInsert(req: operations.ComputeRegionUrlMapsInsertRequest, security: operations.ComputeRegionUrlMapsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionUrlMapsInsertResponse>;
    /**
     * Initiates a cache invalidation operation, invalidating the specified path, scoped to the specified UrlMap. For more information, see [Invalidating cached content](/cdn/docs/invalidating-cached-content).
     */
    computeRegionUrlMapsInvalidateCache(req: operations.ComputeRegionUrlMapsInvalidateCacheRequest, security: operations.ComputeRegionUrlMapsInvalidateCacheSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionUrlMapsInvalidateCacheResponse>;
    /**
     * Retrieves the list of UrlMap resources available to the specified project in the specified region.
     */
    computeRegionUrlMapsList(req: operations.ComputeRegionUrlMapsListRequest, security: operations.ComputeRegionUrlMapsListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionUrlMapsListResponse>;
    /**
     * Patches the specified UrlMap resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
     */
    computeRegionUrlMapsPatch(req: operations.ComputeRegionUrlMapsPatchRequest, security: operations.ComputeRegionUrlMapsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionUrlMapsPatchResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeRegionUrlMapsTestIamPermissions(req: operations.ComputeRegionUrlMapsTestIamPermissionsRequest, security: operations.ComputeRegionUrlMapsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionUrlMapsTestIamPermissionsResponse>;
    /**
     * Updates the specified UrlMap resource with the data included in the request.
     */
    computeRegionUrlMapsUpdate(req: operations.ComputeRegionUrlMapsUpdateRequest, security: operations.ComputeRegionUrlMapsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionUrlMapsUpdateResponse>;
    /**
     * Runs static validation for the UrlMap. In particular, the tests of the provided UrlMap will be run. Calling this method does NOT create the UrlMap.
     */
    computeRegionUrlMapsValidate(req: operations.ComputeRegionUrlMapsValidateRequest, security: operations.ComputeRegionUrlMapsValidateSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionUrlMapsValidateResponse>;
}
