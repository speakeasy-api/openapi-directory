import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The deployment state for Hierarchy Controller extension (e.g. v0.7.0-hc.1)
 */
export declare enum ConfigManagementHierarchyControllerDeploymentStateExtensionEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}
/**
 * The deployment state for open source HNC (e.g. v0.7.0-hc.0)
 */
export declare enum ConfigManagementHierarchyControllerDeploymentStateHncEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}
/**
 * Deployment state for Hierarchy Controller
 */
export declare class ConfigManagementHierarchyControllerDeploymentState extends SpeakeasyBase {
    /**
     * The deployment state for Hierarchy Controller extension (e.g. v0.7.0-hc.1)
     */
    extension?: ConfigManagementHierarchyControllerDeploymentStateExtensionEnum;
    /**
     * The deployment state for open source HNC (e.g. v0.7.0-hc.0)
     */
    hnc?: ConfigManagementHierarchyControllerDeploymentStateHncEnum;
}
