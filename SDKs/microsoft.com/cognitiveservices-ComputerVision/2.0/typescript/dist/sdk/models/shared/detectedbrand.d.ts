import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingRect } from "./boundingrect";
/**
 * A brand detected in an image.
 */
export declare class DetectedBrand extends SpeakeasyBase {
    /**
     * Confidence score of having observed the brand in the image, as a value ranging from 0 to 1.
     */
    confidence?: number;
    /**
     * Label for the brand.
     */
    name?: string;
    /**
     * A bounding box for an area inside an image.
     */
    rectangle?: BoundingRect;
}
