import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Whether the instrument is playing or not
 */
export declare enum AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
/**
 * The status of an instrument at a specific beat
 */
export declare class AudioRenderTimelineSpanInstrumentGroupStatus extends SpeakeasyBase {
    /**
     * The beat, relative to the span, at which the status begins
     */
    beat: number;
    /**
     * Whether the instrument is playing or not
     */
    status: AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum;
}
