import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigManagementInstallError } from "./configmanagementinstallerror";
/**
 * The state of the Operator's deployment
 */
export declare enum ConfigManagementOperatorStateDeploymentStateEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}
/**
 * State information for an ACM's Operator
 */
export declare class ConfigManagementOperatorState extends SpeakeasyBase {
    /**
     * The state of the Operator's deployment
     */
    deploymentState?: ConfigManagementOperatorStateDeploymentStateEnum;
    /**
     * Install errors.
     */
    errors?: ConfigManagementInstallError[];
    /**
     * The semenatic version number of the operator
     */
    version?: string;
}
