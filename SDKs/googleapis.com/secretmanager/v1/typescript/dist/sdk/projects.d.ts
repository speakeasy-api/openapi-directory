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
     * Lists information about the supported locations for this service.
     */
    secretmanagerProjectsLocationsList(req: operations.SecretmanagerProjectsLocationsListRequest, security: operations.SecretmanagerProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsLocationsListResponse>;
    /**
     * Creates a new SecretVersion containing secret data and attaches it to an existing Secret.
     */
    secretmanagerProjectsSecretsAddVersion(req: operations.SecretmanagerProjectsSecretsAddVersionRequest, security: operations.SecretmanagerProjectsSecretsAddVersionSecurity, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsAddVersionResponse>;
    /**
     * Creates a new Secret containing no SecretVersions.
     */
    secretmanagerProjectsSecretsCreate(req: operations.SecretmanagerProjectsSecretsCreateRequest, security: operations.SecretmanagerProjectsSecretsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsCreateResponse>;
    /**
     * Deletes a Secret.
     */
    secretmanagerProjectsSecretsDelete(req: operations.SecretmanagerProjectsSecretsDeleteRequest, security: operations.SecretmanagerProjectsSecretsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsDeleteResponse>;
    /**
     * Gets the access control policy for a secret. Returns empty policy if the secret exists and does not have a policy set.
     */
    secretmanagerProjectsSecretsGetIamPolicy(req: operations.SecretmanagerProjectsSecretsGetIamPolicyRequest, security: operations.SecretmanagerProjectsSecretsGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsGetIamPolicyResponse>;
    /**
     * Lists Secrets.
     */
    secretmanagerProjectsSecretsList(req: operations.SecretmanagerProjectsSecretsListRequest, security: operations.SecretmanagerProjectsSecretsListSecurity, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsListResponse>;
    /**
     * Updates metadata of an existing Secret.
     */
    secretmanagerProjectsSecretsPatch(req: operations.SecretmanagerProjectsSecretsPatchRequest, security: operations.SecretmanagerProjectsSecretsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsPatchResponse>;
    /**
     * Sets the access control policy on the specified secret. Replaces any existing policy. Permissions on SecretVersions are enforced according to the policy set on the associated Secret.
     */
    secretmanagerProjectsSecretsSetIamPolicy(req: operations.SecretmanagerProjectsSecretsSetIamPolicyRequest, security: operations.SecretmanagerProjectsSecretsSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has for the specified secret. If the secret does not exist, this call returns an empty set of permissions, not a NOT_FOUND error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     */
    secretmanagerProjectsSecretsTestIamPermissions(req: operations.SecretmanagerProjectsSecretsTestIamPermissionsRequest, security: operations.SecretmanagerProjectsSecretsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsTestIamPermissionsResponse>;
    /**
     * Accesses a SecretVersion. This call returns the secret data. `projects/* /secrets/* /versions/latest` is an alias to the most recently created SecretVersion.
     */
    secretmanagerProjectsSecretsVersionsAccess(req: operations.SecretmanagerProjectsSecretsVersionsAccessRequest, security: operations.SecretmanagerProjectsSecretsVersionsAccessSecurity, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsVersionsAccessResponse>;
    /**
     * Destroys a SecretVersion. Sets the state of the SecretVersion to DESTROYED and irrevocably destroys the secret data.
     */
    secretmanagerProjectsSecretsVersionsDestroy(req: operations.SecretmanagerProjectsSecretsVersionsDestroyRequest, security: operations.SecretmanagerProjectsSecretsVersionsDestroySecurity, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsVersionsDestroyResponse>;
    /**
     * Disables a SecretVersion. Sets the state of the SecretVersion to DISABLED.
     */
    secretmanagerProjectsSecretsVersionsDisable(req: operations.SecretmanagerProjectsSecretsVersionsDisableRequest, security: operations.SecretmanagerProjectsSecretsVersionsDisableSecurity, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsVersionsDisableResponse>;
    /**
     * Enables a SecretVersion. Sets the state of the SecretVersion to ENABLED.
     */
    secretmanagerProjectsSecretsVersionsEnable(req: operations.SecretmanagerProjectsSecretsVersionsEnableRequest, security: operations.SecretmanagerProjectsSecretsVersionsEnableSecurity, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsVersionsEnableResponse>;
    /**
     * Gets metadata for a SecretVersion. `projects/* /secrets/* /versions/latest` is an alias to the most recently created SecretVersion.
     */
    secretmanagerProjectsSecretsVersionsGet(req: operations.SecretmanagerProjectsSecretsVersionsGetRequest, security: operations.SecretmanagerProjectsSecretsVersionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsVersionsGetResponse>;
    /**
     * Lists SecretVersions. This call does not return secret data.
     */
    secretmanagerProjectsSecretsVersionsList(req: operations.SecretmanagerProjectsSecretsVersionsListRequest, security: operations.SecretmanagerProjectsSecretsVersionsListSecurity, config?: AxiosRequestConfig): Promise<operations.SecretmanagerProjectsSecretsVersionsListResponse>;
}
