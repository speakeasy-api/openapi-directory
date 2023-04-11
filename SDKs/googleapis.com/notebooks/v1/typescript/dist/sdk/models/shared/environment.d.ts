import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerImage } from "./containerimage";
import { VmImage } from "./vmimage";
/**
 * Definition of a software environment that is used to start a notebook instance.
 */
export declare class Environment extends SpeakeasyBase {
    /**
     * Definition of a container image for starting a notebook instance with the environment installed in a container.
     */
    containerImage?: ContainerImage;
    /**
     * Output only. The time at which this environment was created.
     */
    createTime?: string;
    /**
     * A brief description of this environment.
     */
    description?: string;
    /**
     * Display name of this environment for the UI.
     */
    displayName?: string;
    /**
     * Output only. Name of this environment. Format: `projects/{project_id}/locations/{location}/environments/{environment_id}`
     */
    name?: string;
    /**
     * Path to a Bash script that automatically runs after a notebook instance fully boots up. The path must be a URL or Cloud Storage path. Example: `"gs://path-to-file/file-name"`
     */
    postStartupScript?: string;
    /**
     * Definition of a custom Compute Engine virtual machine image for starting a notebook instance with the environment installed directly on the VM.
     */
    vmImage?: VmImage;
}
/**
 * Definition of a software environment that is used to start a notebook instance.
 */
export declare class EnvironmentInput extends SpeakeasyBase {
    /**
     * Definition of a container image for starting a notebook instance with the environment installed in a container.
     */
    containerImage?: ContainerImage;
    /**
     * A brief description of this environment.
     */
    description?: string;
    /**
     * Display name of this environment for the UI.
     */
    displayName?: string;
    /**
     * Path to a Bash script that automatically runs after a notebook instance fully boots up. The path must be a URL or Cloud Storage path. Example: `"gs://path-to-file/file-name"`
     */
    postStartupScript?: string;
    /**
     * Definition of a custom Compute Engine virtual machine image for starting a notebook instance with the environment installed directly on the VM.
     */
    vmImage?: VmImage;
}
