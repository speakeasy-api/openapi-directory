import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigManagementConfigSyncDeploymentState } from "./configmanagementconfigsyncdeploymentstate";
import { ConfigManagementConfigSyncVersion } from "./configmanagementconfigsyncversion";
import { ConfigManagementSyncState } from "./configmanagementsyncstate";
/**
 * State information for ConfigSync
 */
export declare class ConfigManagementConfigSyncState extends SpeakeasyBase {
    /**
     * The state of ConfigSync's deployment on a cluster
     */
    deploymentState?: ConfigManagementConfigSyncDeploymentState;
    /**
     * State indicating an ACM's progress syncing configurations to a cluster
     */
    syncState?: ConfigManagementSyncState;
    /**
     * Specific versioning information pertaining to ConfigSync's Pods
     */
    version?: ConfigManagementConfigSyncVersion;
}
