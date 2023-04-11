import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Entry associating a region to an image.
 */
export declare class ImageRegionCreateEntry extends SpeakeasyBase {
    height?: number;
    /**
     * Id of the image.
     */
    imageId?: string;
    left?: number;
    /**
     * Id of the tag associated with this region.
     */
    tagId?: string;
    top?: number;
    width?: number;
}
