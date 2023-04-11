import { SpeakeasyBase } from "../../../internal/utils";
import { RecognitionAudio } from "./recognitionaudio";
import { RecognitionConfigInput } from "./recognitionconfig";
/**
 * The top-level message sent by the client for the `Recognize` method.
 */
export declare class RecognizeRequestInput extends SpeakeasyBase {
    /**
     * Contains audio data in the encoding specified in the `RecognitionConfig`. Either `content` or `uri` must be supplied. Supplying both or neither returns google.rpc.Code.INVALID_ARGUMENT. See [content limits](https://cloud.google.com/speech-to-text/quotas#content).
     */
    audio?: RecognitionAudio;
    /**
     * Provides information to the recognizer that specifies how to process the request.
     */
    config?: RecognitionConfigInput;
}
