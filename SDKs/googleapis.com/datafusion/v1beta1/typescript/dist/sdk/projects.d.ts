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
     * Creates a new Data Fusion instance in the specified project and location.
     */
    datafusionProjectsLocationsInstancesCreate(req: operations.DatafusionProjectsLocationsInstancesCreateRequest, security: operations.DatafusionProjectsLocationsInstancesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DatafusionProjectsLocationsInstancesCreateResponse>;
    /**
     * Creates DNS peering on the given resource.
     */
    datafusionProjectsLocationsInstancesDnsPeeringsCreate(req: operations.DatafusionProjectsLocationsInstancesDnsPeeringsCreateRequest, security: operations.DatafusionProjectsLocationsInstancesDnsPeeringsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DatafusionProjectsLocationsInstancesDnsPeeringsCreateResponse>;
    /**
     * Lists DNS peerings for a given resource.
     */
    datafusionProjectsLocationsInstancesDnsPeeringsList(req: operations.DatafusionProjectsLocationsInstancesDnsPeeringsListRequest, security: operations.DatafusionProjectsLocationsInstancesDnsPeeringsListSecurity, config?: AxiosRequestConfig): Promise<operations.DatafusionProjectsLocationsInstancesDnsPeeringsListResponse>;
    /**
     * Lists Data Fusion instances in the specified project and location.
     */
    datafusionProjectsLocationsInstancesList(req: operations.DatafusionProjectsLocationsInstancesListRequest, security: operations.DatafusionProjectsLocationsInstancesListSecurity, config?: AxiosRequestConfig): Promise<operations.DatafusionProjectsLocationsInstancesListResponse>;
    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     */
    datafusionProjectsLocationsInstancesNamespacesGetIamPolicy(req: operations.DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyRequest, security: operations.DatafusionProjectsLocationsInstancesNamespacesGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyResponse>;
    /**
     * List namespaces in a given instance
     */
    datafusionProjectsLocationsInstancesNamespacesList(req: operations.DatafusionProjectsLocationsInstancesNamespacesListRequest, security: operations.DatafusionProjectsLocationsInstancesNamespacesListSecurity, config?: AxiosRequestConfig): Promise<operations.DatafusionProjectsLocationsInstancesNamespacesListResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     */
    datafusionProjectsLocationsInstancesNamespacesSetIamPolicy(req: operations.DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyRequest, security: operations.DatafusionProjectsLocationsInstancesNamespacesSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     */
    datafusionProjectsLocationsInstancesNamespacesTestIamPermissions(req: operations.DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsRequest, security: operations.DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsResponse>;
    /**
     * Updates a single Data Fusion instance.
     */
    datafusionProjectsLocationsInstancesPatch(req: operations.DatafusionProjectsLocationsInstancesPatchRequest, security: operations.DatafusionProjectsLocationsInstancesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DatafusionProjectsLocationsInstancesPatchResponse>;
    /**
     * Restart a single Data Fusion instance. At the end of an operation instance is fully restarted.
     */
    datafusionProjectsLocationsInstancesRestart(req: operations.DatafusionProjectsLocationsInstancesRestartRequest, security: operations.DatafusionProjectsLocationsInstancesRestartSecurity, config?: AxiosRequestConfig): Promise<operations.DatafusionProjectsLocationsInstancesRestartResponse>;
    /**
     * Upgrade a single Data Fusion instance. At the end of an operation instance is fully upgraded.
     */
    datafusionProjectsLocationsInstancesUpgrade(req: operations.DatafusionProjectsLocationsInstancesUpgradeRequest, security: operations.DatafusionProjectsLocationsInstancesUpgradeSecurity, config?: AxiosRequestConfig): Promise<operations.DatafusionProjectsLocationsInstancesUpgradeResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    datafusionProjectsLocationsList(req: operations.DatafusionProjectsLocationsListRequest, security: operations.DatafusionProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.DatafusionProjectsLocationsListResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    datafusionProjectsLocationsOperationsCancel(req: operations.DatafusionProjectsLocationsOperationsCancelRequest, security: operations.DatafusionProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.DatafusionProjectsLocationsOperationsCancelResponse>;
    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     */
    datafusionProjectsLocationsOperationsDelete(req: operations.DatafusionProjectsLocationsOperationsDeleteRequest, security: operations.DatafusionProjectsLocationsOperationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DatafusionProjectsLocationsOperationsDeleteResponse>;
    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     */
    datafusionProjectsLocationsOperationsGet(req: operations.DatafusionProjectsLocationsOperationsGetRequest, security: operations.DatafusionProjectsLocationsOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DatafusionProjectsLocationsOperationsGetResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    datafusionProjectsLocationsOperationsList(req: operations.DatafusionProjectsLocationsOperationsListRequest, security: operations.DatafusionProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.DatafusionProjectsLocationsOperationsListResponse>;
    /**
     * Remove IAM policy that is currently set on the given resource.
     */
    datafusionProjectsLocationsRemoveIamPolicy(req: operations.DatafusionProjectsLocationsRemoveIamPolicyRequest, security: operations.DatafusionProjectsLocationsRemoveIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.DatafusionProjectsLocationsRemoveIamPolicyResponse>;
    /**
     * Lists possible versions for Data Fusion instances in the specified project and location.
     */
    datafusionProjectsLocationsVersionsList(req: operations.DatafusionProjectsLocationsVersionsListRequest, security: operations.DatafusionProjectsLocationsVersionsListSecurity, config?: AxiosRequestConfig): Promise<operations.DatafusionProjectsLocationsVersionsListResponse>;
}
