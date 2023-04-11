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
     * Creates a new Connectivity Test. After you create a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. If the endpoint specifications in `ConnectivityTest` are invalid (for example, containing non-existent resources in the network, or you don't have read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of AMBIGUOUS. For more information, see the Connectivity Test documentation.
     */
    networkmanagementProjectsLocationsGlobalConnectivityTestsCreate(req: operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest, security: operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateResponse>;
    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     */
    networkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicy(req: operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyRequest, security: operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyResponse>;
    /**
     * Lists all Connectivity Tests owned by a project.
     */
    networkmanagementProjectsLocationsGlobalConnectivityTestsList(req: operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsListRequest, security: operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsListSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsListResponse>;
    /**
     * Updates the configuration of an existing `ConnectivityTest`. After you update a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. The Reachability state in the test resource is updated with the new result. If the endpoint specifications in `ConnectivityTest` are invalid (for example, they contain non-existent resources in the network, or the user does not have read permissions to the network configurations of listed projects), then the reachability result returns a value of UNKNOWN. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of `AMBIGUOUS`. See the documentation in `ConnectivityTest` for for more details.
     */
    networkmanagementProjectsLocationsGlobalConnectivityTestsPatch(req: operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchRequest, security: operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchResponse>;
    /**
     * Rerun an existing `ConnectivityTest`. After the user triggers the rerun, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. Even though the test configuration remains the same, the reachability result may change due to underlying network configuration changes. If the endpoint specifications in `ConnectivityTest` become invalid (for example, specified resources are deleted in the network, or you lost read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`.
     */
    networkmanagementProjectsLocationsGlobalConnectivityTestsRerun(req: operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunRequest, security: operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     */
    networkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicy(req: operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicyRequest, security: operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     */
    networkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissions(req: operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissionsRequest, security: operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissionsResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    networkmanagementProjectsLocationsGlobalOperationsCancel(req: operations.NetworkmanagementProjectsLocationsGlobalOperationsCancelRequest, security: operations.NetworkmanagementProjectsLocationsGlobalOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkmanagementProjectsLocationsGlobalOperationsCancelResponse>;
    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     */
    networkmanagementProjectsLocationsGlobalOperationsDelete(req: operations.NetworkmanagementProjectsLocationsGlobalOperationsDeleteRequest, security: operations.NetworkmanagementProjectsLocationsGlobalOperationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkmanagementProjectsLocationsGlobalOperationsDeleteResponse>;
    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     */
    networkmanagementProjectsLocationsGlobalOperationsGet(req: operations.NetworkmanagementProjectsLocationsGlobalOperationsGetRequest, security: operations.NetworkmanagementProjectsLocationsGlobalOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkmanagementProjectsLocationsGlobalOperationsGetResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    networkmanagementProjectsLocationsGlobalOperationsList(req: operations.NetworkmanagementProjectsLocationsGlobalOperationsListRequest, security: operations.NetworkmanagementProjectsLocationsGlobalOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkmanagementProjectsLocationsGlobalOperationsListResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    networkmanagementProjectsLocationsList(req: operations.NetworkmanagementProjectsLocationsListRequest, security: operations.NetworkmanagementProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkmanagementProjectsLocationsListResponse>;
}
