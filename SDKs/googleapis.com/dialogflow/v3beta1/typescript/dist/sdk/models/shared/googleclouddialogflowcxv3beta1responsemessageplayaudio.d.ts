import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies an audio clip to be played by the client as part of the response.
 */
export declare class GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio extends SpeakeasyBase {
    /**
     * Output only. Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.
     */
    allowPlaybackInterruption?: boolean;
    /**
     * Required. URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it.
     */
    audioUri?: string;
}
/**
 * Specifies an audio clip to be played by the client as part of the response.
 */
export declare class GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudioInput extends SpeakeasyBase {
    /**
     * Required. URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it.
     */
    audioUri?: string;
}
