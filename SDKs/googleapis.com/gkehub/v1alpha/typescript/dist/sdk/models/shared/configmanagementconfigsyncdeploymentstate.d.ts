import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Deployment state of admission-webhook
 */
export declare enum ConfigManagementConfigSyncDeploymentStateAdmissionWebhookEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}
/**
 * Deployment state of the git-sync pod
 */
export declare enum ConfigManagementConfigSyncDeploymentStateGitSyncEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}
/**
 * Deployment state of the importer pod
 */
export declare enum ConfigManagementConfigSyncDeploymentStateImporterEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}
/**
 * Deployment state of the monitor pod
 */
export declare enum ConfigManagementConfigSyncDeploymentStateMonitorEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}
/**
 * Deployment state of reconciler-manager pod
 */
export declare enum ConfigManagementConfigSyncDeploymentStateReconcilerManagerEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}
/**
 * Deployment state of root-reconciler
 */
export declare enum ConfigManagementConfigSyncDeploymentStateRootReconcilerEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}
/**
 * Deployment state of the syncer pod
 */
export declare enum ConfigManagementConfigSyncDeploymentStateSyncerEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}
/**
 * The state of ConfigSync's deployment on a cluster
 */
export declare class ConfigManagementConfigSyncDeploymentState extends SpeakeasyBase {
    /**
     * Deployment state of admission-webhook
     */
    admissionWebhook?: ConfigManagementConfigSyncDeploymentStateAdmissionWebhookEnum;
    /**
     * Deployment state of the git-sync pod
     */
    gitSync?: ConfigManagementConfigSyncDeploymentStateGitSyncEnum;
    /**
     * Deployment state of the importer pod
     */
    importer?: ConfigManagementConfigSyncDeploymentStateImporterEnum;
    /**
     * Deployment state of the monitor pod
     */
    monitor?: ConfigManagementConfigSyncDeploymentStateMonitorEnum;
    /**
     * Deployment state of reconciler-manager pod
     */
    reconcilerManager?: ConfigManagementConfigSyncDeploymentStateReconcilerManagerEnum;
    /**
     * Deployment state of root-reconciler
     */
    rootReconciler?: ConfigManagementConfigSyncDeploymentStateRootReconcilerEnum;
    /**
     * Deployment state of the syncer pod
     */
    syncer?: ConfigManagementConfigSyncDeploymentStateSyncerEnum;
}
