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
     * Get instance provisioning settings for a given project. This is hidden method used by UI only.
     */
    baremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetch(req: operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchRequest, security: operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchSecurity, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchResponse>;
    /**
     * Create an Instance.
     */
    baremetalsolutionProjectsLocationsInstancesCreate(req: operations.BaremetalsolutionProjectsLocationsInstancesCreateRequest, security: operations.BaremetalsolutionProjectsLocationsInstancesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsInstancesCreateResponse>;
    /**
     * Detach LUN from Instance.
     */
    baremetalsolutionProjectsLocationsInstancesDetachLun(req: operations.BaremetalsolutionProjectsLocationsInstancesDetachLunRequest, security: operations.BaremetalsolutionProjectsLocationsInstancesDetachLunSecurity, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsInstancesDetachLunResponse>;
    /**
     * Disable the interactive serial console feature on an instance.
     */
    baremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsole(req: operations.BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleRequest, security: operations.BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleSecurity, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleResponse>;
    /**
     * Enable the interactive serial console feature on an instance.
     */
    baremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsole(req: operations.BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleRequest, security: operations.BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleSecurity, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleResponse>;
    /**
     * List servers in a given project and location.
     */
    baremetalsolutionProjectsLocationsInstancesList(req: operations.BaremetalsolutionProjectsLocationsInstancesListRequest, security: operations.BaremetalsolutionProjectsLocationsInstancesListSecurity, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsInstancesListResponse>;
    /**
     * Perform an ungraceful, hard reset on a server. Equivalent to shutting the power off and then turning it back on.
     */
    baremetalsolutionProjectsLocationsInstancesReset(req: operations.BaremetalsolutionProjectsLocationsInstancesResetRequest, security: operations.BaremetalsolutionProjectsLocationsInstancesResetSecurity, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsInstancesResetResponse>;
    /**
     * Starts a server that was shutdown.
     */
    baremetalsolutionProjectsLocationsInstancesStart(req: operations.BaremetalsolutionProjectsLocationsInstancesStartRequest, security: operations.BaremetalsolutionProjectsLocationsInstancesStartSecurity, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsInstancesStartResponse>;
    /**
     * Stop a running server.
     */
    baremetalsolutionProjectsLocationsInstancesStop(req: operations.BaremetalsolutionProjectsLocationsInstancesStopRequest, security: operations.BaremetalsolutionProjectsLocationsInstancesStopSecurity, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsInstancesStopResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    baremetalsolutionProjectsLocationsList(req: operations.BaremetalsolutionProjectsLocationsListRequest, security: operations.BaremetalsolutionProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsListResponse>;
    /**
     * List network in a given project and location.
     */
    baremetalsolutionProjectsLocationsNetworksList(req: operations.BaremetalsolutionProjectsLocationsNetworksListRequest, security: operations.BaremetalsolutionProjectsLocationsNetworksListSecurity, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsNetworksListResponse>;
    /**
     * List all Networks (and used IPs for each Network) in the vendor account associated with the specified project.
     */
    baremetalsolutionProjectsLocationsNetworksListNetworkUsage(req: operations.BaremetalsolutionProjectsLocationsNetworksListNetworkUsageRequest, security: operations.BaremetalsolutionProjectsLocationsNetworksListNetworkUsageSecurity, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsNetworksListNetworkUsageResponse>;
    /**
     * Create an NFS share.
     */
    baremetalsolutionProjectsLocationsNfsSharesCreate(req: operations.BaremetalsolutionProjectsLocationsNfsSharesCreateRequest, security: operations.BaremetalsolutionProjectsLocationsNfsSharesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsNfsSharesCreateResponse>;
    /**
     * List NFS shares.
     */
    baremetalsolutionProjectsLocationsNfsSharesList(req: operations.BaremetalsolutionProjectsLocationsNfsSharesListRequest, security: operations.BaremetalsolutionProjectsLocationsNfsSharesListSecurity, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsNfsSharesListResponse>;
    /**
     * Create new ProvisioningConfig.
     */
    baremetalsolutionProjectsLocationsProvisioningConfigsCreate(req: operations.BaremetalsolutionProjectsLocationsProvisioningConfigsCreateRequest, security: operations.BaremetalsolutionProjectsLocationsProvisioningConfigsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsProvisioningConfigsCreateResponse>;
    /**
     * Submit a provisiong configuration for a given project.
     */
    baremetalsolutionProjectsLocationsProvisioningConfigsSubmit(req: operations.BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitRequest, security: operations.BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitSecurity, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitResponse>;
    /**
     * List the budget details to provision resources on a given project.
     */
    baremetalsolutionProjectsLocationsProvisioningQuotasList(req: operations.BaremetalsolutionProjectsLocationsProvisioningQuotasListRequest, security: operations.BaremetalsolutionProjectsLocationsProvisioningQuotasListSecurity, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsProvisioningQuotasListResponse>;
    /**
     * Register a public SSH key in the specified project for use with the interactive serial console feature.
     */
    baremetalsolutionProjectsLocationsSshKeysCreate(req: operations.BaremetalsolutionProjectsLocationsSshKeysCreateRequest, security: operations.BaremetalsolutionProjectsLocationsSshKeysCreateSecurity, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsSshKeysCreateResponse>;
    /**
     * Lists the public SSH keys registered for the specified project. These SSH keys are used only for the interactive serial console feature.
     */
    baremetalsolutionProjectsLocationsSshKeysList(req: operations.BaremetalsolutionProjectsLocationsSshKeysListRequest, security: operations.BaremetalsolutionProjectsLocationsSshKeysListSecurity, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsSshKeysListResponse>;
    /**
     * List storage volumes in a given project and location.
     */
    baremetalsolutionProjectsLocationsVolumesList(req: operations.BaremetalsolutionProjectsLocationsVolumesListRequest, security: operations.BaremetalsolutionProjectsLocationsVolumesListSecurity, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsVolumesListResponse>;
    /**
     * Skips lun's cooloff and deletes it now. Lun must be in cooloff state.
     */
    baremetalsolutionProjectsLocationsVolumesLunsEvict(req: operations.BaremetalsolutionProjectsLocationsVolumesLunsEvictRequest, security: operations.BaremetalsolutionProjectsLocationsVolumesLunsEvictSecurity, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsVolumesLunsEvictResponse>;
    /**
     * List storage volume luns for given storage volume.
     */
    baremetalsolutionProjectsLocationsVolumesLunsList(req: operations.BaremetalsolutionProjectsLocationsVolumesLunsListRequest, security: operations.BaremetalsolutionProjectsLocationsVolumesLunsListSecurity, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsVolumesLunsListResponse>;
    /**
     * Update details of a single storage volume.
     */
    baremetalsolutionProjectsLocationsVolumesPatch(req: operations.BaremetalsolutionProjectsLocationsVolumesPatchRequest, security: operations.BaremetalsolutionProjectsLocationsVolumesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsVolumesPatchResponse>;
    /**
     * RenameVolume sets a new name for a volume. Use with caution, previous names become immediately invalidated.
     */
    baremetalsolutionProjectsLocationsVolumesRename(req: operations.BaremetalsolutionProjectsLocationsVolumesRenameRequest, security: operations.BaremetalsolutionProjectsLocationsVolumesRenameSecurity, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsVolumesRenameResponse>;
    /**
     * Emergency Volume resize.
     */
    baremetalsolutionProjectsLocationsVolumesResize(req: operations.BaremetalsolutionProjectsLocationsVolumesResizeRequest, security: operations.BaremetalsolutionProjectsLocationsVolumesResizeSecurity, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsVolumesResizeResponse>;
    /**
     * Takes a snapshot of a boot volume. Returns INVALID_ARGUMENT if called for a non-boot volume.
     */
    baremetalsolutionProjectsLocationsVolumesSnapshotsCreate(req: operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateRequest, security: operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateResponse>;
    /**
     * Deletes a volume snapshot. Returns INVALID_ARGUMENT if called for a non-boot volume.
     */
    baremetalsolutionProjectsLocationsVolumesSnapshotsDelete(req: operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteRequest, security: operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteResponse>;
    /**
     * Returns the specified snapshot resource. Returns INVALID_ARGUMENT if called for a non-boot volume.
     */
    baremetalsolutionProjectsLocationsVolumesSnapshotsGet(req: operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsGetRequest, security: operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsGetSecurity, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsGetResponse>;
    /**
     * Retrieves the list of snapshots for the specified volume. Returns a response with an empty list of snapshots if called for a non-boot volume.
     */
    baremetalsolutionProjectsLocationsVolumesSnapshotsList(req: operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsListRequest, security: operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsListSecurity, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsListResponse>;
    /**
     * Uses the specified snapshot to restore its parent volume. Returns INVALID_ARGUMENT if called for a non-boot volume.
     */
    baremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshot(req: operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotRequest, security: operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotSecurity, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotResponse>;
}
