import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Parameters for text detections. This is used to control TEXT_DETECTION and DOCUMENT_TEXT_DETECTION features.
 */
export declare class GoogleCloudVisionV1p1beta1TextDetectionParams extends SpeakeasyBase {
    /**
     * A list of advanced OCR options to fine-tune OCR behavior.
     */
    advancedOcrOptions?: string[];
    /**
     * By default, Cloud Vision API only includes confidence score for DOCUMENT_TEXT_DETECTION result. Set the flag to true to include confidence score for TEXT_DETECTION as well.
     */
    enableTextDetectionConfidenceScore?: boolean;
}
