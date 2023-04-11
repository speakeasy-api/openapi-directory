import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ResourcePolicies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves an aggregated list of resource policies.
     */
    computeResourcePoliciesAggregatedList(req: operations.ComputeResourcePoliciesAggregatedListRequest, security: operations.ComputeResourcePoliciesAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeResourcePoliciesAggregatedListResponse>;
    /**
     * Deletes the specified resource policy.
     */
    computeResourcePoliciesDelete(req: operations.ComputeResourcePoliciesDeleteRequest, security: operations.ComputeResourcePoliciesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeResourcePoliciesDeleteResponse>;
    /**
     * Retrieves all information of the specified resource policy.
     */
    computeResourcePoliciesGet(req: operations.ComputeResourcePoliciesGetRequest, security: operations.ComputeResourcePoliciesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeResourcePoliciesGetResponse>;
    /**
     * Gets the access control policy for a resource. May be empty if no such policy or resource exists.
     */
    computeResourcePoliciesGetIamPolicy(req: operations.ComputeResourcePoliciesGetIamPolicyRequest, security: operations.ComputeResourcePoliciesGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeResourcePoliciesGetIamPolicyResponse>;
    /**
     * Creates a new resource policy.
     */
    computeResourcePoliciesInsert(req: operations.ComputeResourcePoliciesInsertRequest, security: operations.ComputeResourcePoliciesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeResourcePoliciesInsertResponse>;
    /**
     * A list all the resource policies that have been configured for the specified project in specified region.
     */
    computeResourcePoliciesList(req: operations.ComputeResourcePoliciesListRequest, security: operations.ComputeResourcePoliciesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeResourcePoliciesListResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.
     */
    computeResourcePoliciesSetIamPolicy(req: operations.ComputeResourcePoliciesSetIamPolicyRequest, security: operations.ComputeResourcePoliciesSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeResourcePoliciesSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeResourcePoliciesTestIamPermissions(req: operations.ComputeResourcePoliciesTestIamPermissionsRequest, security: operations.ComputeResourcePoliciesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeResourcePoliciesTestIamPermissionsResponse>;
}
