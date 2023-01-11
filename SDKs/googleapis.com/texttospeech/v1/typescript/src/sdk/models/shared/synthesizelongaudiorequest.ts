import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AudioConfig } from "./audioconfig";
import { SynthesisInput } from "./synthesisinput";
import { VoiceSelectionParams } from "./voiceselectionparams";



// SynthesizeLongAudioRequest
/** 
 * The top-level message sent by the client for the `SynthesizeLongAudio` method.
**/
export class SynthesizeLongAudioRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audioConfig" })
  audioConfig?: AudioConfig;

  @SpeakeasyMetadata({ data: "json, name=input" })
  input?: SynthesisInput;

  @SpeakeasyMetadata({ data: "json, name=outputGcsUri" })
  outputGcsUri?: string;

  @SpeakeasyMetadata({ data: "json, name=voice" })
  voice?: VoiceSelectionParams;
}
