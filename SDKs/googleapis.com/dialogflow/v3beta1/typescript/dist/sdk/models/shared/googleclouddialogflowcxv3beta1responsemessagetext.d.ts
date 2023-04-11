import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The text response message.
 */
export declare class GoogleCloudDialogflowCxV3beta1ResponseMessageText extends SpeakeasyBase {
    /**
     * Output only. Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.
     */
    allowPlaybackInterruption?: boolean;
    /**
     * Required. A collection of text responses.
     */
    text?: string[];
}
/**
 * The text response message.
 */
export declare class GoogleCloudDialogflowCxV3beta1ResponseMessageTextInput extends SpeakeasyBase {
    /**
     * Required. A collection of text responses.
     */
    text?: string[];
}
