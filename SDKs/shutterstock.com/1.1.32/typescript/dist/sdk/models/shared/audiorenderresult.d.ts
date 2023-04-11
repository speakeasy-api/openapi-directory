import { SpeakeasyBase } from "../../../internal/utils";
import { AudioRendersFilesList } from "./audiorendersfileslist";
import { AudioRenderTimeline } from "./audiorendertimeline";
/**
 * The file format preset
 */
export declare enum AudioRenderResultPresetEnum {
    MasterMp3 = "MASTER_MP3",
    MasterWav = "MASTER_WAV",
    StemsWav = "STEMS_WAV"
}
/**
 * A coarse progress indicator
 */
export declare enum AudioRenderResultStatusEnum {
    WaitingCompose = "WAITING_COMPOSE",
    RunningCompose = "RUNNING_COMPOSE",
    WaitingRender = "WAITING_RENDER",
    RunningRender = "RUNNING_RENDER",
    Created = "CREATED",
    FailedCreate = "FAILED_CREATE"
}
/**
 * The output of an audio render in WAV or MP3 format
 */
export declare class AudioRenderResult extends SpeakeasyBase {
    /**
     * The time the render was submitted to the API
     */
    createdDate?: Date;
    /**
     * The files associated with the render
     */
    files?: AudioRendersFilesList[];
    /**
     * The alphanumeric ID of the simple render
     */
    id: string;
    /**
     * The file format preset
     */
    preset?: AudioRenderResultPresetEnum;
    /**
     * The current progress of the render as a percentage
     */
    progressPercent?: number;
    /**
     * A coarse progress indicator
     */
    status: AudioRenderResultStatusEnum;
    /**
     * A timeline object that represents either a request for music to be created or an entire music composition
     */
    timeline: AudioRenderTimeline;
    /**
     * The time that the audio output was uploaded
     */
    updatedDate?: Date;
}
