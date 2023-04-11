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
     * Creates a Backup for the given BackupPlan.
     */
    gkebackupProjectsLocationsBackupPlansBackupsCreate(req: operations.GkebackupProjectsLocationsBackupPlansBackupsCreateRequest, security: operations.GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsBackupPlansBackupsCreateResponse>;
    /**
     * Lists the Backups for a given BackupPlan.
     */
    gkebackupProjectsLocationsBackupPlansBackupsList(req: operations.GkebackupProjectsLocationsBackupPlansBackupsListRequest, security: operations.GkebackupProjectsLocationsBackupPlansBackupsListSecurity, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsBackupPlansBackupsListResponse>;
    /**
     * Lists the VolumeBackups for a given Backup.
     */
    gkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsList(req: operations.GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListRequest, security: operations.GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListSecurity, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListResponse>;
    /**
     * Creates a new BackupPlan in a given location.
     */
    gkebackupProjectsLocationsBackupPlansCreate(req: operations.GkebackupProjectsLocationsBackupPlansCreateRequest, security: operations.GkebackupProjectsLocationsBackupPlansCreateSecurity, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsBackupPlansCreateResponse>;
    /**
     * Lists BackupPlans in a given location.
     */
    gkebackupProjectsLocationsBackupPlansList(req: operations.GkebackupProjectsLocationsBackupPlansListRequest, security: operations.GkebackupProjectsLocationsBackupPlansListSecurity, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsBackupPlansListResponse>;
    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     */
    gkebackupProjectsLocationsDeleteOperations(req: operations.GkebackupProjectsLocationsDeleteOperationsRequest, security: operations.GkebackupProjectsLocationsDeleteOperationsSecurity, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsDeleteOperationsResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    gkebackupProjectsLocationsList(req: operations.GkebackupProjectsLocationsListRequest, security: operations.GkebackupProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsListResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    gkebackupProjectsLocationsOperationsCancel(req: operations.GkebackupProjectsLocationsOperationsCancelRequest, security: operations.GkebackupProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsOperationsCancelResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    gkebackupProjectsLocationsOperationsList(req: operations.GkebackupProjectsLocationsOperationsListRequest, security: operations.GkebackupProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsOperationsListResponse>;
    /**
     * Creates a new RestorePlan in a given location.
     */
    gkebackupProjectsLocationsRestorePlansCreate(req: operations.GkebackupProjectsLocationsRestorePlansCreateRequest, security: operations.GkebackupProjectsLocationsRestorePlansCreateSecurity, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsRestorePlansCreateResponse>;
    /**
     * Lists RestorePlans in a given location.
     */
    gkebackupProjectsLocationsRestorePlansList(req: operations.GkebackupProjectsLocationsRestorePlansListRequest, security: operations.GkebackupProjectsLocationsRestorePlansListSecurity, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsRestorePlansListResponse>;
    /**
     * Creates a new Restore for the given RestorePlan.
     */
    gkebackupProjectsLocationsRestorePlansRestoresCreate(req: operations.GkebackupProjectsLocationsRestorePlansRestoresCreateRequest, security: operations.GkebackupProjectsLocationsRestorePlansRestoresCreateSecurity, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsRestorePlansRestoresCreateResponse>;
    /**
     * Deletes an existing Restore.
     */
    gkebackupProjectsLocationsRestorePlansRestoresDelete(req: operations.GkebackupProjectsLocationsRestorePlansRestoresDeleteRequest, security: operations.GkebackupProjectsLocationsRestorePlansRestoresDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsRestorePlansRestoresDeleteResponse>;
    /**
     * Lists the Restores for a given RestorePlan.
     */
    gkebackupProjectsLocationsRestorePlansRestoresList(req: operations.GkebackupProjectsLocationsRestorePlansRestoresListRequest, security: operations.GkebackupProjectsLocationsRestorePlansRestoresListSecurity, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsRestorePlansRestoresListResponse>;
    /**
     * Update a Restore.
     */
    gkebackupProjectsLocationsRestorePlansRestoresPatch(req: operations.GkebackupProjectsLocationsRestorePlansRestoresPatchRequest, security: operations.GkebackupProjectsLocationsRestorePlansRestoresPatchSecurity, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsRestorePlansRestoresPatchResponse>;
    /**
     * Retrieve the details of a single VolumeRestore.
     */
    gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGet(req: operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetRequest, security: operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetSecurity, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetResponse>;
    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     */
    gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicy(req: operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyRequest, security: operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyResponse>;
    /**
     * Lists the VolumeRestores for a given Restore.
     */
    gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresList(req: operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListRequest, security: operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListSecurity, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     */
    gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicy(req: operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicyRequest, security: operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     */
    gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissions(req: operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsRequest, security: operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsResponse>;
}
