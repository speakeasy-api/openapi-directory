import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The GCR location where the image must be pushed to.
 */
export declare class GcrDestination extends SpeakeasyBase {
    /**
     * Required. Google Contained Registry URI of the new image, up to 2000 characters long. See https: //cloud.google.com/container-registry/do // cs/pushing-and-pulling#pushing_an_image_to_a_registry Accepted forms: * [HOSTNAME]/[PROJECT-ID]/[IMAGE] * [HOSTNAME]/[PROJECT-ID]/[IMAGE]:[TAG] The requesting user must have permission to push images the project.
     */
    outputUri?: string;
}
