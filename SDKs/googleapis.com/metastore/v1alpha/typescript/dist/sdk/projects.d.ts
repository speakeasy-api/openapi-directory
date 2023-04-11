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
     * Creates a metastore federation in a project and location.
     */
    metastoreProjectsLocationsFederationsCreate(req: operations.MetastoreProjectsLocationsFederationsCreateRequest, security: operations.MetastoreProjectsLocationsFederationsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsFederationsCreateResponse>;
    /**
     * Lists federations in a project and location.
     */
    metastoreProjectsLocationsFederationsList(req: operations.MetastoreProjectsLocationsFederationsListRequest, security: operations.MetastoreProjectsLocationsFederationsListSecurity, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsFederationsListResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    metastoreProjectsLocationsList(req: operations.MetastoreProjectsLocationsListRequest, security: operations.MetastoreProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsListResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
     */
    metastoreProjectsLocationsOperationsCancel(req: operations.MetastoreProjectsLocationsOperationsCancelRequest, security: operations.MetastoreProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsOperationsCancelResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
     */
    metastoreProjectsLocationsOperationsList(req: operations.MetastoreProjectsLocationsOperationsListRequest, security: operations.MetastoreProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsOperationsListResponse>;
    /**
     * Alter metadata resource location. The metadata resource can be a database, table, or partition. This functionality only updates the parent directory for the respective metadata resource and does not transfer any existing data to the new location.
     */
    metastoreProjectsLocationsServicesAlterLocation(req: operations.MetastoreProjectsLocationsServicesAlterLocationRequest, security: operations.MetastoreProjectsLocationsServicesAlterLocationSecurity, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsServicesAlterLocationResponse>;
    /**
     * Creates a new backup in a given project and location.
     */
    metastoreProjectsLocationsServicesBackupsCreate(req: operations.MetastoreProjectsLocationsServicesBackupsCreateRequest, security: operations.MetastoreProjectsLocationsServicesBackupsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsServicesBackupsCreateResponse>;
    /**
     * Deletes a single backup.
     */
    metastoreProjectsLocationsServicesBackupsDelete(req: operations.MetastoreProjectsLocationsServicesBackupsDeleteRequest, security: operations.MetastoreProjectsLocationsServicesBackupsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsServicesBackupsDeleteResponse>;
    /**
     * Lists backups in a service.
     */
    metastoreProjectsLocationsServicesBackupsList(req: operations.MetastoreProjectsLocationsServicesBackupsListRequest, security: operations.MetastoreProjectsLocationsServicesBackupsListSecurity, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsServicesBackupsListResponse>;
    /**
     * Creates a metastore service in a project and location.
     */
    metastoreProjectsLocationsServicesCreate(req: operations.MetastoreProjectsLocationsServicesCreateRequest, security: operations.MetastoreProjectsLocationsServicesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsServicesCreateResponse>;
    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     */
    metastoreProjectsLocationsServicesDatabasesTablesGetIamPolicy(req: operations.MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyRequest, security: operations.MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     */
    metastoreProjectsLocationsServicesDatabasesTablesSetIamPolicy(req: operations.MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyRequest, security: operations.MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     */
    metastoreProjectsLocationsServicesDatabasesTablesTestIamPermissions(req: operations.MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsRequest, security: operations.MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsResponse>;
    /**
     * Exports metadata from a service.
     */
    metastoreProjectsLocationsServicesExportMetadata(req: operations.MetastoreProjectsLocationsServicesExportMetadataRequest, security: operations.MetastoreProjectsLocationsServicesExportMetadataSecurity, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsServicesExportMetadataResponse>;
    /**
     * Lists services in a project and location.
     */
    metastoreProjectsLocationsServicesList(req: operations.MetastoreProjectsLocationsServicesListRequest, security: operations.MetastoreProjectsLocationsServicesListSecurity, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsServicesListResponse>;
    /**
     * Creates a new MetadataImport in a given project and location.
     */
    metastoreProjectsLocationsServicesMetadataImportsCreate(req: operations.MetastoreProjectsLocationsServicesMetadataImportsCreateRequest, security: operations.MetastoreProjectsLocationsServicesMetadataImportsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsServicesMetadataImportsCreateResponse>;
    /**
     * Gets details of a single import.
     */
    metastoreProjectsLocationsServicesMetadataImportsGet(req: operations.MetastoreProjectsLocationsServicesMetadataImportsGetRequest, security: operations.MetastoreProjectsLocationsServicesMetadataImportsGetSecurity, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsServicesMetadataImportsGetResponse>;
    /**
     * Lists imports in a service.
     */
    metastoreProjectsLocationsServicesMetadataImportsList(req: operations.MetastoreProjectsLocationsServicesMetadataImportsListRequest, security: operations.MetastoreProjectsLocationsServicesMetadataImportsListSecurity, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsServicesMetadataImportsListResponse>;
    /**
     * Updates a single import. Only the description field of MetadataImport is supported to be updated.
     */
    metastoreProjectsLocationsServicesMetadataImportsPatch(req: operations.MetastoreProjectsLocationsServicesMetadataImportsPatchRequest, security: operations.MetastoreProjectsLocationsServicesMetadataImportsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsServicesMetadataImportsPatchResponse>;
    /**
     * Move a table to another database.
     */
    metastoreProjectsLocationsServicesMoveTableToDatabase(req: operations.MetastoreProjectsLocationsServicesMoveTableToDatabaseRequest, security: operations.MetastoreProjectsLocationsServicesMoveTableToDatabaseSecurity, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsServicesMoveTableToDatabaseResponse>;
    /**
     * Query DPMS metadata.
     */
    metastoreProjectsLocationsServicesQueryMetadata(req: operations.MetastoreProjectsLocationsServicesQueryMetadataRequest, security: operations.MetastoreProjectsLocationsServicesQueryMetadataSecurity, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsServicesQueryMetadataResponse>;
    /**
     * Removes the attached IAM policies for a resource
     */
    metastoreProjectsLocationsServicesRemoveIamPolicy(req: operations.MetastoreProjectsLocationsServicesRemoveIamPolicyRequest, security: operations.MetastoreProjectsLocationsServicesRemoveIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsServicesRemoveIamPolicyResponse>;
    /**
     * Restores a service from a backup.
     */
    metastoreProjectsLocationsServicesRestore(req: operations.MetastoreProjectsLocationsServicesRestoreRequest, security: operations.MetastoreProjectsLocationsServicesRestoreSecurity, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsServicesRestoreResponse>;
}
