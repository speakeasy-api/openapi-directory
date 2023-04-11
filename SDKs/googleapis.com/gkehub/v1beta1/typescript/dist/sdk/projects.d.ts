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
    gkehubProjectsLocationsList(req: operations.GkehubProjectsLocationsListRequest, security: operations.GkehubProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsListResponse>;
    /**
     * Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
     */
    gkehubProjectsLocationsMembershipsCreate(req: operations.GkehubProjectsLocationsMembershipsCreateRequest, security: operations.GkehubProjectsLocationsMembershipsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsMembershipsCreateResponse>;
    /**
     * Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
     */
    gkehubProjectsLocationsMembershipsGenerateConnectManifest(req: operations.GkehubProjectsLocationsMembershipsGenerateConnectManifestRequest, security: operations.GkehubProjectsLocationsMembershipsGenerateConnectManifestSecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsMembershipsGenerateConnectManifestResponse>;
    /**
     * GenerateExclusivityManifest generates the manifests to update the exclusivity artifacts in the cluster if needed. Exclusivity artifacts include the Membership custom resource definition (CRD) and the singleton Membership custom resource (CR). Combined with ValidateExclusivity, exclusivity artifacts guarantee that a Kubernetes cluster is only registered to a single GKE Hub. The Membership CRD is versioned, and may require conversion when the GKE Hub API server begins serving a newer version of the CRD and corresponding CR. The response will be the converted CRD and CR if there are any differences between the versions.
     */
    gkehubProjectsLocationsMembershipsGenerateExclusivityManifest(req: operations.GkehubProjectsLocationsMembershipsGenerateExclusivityManifestRequest, security: operations.GkehubProjectsLocationsMembershipsGenerateExclusivityManifestSecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsMembershipsGenerateExclusivityManifestResponse>;
    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     */
    gkehubProjectsLocationsMembershipsGetIamPolicy(req: operations.GkehubProjectsLocationsMembershipsGetIamPolicyRequest, security: operations.GkehubProjectsLocationsMembershipsGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsMembershipsGetIamPolicyResponse>;
    /**
     * Lists Memberships in a given project and location.
     */
    gkehubProjectsLocationsMembershipsList(req: operations.GkehubProjectsLocationsMembershipsListRequest, security: operations.GkehubProjectsLocationsMembershipsListSecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsMembershipsListResponse>;
    /**
     * Updates an existing Membership.
     */
    gkehubProjectsLocationsMembershipsPatch(req: operations.GkehubProjectsLocationsMembershipsPatchRequest, security: operations.GkehubProjectsLocationsMembershipsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsMembershipsPatchResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     */
    gkehubProjectsLocationsMembershipsSetIamPolicy(req: operations.GkehubProjectsLocationsMembershipsSetIamPolicyRequest, security: operations.GkehubProjectsLocationsMembershipsSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsMembershipsSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     */
    gkehubProjectsLocationsMembershipsTestIamPermissions(req: operations.GkehubProjectsLocationsMembershipsTestIamPermissionsRequest, security: operations.GkehubProjectsLocationsMembershipsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsMembershipsTestIamPermissionsResponse>;
    /**
     * ValidateExclusivity validates the state of exclusivity in the cluster. The validation does not depend on an existing Hub membership resource.
     */
    gkehubProjectsLocationsMembershipsValidateExclusivity(req: operations.GkehubProjectsLocationsMembershipsValidateExclusivityRequest, security: operations.GkehubProjectsLocationsMembershipsValidateExclusivitySecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsMembershipsValidateExclusivityResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    gkehubProjectsLocationsOperationsCancel(req: operations.GkehubProjectsLocationsOperationsCancelRequest, security: operations.GkehubProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsOperationsCancelResponse>;
    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     */
    gkehubProjectsLocationsOperationsDelete(req: operations.GkehubProjectsLocationsOperationsDeleteRequest, security: operations.GkehubProjectsLocationsOperationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsOperationsDeleteResponse>;
    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     */
    gkehubProjectsLocationsOperationsGet(req: operations.GkehubProjectsLocationsOperationsGetRequest, security: operations.GkehubProjectsLocationsOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsOperationsGetResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    gkehubProjectsLocationsOperationsList(req: operations.GkehubProjectsLocationsOperationsListRequest, security: operations.GkehubProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsOperationsListResponse>;
}
