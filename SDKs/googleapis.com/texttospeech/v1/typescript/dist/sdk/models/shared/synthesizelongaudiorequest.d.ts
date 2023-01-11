import { SpeakeasyBase } from "../../../internal/utils";
import { AudioConfig } from "./audioconfig";
import { SynthesisInput } from "./synthesisinput";
import { VoiceSelectionParams } from "./voiceselectionparams";
/**
 * The top-level message sent by the client for the `SynthesizeLongAudio` method.
**/
export declare class SynthesizeLongAudioRequest extends SpeakeasyBase {
    audioConfig?: AudioConfig;
    input?: SynthesisInput;
    outputGcsUri?: string;
    voice?: VoiceSelectionParams;
}
