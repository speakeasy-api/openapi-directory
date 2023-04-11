import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request message for language detection.
 */
export declare class DetectLanguageRequest extends SpeakeasyBase {
    /**
     * The input text upon which to perform language detection. Repeat this
     *
     * @remarks
     * parameter to perform language detection on multiple text inputs.
     */
    q?: string[];
}
