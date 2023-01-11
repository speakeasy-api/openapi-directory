import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TranscriptMonologuesElementsTypeEnum {
    Text = "text",
    Punct = "punct",
    Unknown = "unknown"
}
export declare class TranscriptMonologuesElements extends SpeakeasyBase {
    confidence?: number;
    ts?: number;
    tsEnd?: number;
    type?: TranscriptMonologuesElementsTypeEnum;
    value?: string;
}
export declare class TranscriptMonologues extends SpeakeasyBase {
    elements?: TranscriptMonologuesElements[];
    speaker?: number;
}
/**
 * Rev.ai Transcript Model
 * ***
 * Note: properties are not displayed in the returned object if they are null
 *
 * Jobs with skip_diarization set to true will only show a single speaker for the entire duration of the transcript.
 *
**/
export declare class Transcript extends SpeakeasyBase {
    monologues?: TranscriptMonologues[];
}
