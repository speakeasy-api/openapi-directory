import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents one segment of audio.
 */
export declare class GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment extends SpeakeasyBase {
    /**
     * Whether the playback of this segment can be interrupted by the end user's speech and the client should then start the next Dialogflow request.
     */
    allowPlaybackInterruption?: boolean;
    /**
     * Raw audio synthesized from the Dialogflow agent's response using the output config specified in the request.
     */
    audio?: string;
    /**
     * Client-specific URI that points to an audio clip accessible to the client.
     */
    uri?: string;
}
