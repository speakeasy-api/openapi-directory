import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Bounding box that defines a region of an image.
 */
export declare class BoundingBox extends SpeakeasyBase {
    /**
     * Height.
     */
    height: number;
    /**
     * Coordinate of the left boundary.
     */
    left: number;
    /**
     * Coordinate of the top boundary.
     */
    top: number;
    /**
     * Width.
     */
    width: number;
}
