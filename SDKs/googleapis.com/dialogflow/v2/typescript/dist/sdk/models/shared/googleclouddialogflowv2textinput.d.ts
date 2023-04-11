import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ============================================================================ Auxiliary proto messages. Represents the natural language text to be processed.
 */
export declare class GoogleCloudDialogflowV2TextInput extends SpeakeasyBase {
    /**
     * Required. The language of this conversational query. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language.
     */
    languageCode?: string;
    /**
     * Required. The UTF-8 encoded natural language text to be processed. Text length must not exceed 256 characters for virtual agent interactions.
     */
    text?: string;
}
