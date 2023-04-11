import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Result of the deployment.
 */
export declare class GoogleCloudDialogflowCxV3DeploymentResult extends SpeakeasyBase {
    /**
     * Results of test cases running before the deployment. Format: `projects//locations//agents//testCases//results/`.
     */
    deploymentTestResults?: string[];
    /**
     * The name of the experiment triggered by this deployment. Format: projects//locations//agents//environments//experiments/.
     */
    experiment?: string;
}
