import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object detected inside an image.
 */
export declare class ObjectHierarchy extends SpeakeasyBase {
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
}
