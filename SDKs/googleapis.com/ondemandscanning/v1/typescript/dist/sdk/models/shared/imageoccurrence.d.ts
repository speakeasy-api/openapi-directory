import { SpeakeasyBase } from "../../../internal/utils";
import { Fingerprint } from "./fingerprint";
import { Layer } from "./layer";
/**
 * Details of the derived image portion of the DockerImage relationship. This image would be produced from a Dockerfile with FROM .
 */
export declare class ImageOccurrence extends SpeakeasyBase {
    /**
     * Output only. This contains the base image URL for the derived image occurrence.
     */
    baseResourceUrl?: string;
    /**
     * Output only. The number of layers by which this image differs from the associated image basis.
     */
    distance?: number;
    /**
     * A set of properties that uniquely identify a given Docker image.
     */
    fingerprint?: Fingerprint;
    /**
     * This contains layer-specific metadata, if populated it has length "distance" and is ordered with [distance] being the layer immediately following the base image and [1] being the final layer.
     */
    layerInfo?: Layer[];
}
