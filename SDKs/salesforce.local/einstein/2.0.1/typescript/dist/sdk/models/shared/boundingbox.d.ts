import { SpeakeasyBase } from "../../../internal/utils";
export declare class BoundingBox extends SpeakeasyBase {
    /**
     * X-coordinate of the left side of the bounding box. The origin of the coordinate system is the top-left of the image. Number of pixels from the left edge of the image.
     */
    maxX?: number;
    /**
     * Y-coordinate of the top of the bounding box. Number of pixels from the top edge of the image.
     */
    maxY?: number;
    /**
     * X-coordinate of the right side of the bounding box. Number of pixels from the left edge of the image.
     */
    minX?: number;
    /**
     * Y-coordinate of the bottom of the bounding box. Number of pixels from the top edge of the image.
     */
    minY?: number;
}
