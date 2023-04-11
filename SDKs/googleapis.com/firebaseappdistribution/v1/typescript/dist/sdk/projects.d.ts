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
     * Deletes releases. A maximum of 100 releases can be deleted per request.
     */
    firebaseappdistributionProjectsAppsReleasesBatchDelete(req: operations.FirebaseappdistributionProjectsAppsReleasesBatchDeleteRequest, security: operations.FirebaseappdistributionProjectsAppsReleasesBatchDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappdistributionProjectsAppsReleasesBatchDeleteResponse>;
    /**
     * Distributes a release to testers. This call does the following: 1. Creates testers for the specified emails, if none exist. 2. Adds the testers and groups to the release. 3. Sends new testers an invitation email. 4. Sends existing testers a new release email. The request will fail with a `INVALID_ARGUMENT` if it contains a group that doesn't exist.
     */
    firebaseappdistributionProjectsAppsReleasesDistribute(req: operations.FirebaseappdistributionProjectsAppsReleasesDistributeRequest, security: operations.FirebaseappdistributionProjectsAppsReleasesDistributeSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappdistributionProjectsAppsReleasesDistributeResponse>;
    /**
     * Lists feedback reports. By default, sorts by `createTime` in descending order.
     */
    firebaseappdistributionProjectsAppsReleasesFeedbackReportsList(req: operations.FirebaseappdistributionProjectsAppsReleasesFeedbackReportsListRequest, security: operations.FirebaseappdistributionProjectsAppsReleasesFeedbackReportsListSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappdistributionProjectsAppsReleasesFeedbackReportsListResponse>;
    /**
     * Lists releases. By default, sorts by `createTime` in descending order.
     */
    firebaseappdistributionProjectsAppsReleasesList(req: operations.FirebaseappdistributionProjectsAppsReleasesListRequest, security: operations.FirebaseappdistributionProjectsAppsReleasesListSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappdistributionProjectsAppsReleasesListResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    firebaseappdistributionProjectsAppsReleasesOperationsCancel(req: operations.FirebaseappdistributionProjectsAppsReleasesOperationsCancelRequest, security: operations.FirebaseappdistributionProjectsAppsReleasesOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappdistributionProjectsAppsReleasesOperationsCancelResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    firebaseappdistributionProjectsAppsReleasesOperationsList(req: operations.FirebaseappdistributionProjectsAppsReleasesOperationsListRequest, security: operations.FirebaseappdistributionProjectsAppsReleasesOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappdistributionProjectsAppsReleasesOperationsListResponse>;
    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     */
    firebaseappdistributionProjectsAppsReleasesOperationsWait(req: operations.FirebaseappdistributionProjectsAppsReleasesOperationsWaitRequest, security: operations.FirebaseappdistributionProjectsAppsReleasesOperationsWaitSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappdistributionProjectsAppsReleasesOperationsWaitResponse>;
    /**
     * Batch adds members to a group. The testers will gain access to all releases that the groups have access to.
     */
    firebaseappdistributionProjectsGroupsBatchJoin(req: operations.FirebaseappdistributionProjectsGroupsBatchJoinRequest, security: operations.FirebaseappdistributionProjectsGroupsBatchJoinSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappdistributionProjectsGroupsBatchJoinResponse>;
    /**
     * Batch removed members from a group. The testers will lose access to all releases that the groups have access to.
     */
    firebaseappdistributionProjectsGroupsBatchLeave(req: operations.FirebaseappdistributionProjectsGroupsBatchLeaveRequest, security: operations.FirebaseappdistributionProjectsGroupsBatchLeaveSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappdistributionProjectsGroupsBatchLeaveResponse>;
    /**
     * Create a group.
     */
    firebaseappdistributionProjectsGroupsCreate(req: operations.FirebaseappdistributionProjectsGroupsCreateRequest, security: operations.FirebaseappdistributionProjectsGroupsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappdistributionProjectsGroupsCreateResponse>;
    /**
     * Delete a group.
     */
    firebaseappdistributionProjectsGroupsDelete(req: operations.FirebaseappdistributionProjectsGroupsDeleteRequest, security: operations.FirebaseappdistributionProjectsGroupsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappdistributionProjectsGroupsDeleteResponse>;
    /**
     * Get a group.
     */
    firebaseappdistributionProjectsGroupsGet(req: operations.FirebaseappdistributionProjectsGroupsGetRequest, security: operations.FirebaseappdistributionProjectsGroupsGetSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappdistributionProjectsGroupsGetResponse>;
    /**
     * List groups.
     */
    firebaseappdistributionProjectsGroupsList(req: operations.FirebaseappdistributionProjectsGroupsListRequest, security: operations.FirebaseappdistributionProjectsGroupsListSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappdistributionProjectsGroupsListResponse>;
    /**
     * Batch adds testers. This call adds testers for the specified emails if they don't already exist. Returns all testers specified in the request, including newly created and previously existing testers. This action is idempotent.
     */
    firebaseappdistributionProjectsTestersBatchAdd(req: operations.FirebaseappdistributionProjectsTestersBatchAddRequest, security: operations.FirebaseappdistributionProjectsTestersBatchAddSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappdistributionProjectsTestersBatchAddResponse>;
    /**
     * Batch removes testers. If found, this call deletes testers for the specified emails. Returns all deleted testers.
     */
    firebaseappdistributionProjectsTestersBatchRemove(req: operations.FirebaseappdistributionProjectsTestersBatchRemoveRequest, security: operations.FirebaseappdistributionProjectsTestersBatchRemoveSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappdistributionProjectsTestersBatchRemoveResponse>;
    /**
     * Lists testers and their resource ids.
     */
    firebaseappdistributionProjectsTestersList(req: operations.FirebaseappdistributionProjectsTestersListRequest, security: operations.FirebaseappdistributionProjectsTestersListSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappdistributionProjectsTestersListResponse>;
    /**
     * Update a tester. If the testers joins a group they gain access to all releases that the group has access to.
     */
    firebaseappdistributionProjectsTestersPatch(req: operations.FirebaseappdistributionProjectsTestersPatchRequest, security: operations.FirebaseappdistributionProjectsTestersPatchSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappdistributionProjectsTestersPatchResponse>;
}
