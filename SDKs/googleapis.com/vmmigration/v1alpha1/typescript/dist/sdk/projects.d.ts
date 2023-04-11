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
     * Adds a MigratingVm to a Group.
     */
    vmmigrationProjectsLocationsGroupsAddGroupMigration(req: operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest, security: operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationSecurity, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationResponse>;
    /**
     * Creates a new Group in a given project and location.
     */
    vmmigrationProjectsLocationsGroupsCreate(req: operations.VmmigrationProjectsLocationsGroupsCreateRequest, security: operations.VmmigrationProjectsLocationsGroupsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsGroupsCreateResponse>;
    /**
     * Lists Groups in a given project and location.
     */
    vmmigrationProjectsLocationsGroupsList(req: operations.VmmigrationProjectsLocationsGroupsListRequest, security: operations.VmmigrationProjectsLocationsGroupsListSecurity, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsGroupsListResponse>;
    /**
     * Removes a MigratingVm from a Group.
     */
    vmmigrationProjectsLocationsGroupsRemoveGroupMigration(req: operations.VmmigrationProjectsLocationsGroupsRemoveGroupMigrationRequest, security: operations.VmmigrationProjectsLocationsGroupsRemoveGroupMigrationSecurity, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsGroupsRemoveGroupMigrationResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    vmmigrationProjectsLocationsList(req: operations.VmmigrationProjectsLocationsListRequest, security: operations.VmmigrationProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsListResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    vmmigrationProjectsLocationsOperationsList(req: operations.VmmigrationProjectsLocationsOperationsListRequest, security: operations.VmmigrationProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsOperationsListResponse>;
    /**
     * Creates a new Source in a given project and location.
     */
    vmmigrationProjectsLocationsSourcesCreate(req: operations.VmmigrationProjectsLocationsSourcesCreateRequest, security: operations.VmmigrationProjectsLocationsSourcesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesCreateResponse>;
    /**
     * Creates a new DatacenterConnector in a given Source.
     */
    vmmigrationProjectsLocationsSourcesDatacenterConnectorsCreate(req: operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateRequest, security: operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateResponse>;
    /**
     * Lists DatacenterConnectors in a given Source.
     */
    vmmigrationProjectsLocationsSourcesDatacenterConnectorsList(req: operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsListRequest, security: operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsListSecurity, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsListResponse>;
    /**
     * Upgrades the appliance relate to this DatacenterConnector to the in-place updateable version.
     */
    vmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeAppliance(req: operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceRequest, security: operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceSecurity, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceResponse>;
    /**
     * List remote source's inventory of VMs. The remote source is the onprem vCenter (remote in the sense it's not in Compute Engine). The inventory describes the list of existing VMs in that source. Note that this operation lists the VMs on the remote source, as opposed to listing the MigratingVms resources in the vmmigration service.
     */
    vmmigrationProjectsLocationsSourcesFetchInventory(req: operations.VmmigrationProjectsLocationsSourcesFetchInventoryRequest, security: operations.VmmigrationProjectsLocationsSourcesFetchInventorySecurity, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesFetchInventoryResponse>;
    /**
     * Lists Sources in a given project and location.
     */
    vmmigrationProjectsLocationsSourcesList(req: operations.VmmigrationProjectsLocationsSourcesListRequest, security: operations.VmmigrationProjectsLocationsSourcesListSecurity, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesListResponse>;
    /**
     * Initiates a Clone of a specific migrating VM.
     */
    vmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreate(req: operations.VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateRequest, security: operations.VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateResponse>;
    /**
     * Lists CloneJobs of a given migrating VM.
     */
    vmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsList(req: operations.VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListRequest, security: operations.VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListSecurity, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListResponse>;
    /**
     * Creates a new MigratingVm in a given Source.
     */
    vmmigrationProjectsLocationsSourcesMigratingVmsCreate(req: operations.VmmigrationProjectsLocationsSourcesMigratingVmsCreateRequest, security: operations.VmmigrationProjectsLocationsSourcesMigratingVmsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesMigratingVmsCreateResponse>;
    /**
     * Initiates the cancellation of a running cutover job.
     */
    vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancel(req: operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelRequest, security: operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelResponse>;
    /**
     * Initiates a Cutover of a specific migrating VM. The returned LRO is completed when the cutover job resource is created and the job is initiated.
     */
    vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreate(req: operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateRequest, security: operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateResponse>;
    /**
     * Lists CutoverJobs of a given migrating VM.
     */
    vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsList(req: operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListRequest, security: operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListSecurity, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListResponse>;
    /**
     * Marks a migration as completed, deleting migration resources that are no longer being used. Only applicable after cutover is done.
     */
    vmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigration(req: operations.VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationRequest, security: operations.VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationSecurity, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationResponse>;
    /**
     * Lists MigratingVms in a given Source.
     */
    vmmigrationProjectsLocationsSourcesMigratingVmsList(req: operations.VmmigrationProjectsLocationsSourcesMigratingVmsListRequest, security: operations.VmmigrationProjectsLocationsSourcesMigratingVmsListSecurity, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesMigratingVmsListResponse>;
    /**
     * Pauses a migration for a VM. If cycle tasks are running they will be cancelled, preserving source task data. Further replication cycles will not be triggered while the VM is paused.
     */
    vmmigrationProjectsLocationsSourcesMigratingVmsPauseMigration(req: operations.VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest, security: operations.VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationSecurity, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationResponse>;
    /**
     * Lists ReplicationCycles in a given MigratingVM.
     */
    vmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesList(req: operations.VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListRequest, security: operations.VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListSecurity, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListResponse>;
    /**
     * Resumes a migration for a VM. When called on a paused migration, will start the process of uploading data and creating snapshots; when called on a completed cut-over migration, will update the migration to active state and start the process of uploading data and creating snapshots.
     */
    vmmigrationProjectsLocationsSourcesMigratingVmsResumeMigration(req: operations.VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationRequest, security: operations.VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationSecurity, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationResponse>;
    /**
     * Starts migration for a VM. Starts the process of uploading data and creating snapshots, in replication cycles scheduled by the policy.
     */
    vmmigrationProjectsLocationsSourcesMigratingVmsStartMigration(req: operations.VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationRequest, security: operations.VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationSecurity, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationResponse>;
    /**
     * Creates a new UtilizationReport.
     */
    vmmigrationProjectsLocationsSourcesUtilizationReportsCreate(req: operations.VmmigrationProjectsLocationsSourcesUtilizationReportsCreateRequest, security: operations.VmmigrationProjectsLocationsSourcesUtilizationReportsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesUtilizationReportsCreateResponse>;
    /**
     * Lists Utilization Reports of the given Source.
     */
    vmmigrationProjectsLocationsSourcesUtilizationReportsList(req: operations.VmmigrationProjectsLocationsSourcesUtilizationReportsListRequest, security: operations.VmmigrationProjectsLocationsSourcesUtilizationReportsListSecurity, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesUtilizationReportsListResponse>;
    /**
     * Creates a new TargetProject in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
     */
    vmmigrationProjectsLocationsTargetProjectsCreate(req: operations.VmmigrationProjectsLocationsTargetProjectsCreateRequest, security: operations.VmmigrationProjectsLocationsTargetProjectsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsTargetProjectsCreateResponse>;
    /**
     * Deletes a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
     */
    vmmigrationProjectsLocationsTargetProjectsDelete(req: operations.VmmigrationProjectsLocationsTargetProjectsDeleteRequest, security: operations.VmmigrationProjectsLocationsTargetProjectsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsTargetProjectsDeleteResponse>;
    /**
     * Gets details of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
     */
    vmmigrationProjectsLocationsTargetProjectsGet(req: operations.VmmigrationProjectsLocationsTargetProjectsGetRequest, security: operations.VmmigrationProjectsLocationsTargetProjectsGetSecurity, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsTargetProjectsGetResponse>;
    /**
     * Lists TargetProjects in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
     */
    vmmigrationProjectsLocationsTargetProjectsList(req: operations.VmmigrationProjectsLocationsTargetProjectsListRequest, security: operations.VmmigrationProjectsLocationsTargetProjectsListSecurity, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsTargetProjectsListResponse>;
    /**
     * Updates the parameters of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
     */
    vmmigrationProjectsLocationsTargetProjectsPatch(req: operations.VmmigrationProjectsLocationsTargetProjectsPatchRequest, security: operations.VmmigrationProjectsLocationsTargetProjectsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsTargetProjectsPatchResponse>;
}
