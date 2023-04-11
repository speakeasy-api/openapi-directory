import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1BoundingPoly } from "./googlecloudvisionv1p2beta1boundingpoly";
import { GoogleCloudVisionV1p2beta1Symbol } from "./googlecloudvisionv1p2beta1symbol";
import { GoogleCloudVisionV1p2beta1TextAnnotationTextProperty } from "./googlecloudvisionv1p2beta1textannotationtextproperty";
/**
 * A word representation.
 */
export declare class GoogleCloudVisionV1p2beta1Word extends SpeakeasyBase {
    /**
     * A bounding polygon for the detected image annotation.
     */
    boundingBox?: GoogleCloudVisionV1p2beta1BoundingPoly;
    /**
     * Confidence of the OCR results for the word. Range [0, 1].
     */
    confidence?: number;
    /**
     * Additional information detected on the structural component.
     */
    property?: GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;
    /**
     * List of symbols in the word. The order of the symbols follows the natural reading order.
     */
    symbols?: GoogleCloudVisionV1p2beta1Symbol[];
}
