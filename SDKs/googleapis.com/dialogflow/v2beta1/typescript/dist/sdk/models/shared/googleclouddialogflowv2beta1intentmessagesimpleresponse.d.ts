import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The simple response message containing speech or text.
 */
export declare class GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse extends SpeakeasyBase {
    /**
     * Optional. The text to display.
     */
    displayText?: string;
    /**
     * One of text_to_speech or ssml must be provided. Structured spoken response to the user in the SSML format. Mutually exclusive with text_to_speech.
     */
    ssml?: string;
    /**
     * One of text_to_speech or ssml must be provided. The plain text of the speech output. Mutually exclusive with ssml.
     */
    textToSpeech?: string;
}
