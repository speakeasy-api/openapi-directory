import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RegionHealthChecks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the specified HealthCheck resource.
     */
    computeRegionHealthChecksDelete(req: operations.ComputeRegionHealthChecksDeleteRequest, security: operations.ComputeRegionHealthChecksDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionHealthChecksDeleteResponse>;
    /**
     * Returns the specified HealthCheck resource.
     */
    computeRegionHealthChecksGet(req: operations.ComputeRegionHealthChecksGetRequest, security: operations.ComputeRegionHealthChecksGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionHealthChecksGetResponse>;
    /**
     * Creates a HealthCheck resource in the specified project using the data included in the request.
     */
    computeRegionHealthChecksInsert(req: operations.ComputeRegionHealthChecksInsertRequest, security: operations.ComputeRegionHealthChecksInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionHealthChecksInsertResponse>;
    /**
     * Retrieves the list of HealthCheck resources available to the specified project.
     */
    computeRegionHealthChecksList(req: operations.ComputeRegionHealthChecksListRequest, security: operations.ComputeRegionHealthChecksListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionHealthChecksListResponse>;
    /**
     * Updates a HealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
     */
    computeRegionHealthChecksPatch(req: operations.ComputeRegionHealthChecksPatchRequest, security: operations.ComputeRegionHealthChecksPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionHealthChecksPatchResponse>;
    /**
     * Updates a HealthCheck resource in the specified project using the data included in the request.
     */
    computeRegionHealthChecksUpdate(req: operations.ComputeRegionHealthChecksUpdateRequest, security: operations.ComputeRegionHealthChecksUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionHealthChecksUpdateResponse>;
}
