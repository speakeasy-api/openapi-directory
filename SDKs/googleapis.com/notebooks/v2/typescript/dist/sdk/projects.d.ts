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
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     */
    notebooksProjectsLocationsInstancesGetIamPolicy(req: operations.NotebooksProjectsLocationsInstancesGetIamPolicyRequest, security: operations.NotebooksProjectsLocationsInstancesGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsInstancesGetIamPolicyResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     */
    notebooksProjectsLocationsInstancesSetIamPolicy(req: operations.NotebooksProjectsLocationsInstancesSetIamPolicyRequest, security: operations.NotebooksProjectsLocationsInstancesSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsInstancesSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     */
    notebooksProjectsLocationsInstancesTestIamPermissions(req: operations.NotebooksProjectsLocationsInstancesTestIamPermissionsRequest, security: operations.NotebooksProjectsLocationsInstancesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsInstancesTestIamPermissionsResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    notebooksProjectsLocationsList(req: operations.NotebooksProjectsLocationsListRequest, security: operations.NotebooksProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsListResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    notebooksProjectsLocationsOperationsCancel(req: operations.NotebooksProjectsLocationsOperationsCancelRequest, security: operations.NotebooksProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsOperationsCancelResponse>;
    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     */
    notebooksProjectsLocationsOperationsDelete(req: operations.NotebooksProjectsLocationsOperationsDeleteRequest, security: operations.NotebooksProjectsLocationsOperationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsOperationsDeleteResponse>;
    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     */
    notebooksProjectsLocationsOperationsGet(req: operations.NotebooksProjectsLocationsOperationsGetRequest, security: operations.NotebooksProjectsLocationsOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsOperationsGetResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    notebooksProjectsLocationsOperationsList(req: operations.NotebooksProjectsLocationsOperationsListRequest, security: operations.NotebooksProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsOperationsListResponse>;
}
