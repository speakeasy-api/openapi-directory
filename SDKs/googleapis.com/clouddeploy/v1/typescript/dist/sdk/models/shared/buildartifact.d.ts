import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Description of an a image to use during Skaffold rendering.
 */
export declare class BuildArtifact extends SpeakeasyBase {
    /**
     * Image name in Skaffold configuration.
     */
    image?: string;
    /**
     * Image tag to use. This will generally be the full path to an image, such as "gcr.io/my-project/busybox:1.2.3" or "gcr.io/my-project/busybox@sha256:abc123".
     */
    tag?: string;
}
