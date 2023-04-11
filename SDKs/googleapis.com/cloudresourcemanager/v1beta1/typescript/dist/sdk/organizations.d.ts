import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Organizations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Fetches an Organization resource identified by the specified resource name.
     */
    cloudresourcemanagerOrganizationsGet(req: operations.CloudresourcemanagerOrganizationsGetRequest, security: operations.CloudresourcemanagerOrganizationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerOrganizationsGetResponse>;
    /**
     * Gets the access control policy for an Organization resource. May be empty if no such policy or resource exists. The `resource` field should be the organization's resource name, e.g. "organizations/123".
     */
    cloudresourcemanagerOrganizationsGetIamPolicy(req: operations.CloudresourcemanagerOrganizationsGetIamPolicyRequest, security: operations.CloudresourcemanagerOrganizationsGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerOrganizationsGetIamPolicyResponse>;
    /**
     * Lists Organization resources that are visible to the user and satisfy the specified filter. This method returns Organizations in an unspecified order. New Organizations do not necessarily appear at the end of the list.
     */
    cloudresourcemanagerOrganizationsList(req: operations.CloudresourcemanagerOrganizationsListRequest, security: operations.CloudresourcemanagerOrganizationsListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerOrganizationsListResponse>;
    /**
     * Sets the access control policy on an Organization resource. Replaces any existing policy. The `resource` field should be the organization's resource name, e.g. "organizations/123".
     */
    cloudresourcemanagerOrganizationsSetIamPolicy(req: operations.CloudresourcemanagerOrganizationsSetIamPolicyRequest, security: operations.CloudresourcemanagerOrganizationsSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerOrganizationsSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified Organization. The `resource` field should be the organization's resource name, e.g. "organizations/123".
     */
    cloudresourcemanagerOrganizationsTestIamPermissions(req: operations.CloudresourcemanagerOrganizationsTestIamPermissionsRequest, security: operations.CloudresourcemanagerOrganizationsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerOrganizationsTestIamPermissionsResponse>;
    /**
     * Updates an Organization resource identified by the specified resource name.
     */
    cloudresourcemanagerOrganizationsUpdate(req: operations.CloudresourcemanagerOrganizationsUpdateRequest, security: operations.CloudresourcemanagerOrganizationsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerOrganizationsUpdateResponse>;
}
