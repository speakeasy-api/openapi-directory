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
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    workstationsProjectsLocationsOperationsCancel(req: operations.WorkstationsProjectsLocationsOperationsCancelRequest, security: operations.WorkstationsProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.WorkstationsProjectsLocationsOperationsCancelResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    workstationsProjectsLocationsOperationsList(req: operations.WorkstationsProjectsLocationsOperationsListRequest, security: operations.WorkstationsProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.WorkstationsProjectsLocationsOperationsListResponse>;
    /**
     * Creates a new workstation cluster.
     */
    workstationsProjectsLocationsWorkstationClustersCreate(req: operations.WorkstationsProjectsLocationsWorkstationClustersCreateRequest, security: operations.WorkstationsProjectsLocationsWorkstationClustersCreateSecurity, config?: AxiosRequestConfig): Promise<operations.WorkstationsProjectsLocationsWorkstationClustersCreateResponse>;
    /**
     * Returns all workstation clusters in the specified location.
     */
    workstationsProjectsLocationsWorkstationClustersList(req: operations.WorkstationsProjectsLocationsWorkstationClustersListRequest, security: operations.WorkstationsProjectsLocationsWorkstationClustersListSecurity, config?: AxiosRequestConfig): Promise<operations.WorkstationsProjectsLocationsWorkstationClustersListResponse>;
    /**
     * Creates a new workstation configuration.
     */
    workstationsProjectsLocationsWorkstationClustersWorkstationConfigsCreate(req: operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsCreateRequest, security: operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsCreateResponse>;
    /**
     * Returns all workstation configurations in the specified cluster.
     */
    workstationsProjectsLocationsWorkstationClustersWorkstationConfigsList(req: operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListRequest, security: operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListSecurity, config?: AxiosRequestConfig): Promise<operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListResponse>;
    /**
     * Returns all workstation configurations in the specified cluster on which the caller has the "workstations.workstation.create" permission.
     */
    workstationsProjectsLocationsWorkstationClustersWorkstationConfigsListUsable(req: operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListUsableRequest, security: operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListUsableSecurity, config?: AxiosRequestConfig): Promise<operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListUsableResponse>;
    /**
     * Creates a new workstation.
     */
    workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreate(req: operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreateRequest, security: operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreateResponse>;
    /**
     * Deletes the specified workstation.
     */
    workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsDelete(req: operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsDeleteRequest, security: operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsDeleteResponse>;
    /**
     * Returns a short-lived credential that can be used to send authenticated and authorized traffic to a workstation.
     */
    workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGenerateAccessToken(req: operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGenerateAccessTokenRequest, security: operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGenerateAccessTokenSecurity, config?: AxiosRequestConfig): Promise<operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGenerateAccessTokenResponse>;
    /**
     * Returns the requested workstation.
     */
    workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGet(req: operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetRequest, security: operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetResponse>;
    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     */
    workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetIamPolicy(req: operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetIamPolicyRequest, security: operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetIamPolicyResponse>;
    /**
     * Returns all Workstations using the specified config.
     */
    workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsList(req: operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListRequest, security: operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListSecurity, config?: AxiosRequestConfig): Promise<operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListResponse>;
    /**
     * Returns all Workstations using the specified config on which the caller has the "workstations.workstations.use" permission.
     */
    workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListUsable(req: operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListUsableRequest, security: operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListUsableSecurity, config?: AxiosRequestConfig): Promise<operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListUsableResponse>;
    /**
     * Updates an existing workstation.
     */
    workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsPatch(req: operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsPatchRequest, security: operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsPatchResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     */
    workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsSetIamPolicy(req: operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsSetIamPolicyRequest, security: operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsSetIamPolicyResponse>;
    /**
     * Starts running a workstation so that users can connect to it.
     */
    workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStart(req: operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStartRequest, security: operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStartSecurity, config?: AxiosRequestConfig): Promise<operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStartResponse>;
    /**
     * Stops running a workstation, reducing costs.
     */
    workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStop(req: operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStopRequest, security: operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStopSecurity, config?: AxiosRequestConfig): Promise<operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStopResponse>;
    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     */
    workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsTestIamPermissions(req: operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsTestIamPermissionsRequest, security: operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsTestIamPermissionsResponse>;
}
