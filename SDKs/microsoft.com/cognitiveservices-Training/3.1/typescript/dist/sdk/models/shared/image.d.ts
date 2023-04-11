import { SpeakeasyBase } from "../../../internal/utils";
import { ImageRegion } from "./imageregion";
import { ImageTag } from "./imagetag";
/**
 * Image model to be sent as JSON.
 */
export declare class Image extends SpeakeasyBase {
    /**
     * Date the image was created.
     */
    created?: Date;
    /**
     * Height of the image.
     */
    height?: number;
    /**
     * Id of the image.
     */
    id?: string;
    /**
     * The URI to the original uploaded image.
     */
    originalImageUri?: string;
    /**
     * Regions associated with this image.
     */
    regions?: ImageRegion[];
    /**
     * The URI to the (resized) image used for training.
     */
    resizedImageUri?: string;
    /**
     * Tags associated with this image.
     */
    tags?: ImageTag[];
    /**
     * The URI to the thumbnail of the original image.
     */
    thumbnailUri?: string;
    /**
     * Width of the image.
     */
    width?: number;
}
