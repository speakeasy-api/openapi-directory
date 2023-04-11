import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class InstanceTemplates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves the list of all InstanceTemplates resources, regional and global, available to the specified project.
     */
    computeInstanceTemplatesAggregatedList(req: operations.ComputeInstanceTemplatesAggregatedListRequest, security: operations.ComputeInstanceTemplatesAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceTemplatesAggregatedListResponse>;
    /**
     * Deletes the specified instance template. Deleting an instance template is permanent and cannot be undone. It is not possible to delete templates that are already in use by a managed instance group.
     */
    computeInstanceTemplatesDelete(req: operations.ComputeInstanceTemplatesDeleteRequest, security: operations.ComputeInstanceTemplatesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceTemplatesDeleteResponse>;
    /**
     * Returns the specified instance template.
     */
    computeInstanceTemplatesGet(req: operations.ComputeInstanceTemplatesGetRequest, security: operations.ComputeInstanceTemplatesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceTemplatesGetResponse>;
    /**
     * Gets the access control policy for a resource. May be empty if no such policy or resource exists.
     */
    computeInstanceTemplatesGetIamPolicy(req: operations.ComputeInstanceTemplatesGetIamPolicyRequest, security: operations.ComputeInstanceTemplatesGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceTemplatesGetIamPolicyResponse>;
    /**
     * Creates an instance template in the specified project using the data that is included in the request. If you are creating a new template to update an existing instance group, your new instance template must use the same network or, if applicable, the same subnetwork as the original template.
     */
    computeInstanceTemplatesInsert(req: operations.ComputeInstanceTemplatesInsertRequest, security: operations.ComputeInstanceTemplatesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceTemplatesInsertResponse>;
    /**
     * Retrieves a list of instance templates that are contained within the specified project.
     */
    computeInstanceTemplatesList(req: operations.ComputeInstanceTemplatesListRequest, security: operations.ComputeInstanceTemplatesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceTemplatesListResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.
     */
    computeInstanceTemplatesSetIamPolicy(req: operations.ComputeInstanceTemplatesSetIamPolicyRequest, security: operations.ComputeInstanceTemplatesSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceTemplatesSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeInstanceTemplatesTestIamPermissions(req: operations.ComputeInstanceTemplatesTestIamPermissionsRequest, security: operations.ComputeInstanceTemplatesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceTemplatesTestIamPermissionsResponse>;
}
