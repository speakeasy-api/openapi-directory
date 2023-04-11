import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An inflection point in a tempo curve; the API creates the overall tempo by using a linear interpolation of the time between each tempo change
 */
export declare class AudioRenderTimelineSpanTempoChanges extends SpeakeasyBase {
    /**
     * The tempo, in beats per minute, active at this time
     */
    tempo: number;
    /**
     * The time, in seconds, at which the tempo exists
     */
    time: number;
}
