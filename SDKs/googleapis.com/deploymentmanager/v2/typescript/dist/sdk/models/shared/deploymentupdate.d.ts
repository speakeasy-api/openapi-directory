import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentUpdateLabelEntry } from "./deploymentupdatelabelentry";
export declare class DeploymentUpdate extends SpeakeasyBase {
    /**
     * Output only. An optional user-provided description of the deployment after the current update has been applied.
     */
    description?: string;
    /**
     * Map of One Platform labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`.
     */
    labels?: DeploymentUpdateLabelEntry[];
    /**
     * Output only. URL of the manifest representing the update configuration of this deployment.
     */
    manifest?: string;
}
