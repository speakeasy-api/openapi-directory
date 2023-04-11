import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefect } from "./googleclouddocumentaiv1beta2documentpageimagequalityscoresdetecteddefect";
/**
 * Image Quality Scores for the page image
 */
export declare class GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores extends SpeakeasyBase {
    /**
     * A list of detected defects.
     */
    detectedDefects?: GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefect[];
    /**
     * The overall quality score. Range `[0, 1]` where 1 is perfect quality.
     */
    qualityScore?: number;
}
