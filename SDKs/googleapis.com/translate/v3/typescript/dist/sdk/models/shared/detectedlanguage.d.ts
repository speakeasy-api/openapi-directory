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
     * The ISO-639 language code of the source content in the request, detected automatically.
     */
    languageCode?: string;
}
