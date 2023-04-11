import { SpeakeasyBase } from "../../../internal/utils";
import { AudioConfig } from "./audioconfig";
import { Timepoint } from "./timepoint";
/**
 * The message returned to the client by the `SynthesizeSpeech` method.
 */
export declare class SynthesizeSpeechResponse extends SpeakeasyBase {
    /**
     * Description of audio data to be synthesized.
     */
    audioConfig?: AudioConfig;
    /**
     * The audio data bytes encoded as specified in the request, including the header for encodings that are wrapped in containers (e.g. MP3, OGG_OPUS). For LINEAR16 audio, we include the WAV header. Note: as with all bytes fields, protobuffers use a pure binary representation, whereas JSON representations use base64.
     */
    audioContent?: string;
    /**
     * A link between a position in the original request input and a corresponding time in the output audio. It's only supported via `` of SSML input.
     */
    timepoints?: Timepoint[];
}
