import { SpeakeasyBase } from "../../../internal/utils";
import { DetectedLanguage } from "./detectedlanguage";
/**
 * The response message for language detection.
 */
export declare class DetectLanguageResponse extends SpeakeasyBase {
    /**
     * A list of detected languages sorted by detection confidence in descending order. The most probable language first.
     */
    languages?: DetectedLanguage[];
}
