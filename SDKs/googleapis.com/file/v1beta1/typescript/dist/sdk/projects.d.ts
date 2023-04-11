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
     * Creates a backup.
     */
    fileProjectsLocationsBackupsCreate(req: operations.FileProjectsLocationsBackupsCreateRequest, security: operations.FileProjectsLocationsBackupsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsBackupsCreateResponse>;
    /**
     * Lists all backups in a project for either a specified location or for all locations.
     */
    fileProjectsLocationsBackupsList(req: operations.FileProjectsLocationsBackupsListRequest, security: operations.FileProjectsLocationsBackupsListSecurity, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsBackupsListResponse>;
    /**
     * Creates an instance. When creating from a backup, the capacity of the new instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).
     */
    fileProjectsLocationsInstancesCreate(req: operations.FileProjectsLocationsInstancesCreateRequest, security: operations.FileProjectsLocationsInstancesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsInstancesCreateResponse>;
    /**
     * Lists all instances in a project for either a specified location or for all locations.
     */
    fileProjectsLocationsInstancesList(req: operations.FileProjectsLocationsInstancesListRequest, security: operations.FileProjectsLocationsInstancesListSecurity, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsInstancesListResponse>;
    /**
     * Restores an existing instance's file share from a backup. The capacity of the instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).
     */
    fileProjectsLocationsInstancesRestore(req: operations.FileProjectsLocationsInstancesRestoreRequest, security: operations.FileProjectsLocationsInstancesRestoreSecurity, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsInstancesRestoreResponse>;
    /**
     * Revert an existing instance's file system to a specified snapshot.
     */
    fileProjectsLocationsInstancesRevert(req: operations.FileProjectsLocationsInstancesRevertRequest, security: operations.FileProjectsLocationsInstancesRevertSecurity, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsInstancesRevertResponse>;
    /**
     * Creates a share.
     */
    fileProjectsLocationsInstancesSharesCreate(req: operations.FileProjectsLocationsInstancesSharesCreateRequest, security: operations.FileProjectsLocationsInstancesSharesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsInstancesSharesCreateResponse>;
    /**
     * Lists all shares for a specified instance.
     */
    fileProjectsLocationsInstancesSharesList(req: operations.FileProjectsLocationsInstancesSharesListRequest, security: operations.FileProjectsLocationsInstancesSharesListSecurity, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsInstancesSharesListResponse>;
    /**
     * Creates a snapshot.
     */
    fileProjectsLocationsInstancesSnapshotsCreate(req: operations.FileProjectsLocationsInstancesSnapshotsCreateRequest, security: operations.FileProjectsLocationsInstancesSnapshotsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsInstancesSnapshotsCreateResponse>;
    /**
     * Lists all snapshots in a project for either a specified location or for all locations.
     */
    fileProjectsLocationsInstancesSnapshotsList(req: operations.FileProjectsLocationsInstancesSnapshotsListRequest, security: operations.FileProjectsLocationsInstancesSnapshotsListSecurity, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsInstancesSnapshotsListResponse>;
    /**
     * Updates the settings of a specific snapshot.
     */
    fileProjectsLocationsInstancesSnapshotsPatch(req: operations.FileProjectsLocationsInstancesSnapshotsPatchRequest, security: operations.FileProjectsLocationsInstancesSnapshotsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsInstancesSnapshotsPatchResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    fileProjectsLocationsList(req: operations.FileProjectsLocationsListRequest, security: operations.FileProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsListResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    fileProjectsLocationsOperationsCancel(req: operations.FileProjectsLocationsOperationsCancelRequest, security: operations.FileProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsOperationsCancelResponse>;
    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     */
    fileProjectsLocationsOperationsDelete(req: operations.FileProjectsLocationsOperationsDeleteRequest, security: operations.FileProjectsLocationsOperationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsOperationsDeleteResponse>;
    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     */
    fileProjectsLocationsOperationsGet(req: operations.FileProjectsLocationsOperationsGetRequest, security: operations.FileProjectsLocationsOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsOperationsGetResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    fileProjectsLocationsOperationsList(req: operations.FileProjectsLocationsOperationsListRequest, security: operations.FileProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsOperationsListResponse>;
}
