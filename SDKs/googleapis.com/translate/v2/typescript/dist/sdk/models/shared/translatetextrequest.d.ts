import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The main translation request message for the Cloud Translation API.
 */
export declare class TranslateTextRequest extends SpeakeasyBase {
    /**
     * The format of the source text, in either HTML (default) or plain-text. A
     *
     * @remarks
     * value of "html" indicates HTML and a value of "text" indicates plain-text.
     */
    format?: string;
    /**
     * The `model` type requested for this translation. Valid values are
     *
     * @remarks
     * listed in public documentation.
     */
    model?: string;
    /**
     * The input text to translate. Repeat this parameter to perform translation
     *
     * @remarks
     * operations on multiple text inputs.
     */
    q?: string[];
    /**
     * The language of the source text, set to one of the language codes listed in
     *
     * @remarks
     * Language Support. If the source language is not specified, the API will
     * attempt to identify the source language automatically and return it within
     * the response.
     */
    source?: string;
    /**
     * The language to use for translation of the input text, set to one of the
     *
     * @remarks
     * language codes listed in Language Support.
     */
    target?: string;
}
