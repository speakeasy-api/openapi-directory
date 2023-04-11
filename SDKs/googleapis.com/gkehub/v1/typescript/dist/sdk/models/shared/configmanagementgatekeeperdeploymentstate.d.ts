import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Status of gatekeeper-audit deployment.
 */
export declare enum ConfigManagementGatekeeperDeploymentStateGatekeeperAuditEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}
/**
 * Status of gatekeeper-controller-manager pod.
 */
export declare enum ConfigManagementGatekeeperDeploymentStateGatekeeperControllerManagerStateEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}
/**
 * Status of the pod serving the mutation webhook.
 */
export declare enum ConfigManagementGatekeeperDeploymentStateGatekeeperMutationEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}
/**
 * State of Policy Controller installation.
 */
export declare class ConfigManagementGatekeeperDeploymentState extends SpeakeasyBase {
    /**
     * Status of gatekeeper-audit deployment.
     */
    gatekeeperAudit?: ConfigManagementGatekeeperDeploymentStateGatekeeperAuditEnum;
    /**
     * Status of gatekeeper-controller-manager pod.
     */
    gatekeeperControllerManagerState?: ConfigManagementGatekeeperDeploymentStateGatekeeperControllerManagerStateEnum;
    /**
     * Status of the pod serving the mutation webhook.
     */
    gatekeeperMutation?: ConfigManagementGatekeeperDeploymentStateGatekeeperMutationEnum;
}
