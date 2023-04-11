import { SpeakeasyBase } from "../../../internal/utils";
import { AudioConfig } from "./audioconfig";
import { SynthesisInput } from "./synthesisinput";
import { VoiceSelectionParams } from "./voiceselectionparams";
/**
 * The top-level message sent by the client for the `SynthesizeLongAudio` method.
 */
export declare class SynthesizeLongAudioRequest extends SpeakeasyBase {
    /**
     * Description of audio data to be synthesized.
     */
    audioConfig?: AudioConfig;
    /**
     * Contains text input to be synthesized. Either `text` or `ssml` must be supplied. Supplying both or neither returns google.rpc.Code.INVALID_ARGUMENT. The input size is limited to 5000 bytes.
     */
    input?: SynthesisInput;
    /**
     * Specifies a Cloud Storage URI for the synthesis results. Must be specified in the format: `gs://bucket_name/object_name`, and the bucket must already exist.
     */
    outputGcsUri?: string;
    /**
     * Description of which voice to use for a synthesis request.
     */
    voice?: VoiceSelectionParams;
}
