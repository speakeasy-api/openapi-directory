import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request message for language detection.
 */
export declare class DetectLanguageRequest extends SpeakeasyBase {
    /**
     * The content of the input stored as a string.
     */
    content?: string;
    /**
     * Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/labels for more information.
     */
    labels?: Record<string, string>;
    /**
     * Optional. The format of the source text, for example, "text/html", "text/plain". If left blank, the MIME type defaults to "text/html".
     */
    mimeType?: string;
    /**
     * Optional. The language detection model to be used. Format: `projects/{project-number-or-id}/locations/{location-id}/models/language-detection/{model-id}` Only one language detection model is currently supported: `projects/{project-number-or-id}/locations/{location-id}/models/language-detection/default`. If not specified, the default model is used.
     */
    model?: string;
}
