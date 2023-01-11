import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AudioRenderTimeline } from "./audiorendertimeline";


export enum CreateAudioRenderPresetEnum {
    MasterMp3 = "MASTER_MP3",
    MasterWav = "MASTER_WAV",
    StemsWav = "STEMS_WAV"
}


// CreateAudioRender
/** 
 * Data required to create an audio render
**/
export class CreateAudioRender extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename: string;

  @SpeakeasyMetadata({ data: "json, name=preset" })
  preset: CreateAudioRenderPresetEnum;

  @SpeakeasyMetadata({ data: "json, name=timeline" })
  timeline: AudioRenderTimeline;
}
