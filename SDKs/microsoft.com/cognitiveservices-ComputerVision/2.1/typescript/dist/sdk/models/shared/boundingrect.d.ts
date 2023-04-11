import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A bounding box for an area inside an image.
 */
export declare class BoundingRect extends SpeakeasyBase {
    /**
     * Height measured from the top-left point of the area, in pixels.
     */
    h?: number;
    /**
     * Width measured from the top-left point of the area, in pixels.
     */
    w?: number;
    /**
     * X-coordinate of the top left point of the area, in pixels.
     */
    x?: number;
    /**
     * Y-coordinate of the top left point of the area, in pixels.
     */
    y?: number;
}
