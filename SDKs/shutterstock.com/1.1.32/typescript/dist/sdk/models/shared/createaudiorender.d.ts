import { SpeakeasyBase } from "../../../internal/utils";
import { AudioRenderTimeline } from "./audiorendertimeline";
/**
 * File format, such as MP3 file, combined WAV file, or individual track WAV files
 */
export declare enum CreateAudioRenderPresetEnum {
    MasterMp3 = "MASTER_MP3",
    MasterWav = "MASTER_WAV",
    StemsWav = "STEMS_WAV"
}
/**
 * Data required to create an audio render
 */
export declare class CreateAudioRender extends SpeakeasyBase {
    /**
     * A user-specified file name suggestion; this file name becomes the filename property of the Content-Disposition header when the user downloads the rendered audio file
     */
    filename: string;
    /**
     * File format, such as MP3 file, combined WAV file, or individual track WAV files
     */
    preset: CreateAudioRenderPresetEnum;
    /**
     * A timeline object that represents either a request for music to be created or an entire music composition
     */
    timeline: AudioRenderTimeline;
}
