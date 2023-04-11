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
     * Clears a `Policy` from a resource.
     */
    cloudresourcemanagerProjectsClearOrgPolicy(req: operations.CloudresourcemanagerProjectsClearOrgPolicyRequest, security: operations.CloudresourcemanagerProjectsClearOrgPolicySecurity, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerProjectsClearOrgPolicyResponse>;
    /**
     * Request that a new Project be created. The result is an Operation which can be used to track the creation process. This process usually takes a few seconds, but can sometimes take much longer. The tracking Operation is automatically deleted after a few hours, so there is no need to call DeleteOperation. Authorization requires the Google IAM permission `resourcemanager.projects.create` on the specified parent for the new project. The parent is identified by a specified ResourceId, which must include both an ID and a type, such as organization. This method does not associate the new project with a billing account. You can set or update the billing account associated with a project using the [`projects.updateBillingInfo`] (/billing/reference/rest/v1/projects/updateBillingInfo) method.
     */
    cloudresourcemanagerProjectsCreate(req: operations.CloudresourcemanagerProjectsCreateRequest, security: operations.CloudresourcemanagerProjectsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerProjectsCreateResponse>;
    /**
     * Marks the Project identified by the specified `project_id` (for example, `my-project-123`) for deletion. This method will only affect the Project if it has a lifecycle state of ACTIVE. This method changes the Project's lifecycle state from ACTIVE to DELETE_REQUESTED. The deletion starts at an unspecified time, at which point the Project is no longer accessible. Until the deletion completes, you can check the lifecycle state checked by retrieving the Project with GetProject, and the Project remains visible to ListProjects. However, you cannot update the project. After the deletion completes, the Project is not retrievable by the GetProject and ListProjects methods. The caller must have delete permissions for this Project.
     */
    cloudresourcemanagerProjectsDelete(req: operations.CloudresourcemanagerProjectsDeleteRequest, security: operations.CloudresourcemanagerProjectsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerProjectsDeleteResponse>;
    /**
     * Retrieves the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have read permissions for this Project.
     */
    cloudresourcemanagerProjectsGet(req: operations.CloudresourcemanagerProjectsGetRequest, security: operations.CloudresourcemanagerProjectsGetSecurity, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerProjectsGetResponse>;
    /**
     * Gets a list of ancestors in the resource hierarchy for the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have read permissions for this Project.
     */
    cloudresourcemanagerProjectsGetAncestry(req: operations.CloudresourcemanagerProjectsGetAncestryRequest, security: operations.CloudresourcemanagerProjectsGetAncestrySecurity, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerProjectsGetAncestryResponse>;
    /**
     * Gets the effective `Policy` on a resource. This is the result of merging `Policies` in the resource hierarchy. The returned `Policy` will not have an `etag`set because it is a computed `Policy` across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.
     */
    cloudresourcemanagerProjectsGetEffectiveOrgPolicy(req: operations.CloudresourcemanagerProjectsGetEffectiveOrgPolicyRequest, security: operations.CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurity, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerProjectsGetEffectiveOrgPolicyResponse>;
    /**
     * Returns the IAM access control policy for the specified Project. Permission is denied if the policy or the resource does not exist. Authorization requires the Google IAM permission `resourcemanager.projects.getIamPolicy` on the project. For additional information about `resource` (e.g. my-project-id) structure and identification, see [Resource Names](https://cloud.google.com/apis/design/resource_names).
     */
    cloudresourcemanagerProjectsGetIamPolicy(req: operations.CloudresourcemanagerProjectsGetIamPolicyRequest, security: operations.CloudresourcemanagerProjectsGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerProjectsGetIamPolicyResponse>;
    /**
     * Gets a `Policy` on a resource. If no `Policy` is set on the resource, a `Policy` is returned with default values including `POLICY_TYPE_NOT_SET` for the `policy_type oneof`. The `etag` value can be used with `SetOrgPolicy()` to create or update a `Policy` during read-modify-write.
     */
    cloudresourcemanagerProjectsGetOrgPolicy(req: operations.CloudresourcemanagerProjectsGetOrgPolicyRequest, security: operations.CloudresourcemanagerProjectsGetOrgPolicySecurity, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerProjectsGetOrgPolicyResponse>;
    /**
     * Lists Projects that the caller has the `resourcemanager.projects.get` permission on and satisfy the specified filter. This method returns Projects in an unspecified order. This method is eventually consistent with project mutations; this means that a newly created project may not appear in the results or recent updates to an existing project may not be reflected in the results. To retrieve the latest state of a project, use the GetProject method. NOTE: If the request filter contains a `parent.type` and `parent.id` and the caller has the `resourcemanager.projects.list` permission on the parent, the results will be drawn from an alternate index which provides more consistent results. In future versions of this API, this List method will be split into List and Search to properly capture the behavioral difference.
     */
    cloudresourcemanagerProjectsList(req: operations.CloudresourcemanagerProjectsListRequest, security: operations.CloudresourcemanagerProjectsListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerProjectsListResponse>;
    /**
     * Lists `Constraints` that could be applied on the specified resource.
     */
    cloudresourcemanagerProjectsListAvailableOrgPolicyConstraints(req: operations.CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsRequest, security: operations.CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurity, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsResponse>;
    /**
     * Lists all the `Policies` set for a particular resource.
     */
    cloudresourcemanagerProjectsListOrgPolicies(req: operations.CloudresourcemanagerProjectsListOrgPoliciesRequest, security: operations.CloudresourcemanagerProjectsListOrgPoliciesSecurity, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerProjectsListOrgPoliciesResponse>;
    /**
     * Sets the IAM access control policy for the specified Project. CAUTION: This method will replace the existing policy, and cannot be used to append additional IAM settings. NOTE: Removing service accounts from policies or changing their roles can render services completely inoperable. It is important to understand how the service account is being used before removing or updating its roles. For additional information about `resource` (e.g. my-project-id) structure and identification, see [Resource Names](https://cloud.google.com/apis/design/resource_names). The following constraints apply when using `setIamPolicy()`: + Project does not support `allUsers` and `allAuthenticatedUsers` as `members` in a `Binding` of a `Policy`. + The owner role can be granted to a `user`, `serviceAccount`, or a group that is part of an organization. For example, group@myownpersonaldomain.com could be added as an owner to a project in the myownpersonaldomain.com organization, but not the examplepetstore.com organization. + Service accounts can be made owners of a project directly without any restrictions. However, to be added as an owner, a user must be invited via Cloud Platform console and must accept the invitation. + A user cannot be granted the owner role using `setIamPolicy()`. The user must be granted the owner role using the Cloud Platform Console and must explicitly accept the invitation. + You can only grant ownership of a project to a member by using the GCP Console. Inviting a member will deliver an invitation email that they must accept. An invitation email is not generated if you are granting a role other than owner, or if both the member you are inviting and the project are part of your organization. + If the project is not part of an organization, there must be at least one owner who has accepted the Terms of Service (ToS) agreement in the policy. Calling `setIamPolicy()` to remove the last ToS-accepted owner from the policy will fail. This restriction also applies to legacy projects that no longer have owners who have accepted the ToS. Edits to IAM policies will be rejected until the lack of a ToS-accepting owner is rectified. If the project is part of an organization, you can remove all owners, potentially making the organization inaccessible. Authorization requires the Google IAM permission `resourcemanager.projects.setIamPolicy` on the project
     */
    cloudresourcemanagerProjectsSetIamPolicy(req: operations.CloudresourcemanagerProjectsSetIamPolicyRequest, security: operations.CloudresourcemanagerProjectsSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerProjectsSetIamPolicyResponse>;
    /**
     * Updates the specified `Policy` on the resource. Creates a new `Policy` for that `Constraint` on the resource if one does not exist. Not supplying an `etag` on the request `Policy` results in an unconditional write of the `Policy`.
     */
    cloudresourcemanagerProjectsSetOrgPolicy(req: operations.CloudresourcemanagerProjectsSetOrgPolicyRequest, security: operations.CloudresourcemanagerProjectsSetOrgPolicySecurity, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerProjectsSetOrgPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified Project. For additional information about `resource` (e.g. my-project-id) structure and identification, see [Resource Names](https://cloud.google.com/apis/design/resource_names). There are no permissions required for making this API call.
     */
    cloudresourcemanagerProjectsTestIamPermissions(req: operations.CloudresourcemanagerProjectsTestIamPermissionsRequest, security: operations.CloudresourcemanagerProjectsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerProjectsTestIamPermissionsResponse>;
    /**
     * Restores the Project identified by the specified `project_id` (for example, `my-project-123`). You can only use this method for a Project that has a lifecycle state of DELETE_REQUESTED. After deletion starts, the Project cannot be restored. The caller must have undelete permissions for this Project.
     */
    cloudresourcemanagerProjectsUndelete(req: operations.CloudresourcemanagerProjectsUndeleteRequest, security: operations.CloudresourcemanagerProjectsUndeleteSecurity, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerProjectsUndeleteResponse>;
    /**
     * Updates the attributes of the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have modify permissions for this Project.
     */
    cloudresourcemanagerProjectsUpdate(req: operations.CloudresourcemanagerProjectsUpdateRequest, security: operations.CloudresourcemanagerProjectsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerProjectsUpdateResponse>;
}
