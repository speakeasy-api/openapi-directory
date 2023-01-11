import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
/**
 * The status of an instrument at a specific beat
**/
export declare class AudioRenderTimelineSpanInstrumentGroupStatus extends SpeakeasyBase {
    beat: number;
    status: AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum;
}
