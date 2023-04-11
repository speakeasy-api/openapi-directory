import { SpeakeasyBase } from "../../../internal/utils";
import { BatchDocumentInputConfig } from "./batchdocumentinputconfig";
import { BatchDocumentOutputConfig } from "./batchdocumentoutputconfig";
import { TranslateTextGlossaryConfig } from "./translatetextglossaryconfig";
/**
 * The BatchTranslateDocument request.
 */
export declare class BatchTranslateDocumentRequest extends SpeakeasyBase {
    /**
     * Optional. This flag is to support user customized attribution. If not provided, the default is `Machine Translated by Google`. Customized attribution should follow rules in https://cloud.google.com/translate/attribution#attribution_and_logos
     */
    customizedAttribution?: string;
    /**
     * Optional. If true, use the text removal server to remove the shadow text on background image for native pdf translation. Shadow removal feature can only be enabled when is_translate_native_pdf_only: false && pdf_native_only: false
     */
    enableShadowRemovalNativePdf?: boolean;
    /**
     * Optional.
     */
    formatConversions?: Record<string, string>;
    /**
     * Optional. Glossaries to be applied. It's keyed by target language code.
     */
    glossaries?: Record<string, TranslateTextGlossaryConfig>;
    /**
     * Required. Input configurations. The total number of files matched should be <= 100. The total content size to translate should be <= 100M Unicode codepoints. The files must use UTF-8 encoding.
     */
    inputConfigs?: BatchDocumentInputConfig[];
    /**
     * Optional. The models to use for translation. Map's key is target language code. Map's value is the model name. Value can be a built-in general model, or an AutoML Translation model. The value format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, If the map is empty or a specific model is not requested for a language pair, then default google model (nmt) is used.
     */
    models?: Record<string, string>;
    /**
     * Output configuration for BatchTranslateDocument request.
     */
    outputConfig?: BatchDocumentOutputConfig;
    /**
     * Required. The BCP-47 language code of the input document if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in [Language Support](https://cloud.google.com/translate/docs/languages).
     */
    sourceLanguageCode?: string;
    /**
     * Required. The BCP-47 language code to use for translation of the input document. Specify up to 10 language codes here.
     */
    targetLanguageCodes?: string[];
}
