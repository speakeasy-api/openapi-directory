import { SpeakeasyBase } from "../../../internal/utils";
import { DetectedLanguage } from "./detectedlanguage";
/**
 * The response message for language detection.
 */
export declare class DetectLanguageResponse extends SpeakeasyBase {
    /**
     * The most probable language detected by the Translation API. For each request, the Translation API will always return only one result.
     */
    languages?: DetectedLanguage[];
}
