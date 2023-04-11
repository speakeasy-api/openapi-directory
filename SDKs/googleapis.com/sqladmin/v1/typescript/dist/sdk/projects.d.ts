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
     * Get Disk Shrink Config for a given instance.
     */
    sqlProjectsInstancesGetDiskShrinkConfig(req: operations.SqlProjectsInstancesGetDiskShrinkConfigRequest, security: operations.SqlProjectsInstancesGetDiskShrinkConfigSecurity, config?: AxiosRequestConfig): Promise<operations.SqlProjectsInstancesGetDiskShrinkConfigResponse>;
    /**
     * Perform Disk Shrink on primary instance.
     */
    sqlProjectsInstancesPerformDiskShrink(req: operations.SqlProjectsInstancesPerformDiskShrinkRequest, security: operations.SqlProjectsInstancesPerformDiskShrinkSecurity, config?: AxiosRequestConfig): Promise<operations.SqlProjectsInstancesPerformDiskShrinkResponse>;
    /**
     * Reschedules the maintenance on the given instance.
     */
    sqlProjectsInstancesRescheduleMaintenance(req: operations.SqlProjectsInstancesRescheduleMaintenanceRequest, security: operations.SqlProjectsInstancesRescheduleMaintenanceSecurity, config?: AxiosRequestConfig): Promise<operations.SqlProjectsInstancesRescheduleMaintenanceResponse>;
    /**
     * Reset Replica Size to primary instance disk size.
     */
    sqlProjectsInstancesResetReplicaSize(req: operations.SqlProjectsInstancesResetReplicaSizeRequest, security: operations.SqlProjectsInstancesResetReplicaSizeSecurity, config?: AxiosRequestConfig): Promise<operations.SqlProjectsInstancesResetReplicaSizeResponse>;
    /**
     * Start External primary instance migration.
     */
    sqlProjectsInstancesStartExternalSync(req: operations.SqlProjectsInstancesStartExternalSyncRequest, security: operations.SqlProjectsInstancesStartExternalSyncSecurity, config?: AxiosRequestConfig): Promise<operations.SqlProjectsInstancesStartExternalSyncResponse>;
    /**
     * Verify External primary instance external sync settings.
     */
    sqlProjectsInstancesVerifyExternalSyncSettings(req: operations.SqlProjectsInstancesVerifyExternalSyncSettingsRequest, security: operations.SqlProjectsInstancesVerifyExternalSyncSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.SqlProjectsInstancesVerifyExternalSyncSettingsResponse>;
}
