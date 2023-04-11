import { SpeakeasyBase } from "../../../internal/utils";
import { TranslateTextGlossaryConfig } from "./translatetextglossaryconfig";
/**
 * A single translation response.
 */
export declare class Translation extends SpeakeasyBase {
    /**
     * The ISO-639 language code of source text in the initial request, detected automatically, if no source language was passed within the initial request. If the source language was passed, auto-detection of the language does not occur and this field is empty.
     */
    detectedLanguageCode?: string;
    /**
     * Configures which glossary is used for a specific target language and defines options for applying that glossary.
     */
    glossaryConfig?: TranslateTextGlossaryConfig;
    /**
     * Only present when `model` is present in the request. `model` here is normalized to have project number. For example: If the `model` requested in TranslationTextRequest is `projects/{project-id}/locations/{location-id}/models/general/nmt` then `model` here would be normalized to `projects/{project-number}/locations/{location-id}/models/general/nmt`.
     */
    model?: string;
    /**
     * Text translated into the target language. If an error occurs during translation, this field might be excluded from the response.
     */
    translatedText?: string;
}
