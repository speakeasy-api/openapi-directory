import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An inflection point in a tempo curve; the API creates the overall tempo by using a linear interpolation of the time between each tempo change
**/
export declare class AudioRenderTimelineSpanTempoChanges extends SpeakeasyBase {
    tempo: number;
    time: number;
}
