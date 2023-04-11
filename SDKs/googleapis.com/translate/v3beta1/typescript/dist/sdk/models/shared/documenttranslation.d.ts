import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A translated document message.
 */
export declare class DocumentTranslation extends SpeakeasyBase {
    /**
     * The array of translated documents. It is expected to be size 1 for now. We may produce multiple translated documents in the future for other type of file formats.
     */
    byteStreamOutputs?: string[];
    /**
     * The detected language for the input document. If the user did not provide the source language for the input document, this field will have the language code automatically detected. If the source language was passed, auto-detection of the language does not occur and this field is empty.
     */
    detectedLanguageCode?: string;
    /**
     * The translated document's mime type.
     */
    mimeType?: string;
}
