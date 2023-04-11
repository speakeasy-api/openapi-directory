import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image.
 */
export declare class GoogleCloudVisionV1p2beta1Position extends SpeakeasyBase {
    /**
     * X coordinate.
     */
    x?: number;
    /**
     * Y coordinate.
     */
    y?: number;
    /**
     * Z coordinate (or depth).
     */
    z?: number;
}
