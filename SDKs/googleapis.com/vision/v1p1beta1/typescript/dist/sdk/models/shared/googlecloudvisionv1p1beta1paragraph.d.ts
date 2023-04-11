import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1BoundingPoly } from "./googlecloudvisionv1p1beta1boundingpoly";
import { GoogleCloudVisionV1p1beta1TextAnnotationTextProperty } from "./googlecloudvisionv1p1beta1textannotationtextproperty";
import { GoogleCloudVisionV1p1beta1Word } from "./googlecloudvisionv1p1beta1word";
/**
 * Structural unit of text representing a number of words in certain order.
 */
export declare class GoogleCloudVisionV1p1beta1Paragraph extends SpeakeasyBase {
    /**
     * A bounding polygon for the detected image annotation.
     */
    boundingBox?: GoogleCloudVisionV1p1beta1BoundingPoly;
    /**
     * Confidence of the OCR results for the paragraph. Range [0, 1].
     */
    confidence?: number;
    /**
     * Additional information detected on the structural component.
     */
    property?: GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;
    /**
     * List of all words in this paragraph.
     */
    words?: GoogleCloudVisionV1p1beta1Word[];
}
