import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message.
 */
export declare class GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText extends SpeakeasyBase {
    /**
     * Output only. Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.
     */
    allowPlaybackInterruption?: boolean;
    /**
     * The SSML text to be synthesized. For more information, see [SSML](/speech/text-to-speech/docs/ssml).
     */
    ssml?: string;
    /**
     * The raw text to be synthesized.
     */
    text?: string;
}
/**
 * A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message.
 */
export declare class GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioTextInput extends SpeakeasyBase {
    /**
     * The SSML text to be synthesized. For more information, see [SSML](/speech/text-to-speech/docs/ssml).
     */
    ssml?: string;
    /**
     * The raw text to be synthesized.
     */
    text?: string;
}
