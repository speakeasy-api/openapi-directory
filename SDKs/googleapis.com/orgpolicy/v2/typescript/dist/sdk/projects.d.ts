import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Lists constraints that could be applied on the specified resource.
     */
    orgpolicyProjectsConstraintsList(req: operations.OrgpolicyProjectsConstraintsListRequest, security: operations.OrgpolicyProjectsConstraintsListSecurity, config?: AxiosRequestConfig): Promise<operations.OrgpolicyProjectsConstraintsListResponse>;
    /**
     * Creates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the policy already exists on the given Google Cloud resource.
     */
    orgpolicyProjectsPoliciesCreate(req: operations.OrgpolicyProjectsPoliciesCreateRequest, security: operations.OrgpolicyProjectsPoliciesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.OrgpolicyProjectsPoliciesCreateResponse>;
    /**
     * Deletes a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or organization policy does not exist.
     */
    orgpolicyProjectsPoliciesDelete(req: operations.OrgpolicyProjectsPoliciesDeleteRequest, security: operations.OrgpolicyProjectsPoliciesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.OrgpolicyProjectsPoliciesDeleteResponse>;
    /**
     * Gets a policy on a resource. If no policy is set on the resource, `NOT_FOUND` is returned. The `etag` value can be used with `UpdatePolicy()` to update a policy during read-modify-write.
     */
    orgpolicyProjectsPoliciesGet(req: operations.OrgpolicyProjectsPoliciesGetRequest, security: operations.OrgpolicyProjectsPoliciesGetSecurity, config?: AxiosRequestConfig): Promise<operations.OrgpolicyProjectsPoliciesGetResponse>;
    /**
     * Gets the effective policy on a resource. This is the result of merging policies in the resource hierarchy and evaluating conditions. The returned policy will not have an `etag` or `condition` set because it is an evaluated policy across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.
     */
    orgpolicyProjectsPoliciesGetEffectivePolicy(req: operations.OrgpolicyProjectsPoliciesGetEffectivePolicyRequest, security: operations.OrgpolicyProjectsPoliciesGetEffectivePolicySecurity, config?: AxiosRequestConfig): Promise<operations.OrgpolicyProjectsPoliciesGetEffectivePolicyResponse>;
    /**
     * Retrieves all of the policies that exist on a particular resource.
     */
    orgpolicyProjectsPoliciesList(req: operations.OrgpolicyProjectsPoliciesListRequest, security: operations.OrgpolicyProjectsPoliciesListSecurity, config?: AxiosRequestConfig): Promise<operations.OrgpolicyProjectsPoliciesListResponse>;
    /**
     * Updates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or the policy do not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the policy Note: the supplied policy will perform a full overwrite of all fields.
     */
    orgpolicyProjectsPoliciesPatch(req: operations.OrgpolicyProjectsPoliciesPatchRequest, security: operations.OrgpolicyProjectsPoliciesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.OrgpolicyProjectsPoliciesPatchResponse>;
}
