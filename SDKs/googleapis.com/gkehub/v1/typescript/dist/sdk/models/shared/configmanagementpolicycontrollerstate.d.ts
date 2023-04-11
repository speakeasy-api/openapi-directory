import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigManagementGatekeeperDeploymentState } from "./configmanagementgatekeeperdeploymentstate";
import { ConfigManagementPolicyControllerMigration } from "./configmanagementpolicycontrollermigration";
import { ConfigManagementPolicyControllerVersion } from "./configmanagementpolicycontrollerversion";
/**
 * State for PolicyControllerState.
 */
export declare class ConfigManagementPolicyControllerState extends SpeakeasyBase {
    /**
     * State of Policy Controller installation.
     */
    deploymentState?: ConfigManagementGatekeeperDeploymentState;
    /**
     * State for the migration of PolicyController from ACM -> PoCo Hub.
     */
    migration?: ConfigManagementPolicyControllerMigration;
    /**
     * The build version of Gatekeeper Policy Controller is using.
     */
    version?: ConfigManagementPolicyControllerVersion;
}
