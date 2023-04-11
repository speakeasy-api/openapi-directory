import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RegionHealthCheckServices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves the list of all HealthCheckService resources, regional and global, available to the specified project.
     */
    computeRegionHealthCheckServicesAggregatedList(req: operations.ComputeRegionHealthCheckServicesAggregatedListRequest, security: operations.ComputeRegionHealthCheckServicesAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionHealthCheckServicesAggregatedListResponse>;
    /**
     * Deletes the specified regional HealthCheckService.
     */
    computeRegionHealthCheckServicesDelete(req: operations.ComputeRegionHealthCheckServicesDeleteRequest, security: operations.ComputeRegionHealthCheckServicesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionHealthCheckServicesDeleteResponse>;
    /**
     * Returns the specified regional HealthCheckService resource.
     */
    computeRegionHealthCheckServicesGet(req: operations.ComputeRegionHealthCheckServicesGetRequest, security: operations.ComputeRegionHealthCheckServicesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionHealthCheckServicesGetResponse>;
    /**
     * Creates a regional HealthCheckService resource in the specified project and region using the data included in the request.
     */
    computeRegionHealthCheckServicesInsert(req: operations.ComputeRegionHealthCheckServicesInsertRequest, security: operations.ComputeRegionHealthCheckServicesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionHealthCheckServicesInsertResponse>;
    /**
     * Lists all the HealthCheckService resources that have been configured for the specified project in the given region.
     */
    computeRegionHealthCheckServicesList(req: operations.ComputeRegionHealthCheckServicesListRequest, security: operations.ComputeRegionHealthCheckServicesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionHealthCheckServicesListResponse>;
    /**
     * Updates the specified regional HealthCheckService resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
     */
    computeRegionHealthCheckServicesPatch(req: operations.ComputeRegionHealthCheckServicesPatchRequest, security: operations.ComputeRegionHealthCheckServicesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionHealthCheckServicesPatchResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeRegionHealthCheckServicesTestIamPermissions(req: operations.ComputeRegionHealthCheckServicesTestIamPermissionsRequest, security: operations.ComputeRegionHealthCheckServicesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionHealthCheckServicesTestIamPermissionsResponse>;
}
