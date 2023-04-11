import { SpeakeasyBase } from "../../../internal/utils";
import { SpeechRecognitionAlternative } from "./speechrecognitionalternative";
/**
 * A speech recognition result corresponding to a portion of the audio.
 */
export declare class SpeechRecognitionResult extends SpeakeasyBase {
    /**
     * May contain one or more recognition hypotheses (up to the maximum specified in `max_alternatives`). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer.
     */
    alternatives?: SpeechRecognitionAlternative[];
    /**
     * For multi-channel audio, this is the channel number corresponding to the recognized result for the audio from that channel. For audio_channel_count = N, its output values can range from '1' to 'N'.
     */
    channelTag?: number;
    /**
     * Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio.
     */
    languageCode?: string;
    /**
     * Time offset of the end of this result relative to the beginning of the audio.
     */
    resultEndTime?: string;
}
