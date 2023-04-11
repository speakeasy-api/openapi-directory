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
     * Creates an app profile within an instance.
     */
    bigtableadminProjectsInstancesAppProfilesCreate(req: operations.BigtableadminProjectsInstancesAppProfilesCreateRequest, security: operations.BigtableadminProjectsInstancesAppProfilesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesAppProfilesCreateResponse>;
    /**
     * Lists information about app profiles in an instance.
     */
    bigtableadminProjectsInstancesAppProfilesList(req: operations.BigtableadminProjectsInstancesAppProfilesListRequest, security: operations.BigtableadminProjectsInstancesAppProfilesListSecurity, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesAppProfilesListResponse>;
    /**
     * Copy a Cloud Bigtable backup to a new backup in the destination cluster located in the destination instance and project.
     */
    bigtableadminProjectsInstancesClustersBackupsCopy(req: operations.BigtableadminProjectsInstancesClustersBackupsCopyRequest, security: operations.BigtableadminProjectsInstancesClustersBackupsCopySecurity, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesClustersBackupsCopyResponse>;
    /**
     * Starts creating a new Cloud Bigtable Backup. The returned backup long-running operation can be used to track creation of the backup. The metadata field type is CreateBackupMetadata. The response field type is Backup, if successful. Cancelling the returned operation will stop the creation and delete the backup.
     */
    bigtableadminProjectsInstancesClustersBackupsCreate(req: operations.BigtableadminProjectsInstancesClustersBackupsCreateRequest, security: operations.BigtableadminProjectsInstancesClustersBackupsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesClustersBackupsCreateResponse>;
    /**
     * Lists Cloud Bigtable backups. Returns both completed and pending backups.
     */
    bigtableadminProjectsInstancesClustersBackupsList(req: operations.BigtableadminProjectsInstancesClustersBackupsListRequest, security: operations.BigtableadminProjectsInstancesClustersBackupsListSecurity, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesClustersBackupsListResponse>;
    /**
     * Creates a cluster within an instance. Note that exactly one of Cluster.serve_nodes and Cluster.cluster_config.cluster_autoscaling_config can be set. If serve_nodes is set to non-zero, then the cluster is manually scaled. If cluster_config.cluster_autoscaling_config is non-empty, then autoscaling is enabled.
     */
    bigtableadminProjectsInstancesClustersCreate(req: operations.BigtableadminProjectsInstancesClustersCreateRequest, security: operations.BigtableadminProjectsInstancesClustersCreateSecurity, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesClustersCreateResponse>;
    /**
     * Lists hot tablets in a cluster, within the time range provided. Hot tablets are ordered based on CPU usage.
     */
    bigtableadminProjectsInstancesClustersHotTabletsList(req: operations.BigtableadminProjectsInstancesClustersHotTabletsListRequest, security: operations.BigtableadminProjectsInstancesClustersHotTabletsListSecurity, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesClustersHotTabletsListResponse>;
    /**
     * Lists information about clusters in an instance.
     */
    bigtableadminProjectsInstancesClustersList(req: operations.BigtableadminProjectsInstancesClustersListRequest, security: operations.BigtableadminProjectsInstancesClustersListSecurity, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesClustersListResponse>;
    /**
     * Updates a cluster within an instance. Note that UpdateCluster does not support updating cluster_config.cluster_autoscaling_config. In order to update it, you must use PartialUpdateCluster.
     */
    bigtableadminProjectsInstancesClustersUpdate(req: operations.BigtableadminProjectsInstancesClustersUpdateRequest, security: operations.BigtableadminProjectsInstancesClustersUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesClustersUpdateResponse>;
    /**
     * Create an instance within a project. Note that exactly one of Cluster.serve_nodes and Cluster.cluster_config.cluster_autoscaling_config can be set. If serve_nodes is set to non-zero, then the cluster is manually scaled. If cluster_config.cluster_autoscaling_config is non-empty, then autoscaling is enabled.
     */
    bigtableadminProjectsInstancesCreate(req: operations.BigtableadminProjectsInstancesCreateRequest, security: operations.BigtableadminProjectsInstancesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesCreateResponse>;
    /**
     * Lists information about instances in a project.
     */
    bigtableadminProjectsInstancesList(req: operations.BigtableadminProjectsInstancesListRequest, security: operations.BigtableadminProjectsInstancesListSecurity, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesListResponse>;
    /**
     * Checks replication consistency based on a consistency token, that is, if replication has caught up based on the conditions specified in the token and the check request.
     */
    bigtableadminProjectsInstancesTablesCheckConsistency(req: operations.BigtableadminProjectsInstancesTablesCheckConsistencyRequest, security: operations.BigtableadminProjectsInstancesTablesCheckConsistencySecurity, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesTablesCheckConsistencyResponse>;
    /**
     * Creates a new table in the specified instance. The table can be created with a full set of initial column families, specified in the request.
     */
    bigtableadminProjectsInstancesTablesCreate(req: operations.BigtableadminProjectsInstancesTablesCreateRequest, security: operations.BigtableadminProjectsInstancesTablesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesTablesCreateResponse>;
    /**
     * Permanently deletes a specified table and all of its data.
     */
    bigtableadminProjectsInstancesTablesDelete(req: operations.BigtableadminProjectsInstancesTablesDeleteRequest, security: operations.BigtableadminProjectsInstancesTablesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesTablesDeleteResponse>;
    /**
     * Permanently drop/delete a row range from a specified table. The request can specify whether to delete all rows in a table, or only those that match a particular prefix.
     */
    bigtableadminProjectsInstancesTablesDropRowRange(req: operations.BigtableadminProjectsInstancesTablesDropRowRangeRequest, security: operations.BigtableadminProjectsInstancesTablesDropRowRangeSecurity, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesTablesDropRowRangeResponse>;
    /**
     * Generates a consistency token for a Table, which can be used in CheckConsistency to check whether mutations to the table that finished before this call started have been replicated. The tokens will be available for 90 days.
     */
    bigtableadminProjectsInstancesTablesGenerateConsistencyToken(req: operations.BigtableadminProjectsInstancesTablesGenerateConsistencyTokenRequest, security: operations.BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurity, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesTablesGenerateConsistencyTokenResponse>;
    /**
     * Gets the access control policy for a Table resource. Returns an empty policy if the resource exists but does not have a policy set.
     */
    bigtableadminProjectsInstancesTablesGetIamPolicy(req: operations.BigtableadminProjectsInstancesTablesGetIamPolicyRequest, security: operations.BigtableadminProjectsInstancesTablesGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesTablesGetIamPolicyResponse>;
    /**
     * Lists all tables served from a specified instance.
     */
    bigtableadminProjectsInstancesTablesList(req: operations.BigtableadminProjectsInstancesTablesListRequest, security: operations.BigtableadminProjectsInstancesTablesListSecurity, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesTablesListResponse>;
    /**
     * Performs a series of column family modifications on the specified table. Either all or none of the modifications will occur before this method returns, but data requests received prior to that point may see a table where only some modifications have taken effect.
     */
    bigtableadminProjectsInstancesTablesModifyColumnFamilies(req: operations.BigtableadminProjectsInstancesTablesModifyColumnFamiliesRequest, security: operations.BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurity, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesTablesModifyColumnFamiliesResponse>;
    /**
     * Updates a specified table.
     */
    bigtableadminProjectsInstancesTablesPatch(req: operations.BigtableadminProjectsInstancesTablesPatchRequest, security: operations.BigtableadminProjectsInstancesTablesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesTablesPatchResponse>;
    /**
     * Create a new table by restoring from a completed backup. The returned table long-running operation can be used to track the progress of the operation, and to cancel it. The metadata field type is RestoreTableMetadata. The response type is Table, if successful.
     */
    bigtableadminProjectsInstancesTablesRestore(req: operations.BigtableadminProjectsInstancesTablesRestoreRequest, security: operations.BigtableadminProjectsInstancesTablesRestoreSecurity, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesTablesRestoreResponse>;
    /**
     * Sets the access control policy on a Table resource. Replaces any existing policy.
     */
    bigtableadminProjectsInstancesTablesSetIamPolicy(req: operations.BigtableadminProjectsInstancesTablesSetIamPolicyRequest, security: operations.BigtableadminProjectsInstancesTablesSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesTablesSetIamPolicyResponse>;
    /**
     * Returns permissions that the caller has on the specified table resource.
     */
    bigtableadminProjectsInstancesTablesTestIamPermissions(req: operations.BigtableadminProjectsInstancesTablesTestIamPermissionsRequest, security: operations.BigtableadminProjectsInstancesTablesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesTablesTestIamPermissionsResponse>;
    /**
     * Restores a specified table which was accidentally deleted.
     */
    bigtableadminProjectsInstancesTablesUndelete(req: operations.BigtableadminProjectsInstancesTablesUndeleteRequest, security: operations.BigtableadminProjectsInstancesTablesUndeleteSecurity, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesTablesUndeleteResponse>;
    /**
     * Gets information about a location.
     */
    bigtableadminProjectsLocationsGet(req: operations.BigtableadminProjectsLocationsGetRequest, security: operations.BigtableadminProjectsLocationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsLocationsGetResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    bigtableadminProjectsLocationsList(req: operations.BigtableadminProjectsLocationsListRequest, security: operations.BigtableadminProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsLocationsListResponse>;
}
