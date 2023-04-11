import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents one segment of audio.
 */
export declare class GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment extends SpeakeasyBase {
    /**
     * Output only. Whether the playback of this segment can be interrupted by the end user's speech and the client should then start the next Dialogflow request.
     */
    allowPlaybackInterruption?: boolean;
    /**
     * Raw audio synthesized from the Dialogflow agent's response using the output config specified in the request.
     */
    audio?: string;
    /**
     * Client-specific URI that points to an audio clip accessible to the client. Dialogflow does not impose any validation on it.
     */
    uri?: string;
}
/**
 * Represents one segment of audio.
 */
export declare class GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegmentInput extends SpeakeasyBase {
    /**
     * Raw audio synthesized from the Dialogflow agent's response using the output config specified in the request.
     */
    audio?: string;
    /**
     * Client-specific URI that points to an audio clip accessible to the client. Dialogflow does not impose any validation on it.
     */
    uri?: string;
}
