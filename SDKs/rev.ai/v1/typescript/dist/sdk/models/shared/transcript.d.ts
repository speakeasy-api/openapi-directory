import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of transcript element. If Rev.ai was unable to determine the spoken word, the `type` will be `unknown`.
 */
export declare enum TranscriptMonologuesElementsTypeEnum {
    Text = "text",
    Punct = "punct",
    Unknown = "unknown"
}
export declare class TranscriptMonologuesElements extends SpeakeasyBase {
    /**
     * Confidence score of the provided value. If the element `type` is `punct` or `unknown`, confidence will be `null`
     */
    confidence?: number;
    /**
     * The timestamp of the beginning of the element relative to the beginning of the audio in seconds (centisecond precision)
     */
    ts?: number;
    /**
     * The timestamp of the end of the element relative to the beginning of the audio in seconds (centisecond precision)
     */
    tsEnd?: number;
    /**
     * Type of transcript element. If Rev.ai was unable to determine the spoken word, the `type` will be `unknown`.
     */
    type?: TranscriptMonologuesElementsTypeEnum;
    /**
     * Value of the transcript element.
     */
    value?: string;
}
export declare class TranscriptMonologues extends SpeakeasyBase {
    /**
     * Array of transcript elements
     */
    elements?: TranscriptMonologuesElements[];
    /**
     * Id of the speaker of the monologue
     */
    speaker?: number;
}
/**
 * Rev.ai Transcript Model
 *
 * @remarks
 * ***
 * Note: properties are not displayed in the returned object if they are null
 *
 * Jobs with skip_diarization set to true will only show a single speaker for the entire duration of the transcript.
 *
 */
export declare class Transcript extends SpeakeasyBase {
    monologues?: TranscriptMonologues[];
}
