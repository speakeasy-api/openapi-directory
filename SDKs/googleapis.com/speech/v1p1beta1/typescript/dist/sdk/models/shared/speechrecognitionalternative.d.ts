import { SpeakeasyBase } from "../../../internal/utils";
import { WordInfo } from "./wordinfo";
/**
 * Alternative hypotheses (a.k.a. n-best list).
 */
export declare class SpeechRecognitionAlternative extends SpeakeasyBase {
    /**
     * The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative of a non-streaming result or, of a streaming result where `is_final=true`. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.
     */
    confidence?: number;
    /**
     * Transcript text representing the words that the user spoke. In languages that use spaces to separate words, the transcript might have a leading space if it isn't the first result. You can concatenate each result to obtain the full transcript without using a separator.
     */
    transcript?: string;
    /**
     * A list of word-specific information for each recognized word. Note: When `enable_speaker_diarization` is true, you will see all the words from the beginning of the audio.
     */
    words?: WordInfo[];
}
