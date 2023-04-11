import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Definition of a container image for starting a notebook instance with the environment installed in a container.
 */
export declare class ContainerImage extends SpeakeasyBase {
    /**
     * Required. The path to the container image repository. For example: `gcr.io/{project_id}/{image_name}`
     */
    repository?: string;
    /**
     * The tag of the container image. If not specified, this defaults to the latest tag.
     */
    tag?: string;
}
