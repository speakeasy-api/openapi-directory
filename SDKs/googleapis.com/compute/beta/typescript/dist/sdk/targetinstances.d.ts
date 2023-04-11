import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TargetInstances {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves an aggregated list of target instances.
     */
    computeTargetInstancesAggregatedList(req: operations.ComputeTargetInstancesAggregatedListRequest, security: operations.ComputeTargetInstancesAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetInstancesAggregatedListResponse>;
    /**
     * Deletes the specified TargetInstance resource.
     */
    computeTargetInstancesDelete(req: operations.ComputeTargetInstancesDeleteRequest, security: operations.ComputeTargetInstancesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetInstancesDeleteResponse>;
    /**
     * Returns the specified TargetInstance resource.
     */
    computeTargetInstancesGet(req: operations.ComputeTargetInstancesGetRequest, security: operations.ComputeTargetInstancesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetInstancesGetResponse>;
    /**
     * Creates a TargetInstance resource in the specified project and zone using the data included in the request.
     */
    computeTargetInstancesInsert(req: operations.ComputeTargetInstancesInsertRequest, security: operations.ComputeTargetInstancesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetInstancesInsertResponse>;
    /**
     * Retrieves a list of TargetInstance resources available to the specified project and zone.
     */
    computeTargetInstancesList(req: operations.ComputeTargetInstancesListRequest, security: operations.ComputeTargetInstancesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetInstancesListResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeTargetInstancesTestIamPermissions(req: operations.ComputeTargetInstancesTestIamPermissionsRequest, security: operations.ComputeTargetInstancesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetInstancesTestIamPermissionsResponse>;
}
