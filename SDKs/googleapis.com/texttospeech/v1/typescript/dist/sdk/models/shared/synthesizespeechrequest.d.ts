import { SpeakeasyBase } from "../../../internal/utils";
import { AudioConfig } from "./audioconfig";
import { SynthesisInput } from "./synthesisinput";
import { VoiceSelectionParams } from "./voiceselectionparams";
/**
 * The top-level message sent by the client for the `SynthesizeSpeech` method.
 */
export declare class SynthesizeSpeechRequest extends SpeakeasyBase {
    /**
     * Description of audio data to be synthesized.
     */
    audioConfig?: AudioConfig;
    /**
     * Contains text input to be synthesized. Either `text` or `ssml` must be supplied. Supplying both or neither returns google.rpc.Code.INVALID_ARGUMENT. The input size is limited to 5000 bytes.
     */
    input?: SynthesisInput;
    /**
     * Description of which voice to use for a synthesis request.
     */
    voice?: VoiceSelectionParams;
}
