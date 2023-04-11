import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1BoundingPoly } from "./googlecloudvisionv1p2beta1boundingpoly";
import { GoogleCloudVisionV1p2beta1TextAnnotationTextProperty } from "./googlecloudvisionv1p2beta1textannotationtextproperty";
/**
 * A single symbol representation.
 */
export declare class GoogleCloudVisionV1p2beta1Symbol extends SpeakeasyBase {
    /**
     * A bounding polygon for the detected image annotation.
     */
    boundingBox?: GoogleCloudVisionV1p2beta1BoundingPoly;
    /**
     * Confidence of the OCR results for the symbol. Range [0, 1].
     */
    confidence?: number;
    /**
     * Additional information detected on the structural component.
     */
    property?: GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;
    /**
     * The actual UTF-8 representation of the symbol.
     */
    text?: string;
}
