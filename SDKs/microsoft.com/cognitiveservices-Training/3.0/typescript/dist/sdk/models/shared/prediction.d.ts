import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingBox } from "./boundingbox";
/**
 * Prediction result.
 */
export declare class Prediction extends SpeakeasyBase {
    /**
     * Bounding box that defines a region of an image.
     */
    boundingBox?: BoundingBox;
    /**
     * Probability of the tag.
     */
    probability?: number;
    /**
     * Id of the predicted tag.
     */
    tagId?: string;
    /**
     * Name of the predicted tag.
     */
    tagName?: string;
}
