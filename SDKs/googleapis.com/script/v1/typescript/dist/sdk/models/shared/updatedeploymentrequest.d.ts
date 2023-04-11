import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentConfig } from "./deploymentconfig";
/**
 * Request with deployment information to update an existing deployment.
 */
export declare class UpdateDeploymentRequest extends SpeakeasyBase {
    /**
     * Metadata the defines how a deployment is configured.
     */
    deploymentConfig?: DeploymentConfig;
}
