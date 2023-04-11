import { SpeakeasyBase } from "../../../internal/utils";
export declare class ImageRegionCreateResult extends SpeakeasyBase {
    created?: Date;
    /**
     * Height.
     */
    height: number;
    imageId?: string;
    /**
     * Coordinate of the left boundary.
     */
    left: number;
    regionId?: string;
    /**
     * Id of the tag associated with this region.
     */
    tagId: string;
    tagName?: string;
    /**
     * Coordinate of the top boundary.
     */
    top: number;
    /**
     * Width.
     */
    width: number;
}
