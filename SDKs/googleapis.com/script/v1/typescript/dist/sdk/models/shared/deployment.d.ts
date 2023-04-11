import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentConfig } from "./deploymentconfig";
import { EntryPoint } from "./entrypoint";
/**
 * Representation of a single script deployment.
 */
export declare class Deployment extends SpeakeasyBase {
    /**
     * Metadata the defines how a deployment is configured.
     */
    deploymentConfig?: DeploymentConfig;
    /**
     * The deployment ID for this deployment.
     */
    deploymentId?: string;
    /**
     * The deployment's entry points.
     */
    entryPoints?: EntryPoint[];
    /**
     * Last modified date time stamp.
     */
    updateTime?: string;
}
