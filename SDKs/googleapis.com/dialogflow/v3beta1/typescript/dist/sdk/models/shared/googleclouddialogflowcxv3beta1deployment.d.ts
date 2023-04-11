import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1DeploymentResult } from "./googleclouddialogflowcxv3beta1deploymentresult";
/**
 * The current state of the deployment.
 */
export declare enum GoogleCloudDialogflowCxV3beta1DeploymentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}
/**
 * Represents a deployment in an environment. A deployment happens when a flow version configured to be active in the environment. You can configure running pre-deployment steps, e.g. running validation test cases, experiment auto-rollout, etc.
 */
export declare class GoogleCloudDialogflowCxV3beta1Deployment extends SpeakeasyBase {
    /**
     * End time of this deployment.
     */
    endTime?: string;
    /**
     * The name of the flow version for this deployment. Format: projects//locations//agents//flows//versions/.
     */
    flowVersion?: string;
    /**
     * The name of the deployment. Format: projects//locations//agents//environments//deployments/.
     */
    name?: string;
    /**
     * Result of the deployment.
     */
    result?: GoogleCloudDialogflowCxV3beta1DeploymentResult;
    /**
     * Start time of this deployment.
     */
    startTime?: string;
    /**
     * The current state of the deployment.
     */
    state?: GoogleCloudDialogflowCxV3beta1DeploymentStateEnum;
}
