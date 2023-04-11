import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TargetPools {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Adds health check URLs to a target pool.
     */
    computeTargetPoolsAddHealthCheck(req: operations.ComputeTargetPoolsAddHealthCheckRequest, security: operations.ComputeTargetPoolsAddHealthCheckSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetPoolsAddHealthCheckResponse>;
    /**
     * Adds an instance to a target pool.
     */
    computeTargetPoolsAddInstance(req: operations.ComputeTargetPoolsAddInstanceRequest, security: operations.ComputeTargetPoolsAddInstanceSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetPoolsAddInstanceResponse>;
    /**
     * Retrieves an aggregated list of target pools.
     */
    computeTargetPoolsAggregatedList(req: operations.ComputeTargetPoolsAggregatedListRequest, security: operations.ComputeTargetPoolsAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetPoolsAggregatedListResponse>;
    /**
     * Deletes the specified target pool.
     */
    computeTargetPoolsDelete(req: operations.ComputeTargetPoolsDeleteRequest, security: operations.ComputeTargetPoolsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetPoolsDeleteResponse>;
    /**
     * Returns the specified target pool.
     */
    computeTargetPoolsGet(req: operations.ComputeTargetPoolsGetRequest, security: operations.ComputeTargetPoolsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetPoolsGetResponse>;
    /**
     * Gets the most recent health check results for each IP for the instance that is referenced by the given target pool.
     */
    computeTargetPoolsGetHealth(req: operations.ComputeTargetPoolsGetHealthRequest, security: operations.ComputeTargetPoolsGetHealthSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetPoolsGetHealthResponse>;
    /**
     * Creates a target pool in the specified project and region using the data included in the request.
     */
    computeTargetPoolsInsert(req: operations.ComputeTargetPoolsInsertRequest, security: operations.ComputeTargetPoolsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetPoolsInsertResponse>;
    /**
     * Retrieves a list of target pools available to the specified project and region.
     */
    computeTargetPoolsList(req: operations.ComputeTargetPoolsListRequest, security: operations.ComputeTargetPoolsListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetPoolsListResponse>;
    /**
     * Removes health check URL from a target pool.
     */
    computeTargetPoolsRemoveHealthCheck(req: operations.ComputeTargetPoolsRemoveHealthCheckRequest, security: operations.ComputeTargetPoolsRemoveHealthCheckSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetPoolsRemoveHealthCheckResponse>;
    /**
     * Removes instance URL from a target pool.
     */
    computeTargetPoolsRemoveInstance(req: operations.ComputeTargetPoolsRemoveInstanceRequest, security: operations.ComputeTargetPoolsRemoveInstanceSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetPoolsRemoveInstanceResponse>;
    /**
     * Changes a backup target pool's configurations.
     */
    computeTargetPoolsSetBackup(req: operations.ComputeTargetPoolsSetBackupRequest, security: operations.ComputeTargetPoolsSetBackupSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetPoolsSetBackupResponse>;
}
