import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The response message for language detection.
 */
export declare class DetectedLanguage extends SpeakeasyBase {
    /**
     * The confidence of the detection result for this language.
     */
    confidence?: number;
    /**
     * The BCP-47 language code of source content in the request, detected automatically.
     */
    languageCode?: string;
}
