import { SpeakeasyBase } from "../../../internal/utils";
import { AudioRenderTimeline } from "./audiorendertimeline";
export declare enum CreateAudioRenderPresetEnum {
    MasterMp3 = "MASTER_MP3",
    MasterWav = "MASTER_WAV",
    StemsWav = "STEMS_WAV"
}
/**
 * Data required to create an audio render
**/
export declare class CreateAudioRender extends SpeakeasyBase {
    filename: string;
    preset: CreateAudioRenderPresetEnum;
    timeline: AudioRenderTimeline;
}
