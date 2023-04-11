import { SpeakeasyBase } from "../../../internal/utils";
import { TranslateTextGlossaryConfig } from "./translatetextglossaryconfig";
/**
 * The request message for synchronous translation.
 */
export declare class TranslateTextRequest extends SpeakeasyBase {
    /**
     * Required. The content of the input in string format. We recommend the total content be less than 30k codepoints. The max length of this field is 1024. Use BatchTranslateText for larger text.
     */
    contents?: string[];
    /**
     * Configures which glossary should be used for a specific target language, and defines options for applying that glossary.
     */
    glossaryConfig?: TranslateTextGlossaryConfig;
    /**
     * Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/labels for more information.
     */
    labels?: Record<string, string>;
    /**
     * Optional. The format of the source text, for example, "text/html", "text/plain". If left blank, the MIME type defaults to "text/html".
     */
    mimeType?: string;
    /**
     * Optional. The `model` type requested for this translation. The format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, For global (non-regionalized) requests, use `location-id` `global`. For example, `projects/{project-number-or-id}/locations/global/models/general/nmt`. If not provided, the default Google model (NMT) will be used
     */
    model?: string;
    /**
     * Optional. The BCP-47 language code of the input text if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in Language Support. If the source language isn't specified, the API attempts to identify the source language automatically and returns the source language within the response.
     */
    sourceLanguageCode?: string;
    /**
     * Required. The BCP-47 language code to use for translation of the input text, set to one of the language codes listed in Language Support.
     */
    targetLanguageCode?: string;
}
