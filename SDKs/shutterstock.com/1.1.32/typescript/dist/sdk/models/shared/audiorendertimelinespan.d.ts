import { SpeakeasyBase } from "../../../internal/utils";
import { AudioRenderTimelineSpanInstrumentGroup } from "./audiorendertimelinespaninstrumentgroup";
import { AudioRenderTimelineSpanRegion } from "./audiorendertimelinespanregion";
import { AudioRenderTimelineSpanTempoChanges } from "./audiorendertimelinespantempochanges";
/**
 * Type of span; metered spans represent a pariod of time with music, and unmetered spans denote the end of the prior metered span
 */
export declare enum AudioRenderTimelineSpanSpanTypeEnum {
    Metered = "metered",
    Unmetered = "unmetered"
}
/**
 * The beginning of a non-overlapping period of absolute time
 */
export declare class AudioRenderTimelineSpan extends SpeakeasyBase {
    /**
     * An identifier which must be unique within the parent span
     */
    id?: number;
    /**
     * An array of instrument_group objects that are used in this span
     */
    instrumentGroups?: AudioRenderTimelineSpanInstrumentGroup[];
    /**
     * An array of region objects within the span
     */
    regions?: AudioRenderTimelineSpanRegion[];
    /**
     * Type of span; metered spans represent a pariod of time with music, and unmetered spans denote the end of the prior metered span
     */
    spanType: AudioRenderTimelineSpanSpanTypeEnum;
    /**
     * The tempo, in beats per minute, at the start of the span; if not provided, the API selects a random tempo
     */
    tempo?: number;
    /**
     * Two or more inflection points in a tempo curve; the API creates a smoothly changing tempo by using a linear interpolation of the time between each tempo change
     */
    tempoChanges?: AudioRenderTimelineSpanTempoChanges[];
    /**
     * The absolute time, in seconds, at which the span starts
     */
    time: number;
}
