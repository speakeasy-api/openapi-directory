import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentInputConfig } from "./documentinputconfig";
import { DocumentOutputConfig } from "./documentoutputconfig";
import { TranslateTextGlossaryConfig } from "./translatetextglossaryconfig";
/**
 * A document translation request.
 */
export declare class TranslateDocumentRequest extends SpeakeasyBase {
    /**
     * Optional. This flag is to support user customized attribution. If not provided, the default is `Machine Translated by Google`. Customized attribution should follow rules in https://cloud.google.com/translate/attribution#attribution_and_logos
     */
    customizedAttribution?: string;
    /**
     * A document translation request input config.
     */
    documentInputConfig?: DocumentInputConfig;
    /**
     * A document translation request output config.
     */
    documentOutputConfig?: DocumentOutputConfig;
    /**
     * Optional. If true, use the text removal server to remove the shadow text on background image for native pdf translation. Shadow removal feature can only be enabled when is_translate_native_pdf_only: false && pdf_native_only: false
     */
    enableShadowRemovalNativePdf?: boolean;
    /**
     * Configures which glossary should be used for a specific target language, and defines options for applying that glossary.
     */
    glossaryConfig?: TranslateTextGlossaryConfig;
    /**
     * Optional. is_translate_native_pdf_only field for external customers. If true, the page limit of online native pdf translation is 300 and only native pdf pages will be translated.
     */
    isTranslateNativePdfOnly?: boolean;
    /**
     * Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/advanced/labels for more information.
     */
    labels?: Record<string, string>;
    /**
     * Optional. The `model` type requested for this translation. The format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, If not provided, the default Google model (NMT) will be used for translation.
     */
    model?: string;
    /**
     * Optional. The BCP-47 language code of the input document if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in Language Support. If the source language isn't specified, the API attempts to identify the source language automatically and returns the source language within the response. Source language must be specified if the request contains a glossary or a custom model.
     */
    sourceLanguageCode?: string;
    /**
     * Required. The BCP-47 language code to use for translation of the input document, set to one of the language codes listed in Language Support.
     */
    targetLanguageCode?: string;
}
