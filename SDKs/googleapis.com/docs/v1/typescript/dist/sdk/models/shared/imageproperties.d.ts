import { SpeakeasyBase } from "../../../internal/utils";
import { CropProperties } from "./cropproperties";
/**
 * The properties of an image.
 */
export declare class ImageProperties extends SpeakeasyBase {
    /**
     * The clockwise rotation angle of the image, in radians.
     */
    angle?: number;
    /**
     * The brightness effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect.
     */
    brightness?: number;
    /**
     * A URI to the image with a default lifetime of 30 minutes. This URI is tagged with the account of the requester. Anyone with the URI effectively accesses the image as the original requester. Access to the image may be lost if the document's sharing settings change.
     */
    contentUri?: string;
    /**
     * The contrast effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect.
     */
    contrast?: number;
    /**
     * The crop properties of an image. The crop rectangle is represented using fractional offsets from the original content's 4 edges. - If the offset is in the interval (0, 1), the corresponding edge of crop rectangle is positioned inside of the image's original bounding rectangle. - If the offset is negative or greater than 1, the corresponding edge of crop rectangle is positioned outside of the image's original bounding rectangle. - If all offsets and rotation angle are 0, the image is not cropped.
     */
    cropProperties?: CropProperties;
    /**
     * The source URI is the URI used to insert the image. The source URI can be empty.
     */
    sourceUri?: string;
    /**
     * The transparency effect of the image. The value should be in the interval [0.0, 1.0], where 0 means no effect and 1 means transparent.
     */
    transparency?: number;
}
