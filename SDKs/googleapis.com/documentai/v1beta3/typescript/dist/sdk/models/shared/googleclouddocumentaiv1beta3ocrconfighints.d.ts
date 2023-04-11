import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Hints for OCR Engine
 */
export declare class GoogleCloudDocumentaiV1beta3OcrConfigHints extends SpeakeasyBase {
    /**
     * List of BCP-47 language codes to use for OCR. In most cases, not specifying it yields the best results since it enables automatic language detection. For languages based on the Latin alphabet, setting hints is not needed. In rare cases, when the language of the text in the image is known, setting a hint will help get better results (although it will be a significant hindrance if the hint is wrong).
     */
    languageHints?: string[];
}
