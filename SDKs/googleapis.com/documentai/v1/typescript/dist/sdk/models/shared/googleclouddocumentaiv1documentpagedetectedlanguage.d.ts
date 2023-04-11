import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Detected language for a structural component.
 */
export declare class GoogleCloudDocumentaiV1DocumentPageDetectedLanguage extends SpeakeasyBase {
    /**
     * Confidence of detected language. Range `[0, 1]`.
     */
    confidence?: number;
    /**
     * The BCP-47 language code, such as `en-US` or `sr-Latn`. For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string;
}
