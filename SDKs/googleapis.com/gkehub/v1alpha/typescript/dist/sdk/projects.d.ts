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
     * Adds a new Feature.
     */
    gkehubProjectsLocationsFeaturesCreate(req: operations.GkehubProjectsLocationsFeaturesCreateRequest, security: operations.GkehubProjectsLocationsFeaturesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsFeaturesCreateResponse>;
    /**
     * Lists Features in a given project and location.
     */
    gkehubProjectsLocationsFeaturesList(req: operations.GkehubProjectsLocationsFeaturesListRequest, security: operations.GkehubProjectsLocationsFeaturesListSecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsFeaturesListResponse>;
    /**
     * Creates a fleet.
     */
    gkehubProjectsLocationsFleetsCreate(req: operations.GkehubProjectsLocationsFleetsCreateRequest, security: operations.GkehubProjectsLocationsFleetsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsFleetsCreateResponse>;
    /**
     * Returns all fleets within an organization or a project that the caller has access to.
     */
    gkehubProjectsLocationsFleetsList(req: operations.GkehubProjectsLocationsFleetsListRequest, security: operations.GkehubProjectsLocationsFleetsListSecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsFleetsListResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    gkehubProjectsLocationsList(req: operations.GkehubProjectsLocationsListRequest, security: operations.GkehubProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsListResponse>;
    /**
     * Creates a MembershipBinding.
     */
    gkehubProjectsLocationsMembershipsBindingsCreate(req: operations.GkehubProjectsLocationsMembershipsBindingsCreateRequest, security: operations.GkehubProjectsLocationsMembershipsBindingsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsMembershipsBindingsCreateResponse>;
    /**
     * Lists MembershipBindings.
     */
    gkehubProjectsLocationsMembershipsBindingsList(req: operations.GkehubProjectsLocationsMembershipsBindingsListRequest, security: operations.GkehubProjectsLocationsMembershipsBindingsListSecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsMembershipsBindingsListResponse>;
    /**
     * Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
     */
    gkehubProjectsLocationsMembershipsCreate(req: operations.GkehubProjectsLocationsMembershipsCreateRequest, security: operations.GkehubProjectsLocationsMembershipsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsMembershipsCreateResponse>;
    /**
     * Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
     */
    gkehubProjectsLocationsMembershipsGenerateConnectManifest(req: operations.GkehubProjectsLocationsMembershipsGenerateConnectManifestRequest, security: operations.GkehubProjectsLocationsMembershipsGenerateConnectManifestSecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsMembershipsGenerateConnectManifestResponse>;
    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     */
    gkehubProjectsLocationsMembershipsGetIamPolicy(req: operations.GkehubProjectsLocationsMembershipsGetIamPolicyRequest, security: operations.GkehubProjectsLocationsMembershipsGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsMembershipsGetIamPolicyResponse>;
    /**
     * Lists Memberships in a given project and location.
     */
    gkehubProjectsLocationsMembershipsList(req: operations.GkehubProjectsLocationsMembershipsListRequest, security: operations.GkehubProjectsLocationsMembershipsListSecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsMembershipsListResponse>;
    /**
     * Lists Memberships of admin clusters in a given project and location. **This method is only used internally**.
     */
    gkehubProjectsLocationsMembershipsListAdmin(req: operations.GkehubProjectsLocationsMembershipsListAdminRequest, security: operations.GkehubProjectsLocationsMembershipsListAdminSecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsMembershipsListAdminResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     */
    gkehubProjectsLocationsMembershipsSetIamPolicy(req: operations.GkehubProjectsLocationsMembershipsSetIamPolicyRequest, security: operations.GkehubProjectsLocationsMembershipsSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsMembershipsSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     */
    gkehubProjectsLocationsMembershipsTestIamPermissions(req: operations.GkehubProjectsLocationsMembershipsTestIamPermissionsRequest, security: operations.GkehubProjectsLocationsMembershipsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsMembershipsTestIamPermissionsResponse>;
    /**
     * ValidateCreateMembership is a preflight check for CreateMembership. It checks the following: 1. Caller has the required `gkehub.memberships.create` permission. 2. The membership_id is still available.
     */
    gkehubProjectsLocationsMembershipsValidateCreate(req: operations.GkehubProjectsLocationsMembershipsValidateCreateRequest, security: operations.GkehubProjectsLocationsMembershipsValidateCreateSecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsMembershipsValidateCreateResponse>;
    /**
     * Creates a fleet namespace.
     */
    gkehubProjectsLocationsNamespacesCreate(req: operations.GkehubProjectsLocationsNamespacesCreateRequest, security: operations.GkehubProjectsLocationsNamespacesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsNamespacesCreateResponse>;
    /**
     * Lists fleet namespaces.
     */
    gkehubProjectsLocationsNamespacesList(req: operations.GkehubProjectsLocationsNamespacesListRequest, security: operations.GkehubProjectsLocationsNamespacesListSecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsNamespacesListResponse>;
    /**
     * Creates a RBACRoleBinding.
     */
    gkehubProjectsLocationsNamespacesRbacrolebindingsCreate(req: operations.GkehubProjectsLocationsNamespacesRbacrolebindingsCreateRequest, security: operations.GkehubProjectsLocationsNamespacesRbacrolebindingsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsNamespacesRbacrolebindingsCreateResponse>;
    /**
     * Lists RBACRoleBinding.
     */
    gkehubProjectsLocationsNamespacesRbacrolebindingsList(req: operations.GkehubProjectsLocationsNamespacesRbacrolebindingsListRequest, security: operations.GkehubProjectsLocationsNamespacesRbacrolebindingsListSecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsNamespacesRbacrolebindingsListResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    gkehubProjectsLocationsOperationsCancel(req: operations.GkehubProjectsLocationsOperationsCancelRequest, security: operations.GkehubProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsOperationsCancelResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    gkehubProjectsLocationsOperationsList(req: operations.GkehubProjectsLocationsOperationsListRequest, security: operations.GkehubProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsOperationsListResponse>;
    /**
     * Creates a Scope.
     */
    gkehubProjectsLocationsScopesCreate(req: operations.GkehubProjectsLocationsScopesCreateRequest, security: operations.GkehubProjectsLocationsScopesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsScopesCreateResponse>;
    /**
     * Deletes a Scope.
     */
    gkehubProjectsLocationsScopesDelete(req: operations.GkehubProjectsLocationsScopesDeleteRequest, security: operations.GkehubProjectsLocationsScopesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsScopesDeleteResponse>;
    /**
     * Returns the details of a Scope.
     */
    gkehubProjectsLocationsScopesGet(req: operations.GkehubProjectsLocationsScopesGetRequest, security: operations.GkehubProjectsLocationsScopesGetSecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsScopesGetResponse>;
    /**
     * Lists Scopes.
     */
    gkehubProjectsLocationsScopesList(req: operations.GkehubProjectsLocationsScopesListRequest, security: operations.GkehubProjectsLocationsScopesListSecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsScopesListResponse>;
    /**
     * Updates a scopes.
     */
    gkehubProjectsLocationsScopesPatch(req: operations.GkehubProjectsLocationsScopesPatchRequest, security: operations.GkehubProjectsLocationsScopesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsScopesPatchResponse>;
}
