import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentPageImageQualityScoresDetectedDefect } from "./googleclouddocumentaiv1documentpageimagequalityscoresdetecteddefect";
/**
 * Image Quality Scores for the page image
 */
export declare class GoogleCloudDocumentaiV1DocumentPageImageQualityScores extends SpeakeasyBase {
    /**
     * A list of detected defects.
     */
    detectedDefects?: GoogleCloudDocumentaiV1DocumentPageImageQualityScoresDetectedDefect[];
    /**
     * The overall quality score. Range `[0, 1]` where 1 is perfect quality.
     */
    qualityScore?: number;
}
