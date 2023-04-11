import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class HealthChecks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves the list of all HealthCheck resources, regional and global, available to the specified project.
     */
    computeHealthChecksAggregatedList(req: operations.ComputeHealthChecksAggregatedListRequest, security: operations.ComputeHealthChecksAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeHealthChecksAggregatedListResponse>;
    /**
     * Deletes the specified HealthCheck resource.
     */
    computeHealthChecksDelete(req: operations.ComputeHealthChecksDeleteRequest, security: operations.ComputeHealthChecksDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeHealthChecksDeleteResponse>;
    /**
     * Returns the specified HealthCheck resource.
     */
    computeHealthChecksGet(req: operations.ComputeHealthChecksGetRequest, security: operations.ComputeHealthChecksGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeHealthChecksGetResponse>;
    /**
     * Creates a HealthCheck resource in the specified project using the data included in the request.
     */
    computeHealthChecksInsert(req: operations.ComputeHealthChecksInsertRequest, security: operations.ComputeHealthChecksInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeHealthChecksInsertResponse>;
    /**
     * Retrieves the list of HealthCheck resources available to the specified project.
     */
    computeHealthChecksList(req: operations.ComputeHealthChecksListRequest, security: operations.ComputeHealthChecksListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeHealthChecksListResponse>;
    /**
     * Updates a HealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
     */
    computeHealthChecksPatch(req: operations.ComputeHealthChecksPatchRequest, security: operations.ComputeHealthChecksPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeHealthChecksPatchResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeHealthChecksTestIamPermissions(req: operations.ComputeHealthChecksTestIamPermissionsRequest, security: operations.ComputeHealthChecksTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeHealthChecksTestIamPermissionsResponse>;
    /**
     * Updates a HealthCheck resource in the specified project using the data included in the request.
     */
    computeHealthChecksUpdate(req: operations.ComputeHealthChecksUpdateRequest, security: operations.ComputeHealthChecksUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeHealthChecksUpdateResponse>;
}
