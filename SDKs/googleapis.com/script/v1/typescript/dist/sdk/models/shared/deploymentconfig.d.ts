import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metadata the defines how a deployment is configured.
 */
export declare class DeploymentConfig extends SpeakeasyBase {
    /**
     * The description for this deployment.
     */
    description?: string;
    /**
     * The manifest file name for this deployment.
     */
    manifestFileName?: string;
    /**
     * The script project's Drive ID.
     */
    scriptId?: string;
    /**
     * The version number on which this deployment is based.
     */
    versionNumber?: number;
}
