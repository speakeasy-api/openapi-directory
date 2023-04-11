import { SpeakeasyBase } from "../../../internal/utils";
import { InputConfig } from "./inputconfig";
import { OutputConfig } from "./outputconfig";
import { TranslateTextGlossaryConfig } from "./translatetextglossaryconfig";
/**
 * The batch translation request.
 */
export declare class BatchTranslateTextRequest extends SpeakeasyBase {
    /**
     * Optional. Glossaries to be applied for translation. It's keyed by target language code.
     */
    glossaries?: Record<string, TranslateTextGlossaryConfig>;
    /**
     * Required. Input configurations. The total number of files matched should be <= 100. The total content size should be <= 100M Unicode codepoints. The files must use UTF-8 encoding.
     */
    inputConfigs?: InputConfig[];
    /**
     * Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/labels for more information.
     */
    labels?: Record<string, string>;
    /**
     * Optional. The models to use for translation. Map's key is target language code. Map's value is model name. Value can be a built-in general model, or an AutoML Translation model. The value format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, If the map is empty or a specific model is not requested for a language pair, then default google model (nmt) is used.
     */
    models?: Record<string, string>;
    /**
     * Output configuration for BatchTranslateText request.
     */
    outputConfig?: OutputConfig;
    /**
     * Required. Source language code.
     */
    sourceLanguageCode?: string;
    /**
     * Required. Specify up to 10 language codes here.
     */
    targetLanguageCodes?: string[];
}
