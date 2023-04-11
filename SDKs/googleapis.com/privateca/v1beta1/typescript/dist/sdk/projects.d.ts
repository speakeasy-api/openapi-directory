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
    privatecaProjectsLocationsList(req: operations.PrivatecaProjectsLocationsListRequest, security: operations.PrivatecaProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsListResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    privatecaProjectsLocationsOperationsCancel(req: operations.PrivatecaProjectsLocationsOperationsCancelRequest, security: operations.PrivatecaProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsOperationsCancelResponse>;
    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     */
    privatecaProjectsLocationsOperationsDelete(req: operations.PrivatecaProjectsLocationsOperationsDeleteRequest, security: operations.PrivatecaProjectsLocationsOperationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsOperationsDeleteResponse>;
    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     */
    privatecaProjectsLocationsOperationsGet(req: operations.PrivatecaProjectsLocationsOperationsGetRequest, security: operations.PrivatecaProjectsLocationsOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsOperationsGetResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    privatecaProjectsLocationsOperationsList(req: operations.PrivatecaProjectsLocationsOperationsListRequest, security: operations.PrivatecaProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsOperationsListResponse>;
    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     */
    privatecaProjectsLocationsReusableConfigsGetIamPolicy(req: operations.PrivatecaProjectsLocationsReusableConfigsGetIamPolicyRequest, security: operations.PrivatecaProjectsLocationsReusableConfigsGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsReusableConfigsGetIamPolicyResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     */
    privatecaProjectsLocationsReusableConfigsSetIamPolicy(req: operations.PrivatecaProjectsLocationsReusableConfigsSetIamPolicyRequest, security: operations.PrivatecaProjectsLocationsReusableConfigsSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsReusableConfigsSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     */
    privatecaProjectsLocationsReusableConfigsTestIamPermissions(req: operations.PrivatecaProjectsLocationsReusableConfigsTestIamPermissionsRequest, security: operations.PrivatecaProjectsLocationsReusableConfigsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsReusableConfigsTestIamPermissionsResponse>;
}
