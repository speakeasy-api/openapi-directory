import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class NodeTemplates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves an aggregated list of node templates.
     */
    computeNodeTemplatesAggregatedList(req: operations.ComputeNodeTemplatesAggregatedListRequest, security: operations.ComputeNodeTemplatesAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNodeTemplatesAggregatedListResponse>;
    /**
     * Deletes the specified NodeTemplate resource.
     */
    computeNodeTemplatesDelete(req: operations.ComputeNodeTemplatesDeleteRequest, security: operations.ComputeNodeTemplatesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNodeTemplatesDeleteResponse>;
    /**
     * Returns the specified node template.
     */
    computeNodeTemplatesGet(req: operations.ComputeNodeTemplatesGetRequest, security: operations.ComputeNodeTemplatesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNodeTemplatesGetResponse>;
    /**
     * Gets the access control policy for a resource. May be empty if no such policy or resource exists.
     */
    computeNodeTemplatesGetIamPolicy(req: operations.ComputeNodeTemplatesGetIamPolicyRequest, security: operations.ComputeNodeTemplatesGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNodeTemplatesGetIamPolicyResponse>;
    /**
     * Creates a NodeTemplate resource in the specified project using the data included in the request.
     */
    computeNodeTemplatesInsert(req: operations.ComputeNodeTemplatesInsertRequest, security: operations.ComputeNodeTemplatesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNodeTemplatesInsertResponse>;
    /**
     * Retrieves a list of node templates available to the specified project.
     */
    computeNodeTemplatesList(req: operations.ComputeNodeTemplatesListRequest, security: operations.ComputeNodeTemplatesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNodeTemplatesListResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.
     */
    computeNodeTemplatesSetIamPolicy(req: operations.ComputeNodeTemplatesSetIamPolicyRequest, security: operations.ComputeNodeTemplatesSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNodeTemplatesSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeNodeTemplatesTestIamPermissions(req: operations.ComputeNodeTemplatesTestIamPermissionsRequest, security: operations.ComputeNodeTemplatesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNodeTemplatesTestIamPermissionsResponse>;
}
