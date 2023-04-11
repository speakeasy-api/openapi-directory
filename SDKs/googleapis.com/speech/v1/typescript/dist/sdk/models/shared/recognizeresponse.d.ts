import { SpeakeasyBase } from "../../../internal/utils";
import { SpeechAdaptationInfo } from "./speechadaptationinfo";
import { SpeechRecognitionResult } from "./speechrecognitionresult";
/**
 * The only message returned to the client by the `Recognize` method. It contains the result as zero or more sequential `SpeechRecognitionResult` messages.
 */
export declare class RecognizeResponse extends SpeakeasyBase {
    /**
     * The ID associated with the request. This is a unique ID specific only to the given request.
     */
    requestId?: string;
    /**
     * Sequential list of transcription results corresponding to sequential portions of audio.
     */
    results?: SpeechRecognitionResult[];
    /**
     * Information on speech adaptation use in results
     */
    speechAdaptationInfo?: SpeechAdaptationInfo;
    /**
     * When available, billed audio seconds for the corresponding request.
     */
    totalBilledTime?: string;
}
