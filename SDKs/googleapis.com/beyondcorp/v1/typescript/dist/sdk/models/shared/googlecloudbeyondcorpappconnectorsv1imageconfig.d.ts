import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ImageConfig defines the control plane images to run.
 */
export declare class GoogleCloudBeyondcorpAppconnectorsV1ImageConfig extends SpeakeasyBase {
    /**
     * The stable image that the remote agent will fallback to if the target image fails. Format would be a gcr image path, e.g.: gcr.io/PROJECT-ID/my-image:tag1
     */
    stableImage?: string;
    /**
     * The initial image the remote agent will attempt to run for the control plane. Format would be a gcr image path, e.g.: gcr.io/PROJECT-ID/my-image:tag1
     */
    targetImage?: string;
}
