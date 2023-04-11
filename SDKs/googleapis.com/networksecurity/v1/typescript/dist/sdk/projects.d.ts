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
     * Creates a new AuthorizationPolicy in a given project and location.
     */
    networksecurityProjectsLocationsAuthorizationPoliciesCreate(req: operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest, security: operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateResponse>;
    /**
     * Lists AuthorizationPolicies in a given project and location.
     */
    networksecurityProjectsLocationsAuthorizationPoliciesList(req: operations.NetworksecurityProjectsLocationsAuthorizationPoliciesListRequest, security: operations.NetworksecurityProjectsLocationsAuthorizationPoliciesListSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsAuthorizationPoliciesListResponse>;
    /**
     * Creates a new ClientTlsPolicy in a given project and location.
     */
    networksecurityProjectsLocationsClientTlsPoliciesCreate(req: operations.NetworksecurityProjectsLocationsClientTlsPoliciesCreateRequest, security: operations.NetworksecurityProjectsLocationsClientTlsPoliciesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsClientTlsPoliciesCreateResponse>;
    /**
     * Lists ClientTlsPolicies in a given project and location.
     */
    networksecurityProjectsLocationsClientTlsPoliciesList(req: operations.NetworksecurityProjectsLocationsClientTlsPoliciesListRequest, security: operations.NetworksecurityProjectsLocationsClientTlsPoliciesListSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsClientTlsPoliciesListResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    networksecurityProjectsLocationsList(req: operations.NetworksecurityProjectsLocationsListRequest, security: operations.NetworksecurityProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsListResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    networksecurityProjectsLocationsOperationsCancel(req: operations.NetworksecurityProjectsLocationsOperationsCancelRequest, security: operations.NetworksecurityProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsOperationsCancelResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    networksecurityProjectsLocationsOperationsList(req: operations.NetworksecurityProjectsLocationsOperationsListRequest, security: operations.NetworksecurityProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsOperationsListResponse>;
    /**
     * Creates a new ServerTlsPolicy in a given project and location.
     */
    networksecurityProjectsLocationsServerTlsPoliciesCreate(req: operations.NetworksecurityProjectsLocationsServerTlsPoliciesCreateRequest, security: operations.NetworksecurityProjectsLocationsServerTlsPoliciesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsServerTlsPoliciesCreateResponse>;
    /**
     * Deletes a single ServerTlsPolicy.
     */
    networksecurityProjectsLocationsServerTlsPoliciesDelete(req: operations.NetworksecurityProjectsLocationsServerTlsPoliciesDeleteRequest, security: operations.NetworksecurityProjectsLocationsServerTlsPoliciesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsServerTlsPoliciesDeleteResponse>;
    /**
     * Gets details of a single ServerTlsPolicy.
     */
    networksecurityProjectsLocationsServerTlsPoliciesGet(req: operations.NetworksecurityProjectsLocationsServerTlsPoliciesGetRequest, security: operations.NetworksecurityProjectsLocationsServerTlsPoliciesGetSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsServerTlsPoliciesGetResponse>;
    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     */
    networksecurityProjectsLocationsServerTlsPoliciesGetIamPolicy(req: operations.NetworksecurityProjectsLocationsServerTlsPoliciesGetIamPolicyRequest, security: operations.NetworksecurityProjectsLocationsServerTlsPoliciesGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsServerTlsPoliciesGetIamPolicyResponse>;
    /**
     * Lists ServerTlsPolicies in a given project and location.
     */
    networksecurityProjectsLocationsServerTlsPoliciesList(req: operations.NetworksecurityProjectsLocationsServerTlsPoliciesListRequest, security: operations.NetworksecurityProjectsLocationsServerTlsPoliciesListSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsServerTlsPoliciesListResponse>;
    /**
     * Updates the parameters of a single ServerTlsPolicy.
     */
    networksecurityProjectsLocationsServerTlsPoliciesPatch(req: operations.NetworksecurityProjectsLocationsServerTlsPoliciesPatchRequest, security: operations.NetworksecurityProjectsLocationsServerTlsPoliciesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsServerTlsPoliciesPatchResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     */
    networksecurityProjectsLocationsServerTlsPoliciesSetIamPolicy(req: operations.NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyRequest, security: operations.NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     */
    networksecurityProjectsLocationsServerTlsPoliciesTestIamPermissions(req: operations.NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsRequest, security: operations.NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsResponse>;
}
