import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScoresDetectedDefect } from "./googleclouddocumentaiv1beta3documentpageimagequalityscoresdetecteddefect";
/**
 * Image Quality Scores for the page image
 */
export declare class GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores extends SpeakeasyBase {
    /**
     * A list of detected defects.
     */
    detectedDefects?: GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScoresDetectedDefect[];
    /**
     * The overall quality score. Range `[0, 1]` where 1 is perfect quality.
     */
    qualityScore?: number;
}
