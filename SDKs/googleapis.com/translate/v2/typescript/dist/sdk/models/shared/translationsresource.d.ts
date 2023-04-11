import { SpeakeasyBase } from "../../../internal/utils";
export declare class TranslationsResource extends SpeakeasyBase {
    /**
     * The source language of the initial request, detected automatically, if
     *
     * @remarks
     * no source language was passed within the initial request. If the
     * source language was passed, auto-detection of the language will not
     * occur and this field will be empty.
     */
    detectedSourceLanguage?: string;
    /**
     * The `model` type used for this translation. Valid values are
     *
     * @remarks
     * listed in public documentation. Can be different from requested `model`.
     * Present only if specific model type was explicitly requested.
     */
    model?: string;
    /**
     * Text translated into the target language.
     */
    translatedText?: string;
}
