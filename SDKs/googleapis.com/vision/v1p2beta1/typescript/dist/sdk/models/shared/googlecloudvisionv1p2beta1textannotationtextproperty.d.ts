import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak } from "./googlecloudvisionv1p2beta1textannotationdetectedbreak";
import { GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage } from "./googlecloudvisionv1p2beta1textannotationdetectedlanguage";
/**
 * Additional information detected on the structural component.
 */
export declare class GoogleCloudVisionV1p2beta1TextAnnotationTextProperty extends SpeakeasyBase {
    /**
     * Detected start or end of a structural component.
     */
    detectedBreak?: GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak;
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage[];
}
