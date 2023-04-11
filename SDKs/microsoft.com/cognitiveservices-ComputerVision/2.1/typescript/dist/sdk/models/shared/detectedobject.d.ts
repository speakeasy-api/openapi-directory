import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingRect } from "./boundingrect";
import { ObjectHierarchy } from "./objecthierarchy";
/**
 * An object detected in an image.
 */
export declare class DetectedObject extends SpeakeasyBase {
    /**
     * Confidence score of having observed the object in the image, as a value ranging from 0 to 1.
     */
    confidence?: number;
    /**
     * Label for the object.
     */
    object?: string;
    /**
     * An object detected inside an image.
     */
    parent?: ObjectHierarchy;
    /**
     * A bounding box for an area inside an image.
     */
    rectangle?: BoundingRect;
}
