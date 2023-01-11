import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateAudioRender } from "./createaudiorender";



// CreateAudioRendersRequest
/** 
 * Render request data
**/
export class CreateAudioRendersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio_renders", elemType: CreateAudioRender })
  audioRenders: CreateAudioRender[];
}
