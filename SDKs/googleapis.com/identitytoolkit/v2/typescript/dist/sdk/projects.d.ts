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
     * Initialize Identity Platform for a Cloud project. Identity Platform is an end-to-end authentication system for third-party users to access your apps and services. These could include mobile/web apps, games, APIs and beyond. This is the publicly available variant of EnableIdentityPlatform that is only available to billing-enabled projects.
     */
    identitytoolkitProjectsIdentityPlatformInitializeAuth(req: operations.IdentitytoolkitProjectsIdentityPlatformInitializeAuthRequest, security: operations.IdentitytoolkitProjectsIdentityPlatformInitializeAuthSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitProjectsIdentityPlatformInitializeAuthResponse>;
    /**
     * Create a tenant. Requires write permission on the Agent project.
     */
    identitytoolkitProjectsTenantsCreate(req: operations.IdentitytoolkitProjectsTenantsCreateRequest, security: operations.IdentitytoolkitProjectsTenantsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitProjectsTenantsCreateResponse>;
    /**
     * Create a default supported Idp configuration for an Identity Toolkit project.
     */
    identitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreate(req: operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateRequest, security: operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateResponse>;
    /**
     * List all default supported Idp configurations for an Identity Toolkit project.
     */
    identitytoolkitProjectsTenantsDefaultSupportedIdpConfigsList(req: operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListRequest, security: operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListResponse>;
    /**
     * Gets the access control policy for a resource. An error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it. Caller must have the right Google IAM permission on the resource.
     */
    identitytoolkitProjectsTenantsGetIamPolicy(req: operations.IdentitytoolkitProjectsTenantsGetIamPolicyRequest, security: operations.IdentitytoolkitProjectsTenantsGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitProjectsTenantsGetIamPolicyResponse>;
    /**
     * Create an inbound SAML configuration for an Identity Toolkit project.
     */
    identitytoolkitProjectsTenantsInboundSamlConfigsCreate(req: operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateRequest, security: operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateResponse>;
    /**
     * List all inbound SAML configurations for an Identity Toolkit project.
     */
    identitytoolkitProjectsTenantsInboundSamlConfigsList(req: operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsListRequest, security: operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsListSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsListResponse>;
    /**
     * List tenants under the given agent project. Requires read permission on the Agent project.
     */
    identitytoolkitProjectsTenantsList(req: operations.IdentitytoolkitProjectsTenantsListRequest, security: operations.IdentitytoolkitProjectsTenantsListSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitProjectsTenantsListResponse>;
    /**
     * Create an Oidc Idp configuration for an Identity Toolkit project.
     */
    identitytoolkitProjectsTenantsOauthIdpConfigsCreate(req: operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateRequest, security: operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateResponse>;
    /**
     * Delete an Oidc Idp configuration for an Identity Toolkit project.
     */
    identitytoolkitProjectsTenantsOauthIdpConfigsDelete(req: operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteRequest, security: operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteResponse>;
    /**
     * Retrieve an Oidc Idp configuration for an Identity Toolkit project.
     */
    identitytoolkitProjectsTenantsOauthIdpConfigsGet(req: operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsGetRequest, security: operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsGetSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsGetResponse>;
    /**
     * List all Oidc Idp configurations for an Identity Toolkit project.
     */
    identitytoolkitProjectsTenantsOauthIdpConfigsList(req: operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsListRequest, security: operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsListResponse>;
    /**
     * Update an Oidc Idp configuration for an Identity Toolkit project.
     */
    identitytoolkitProjectsTenantsOauthIdpConfigsPatch(req: operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchRequest, security: operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchResponse>;
    /**
     * Sets the access control policy for a resource. If the policy exists, it is replaced. Caller must have the right Google IAM permission on the resource.
     */
    identitytoolkitProjectsTenantsSetIamPolicy(req: operations.IdentitytoolkitProjectsTenantsSetIamPolicyRequest, security: operations.IdentitytoolkitProjectsTenantsSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitProjectsTenantsSetIamPolicyResponse>;
    /**
     * Returns the caller's permissions on a resource. An error is returned if the resource does not exist. A caller is not required to have Google IAM permission to make this request.
     */
    identitytoolkitProjectsTenantsTestIamPermissions(req: operations.IdentitytoolkitProjectsTenantsTestIamPermissionsRequest, security: operations.IdentitytoolkitProjectsTenantsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitProjectsTenantsTestIamPermissionsResponse>;
}
