import { SpeakeasyBase } from "../../../internal/utils";
import { Entry } from "./entry";
/**
 * Transcription normalization configuration. Use transcription normalization to automatically replace parts of the transcript with phrases of your choosing. For StreamingRecognize, this normalization only applies to stable partial transcripts (stability > 0.8) and final transcripts.
 */
export declare class TranscriptNormalization extends SpeakeasyBase {
    /**
     * A list of replacement entries. We will perform replacement with one entry at a time. For example, the second entry in ["cat" => "dog", "mountain cat" => "mountain dog"] will never be applied because we will always process the first entry before it. At most 100 entries.
     */
    entries?: Entry[];
}
