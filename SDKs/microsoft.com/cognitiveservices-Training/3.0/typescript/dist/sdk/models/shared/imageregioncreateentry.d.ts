import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Entry associating a region to an image.
 */
export declare class ImageRegionCreateEntry extends SpeakeasyBase {
    /**
     * Height.
     */
    height: number;
    /**
     * Id of the image.
     */
    imageId: string;
    /**
     * Coordinate of the left boundary.
     */
    left: number;
    /**
     * Id of the tag associated with this region.
     */
    tagId: string;
    /**
     * Coordinate of the top boundary.
     */
    top: number;
    /**
     * Width.
     */
    width: number;
}
