import { SpeakeasyBase } from "../../../internal/utils";
import { AudioRenderTimelineSpanInstrumentGroup } from "./audiorendertimelinespaninstrumentgroup";
import { AudioRenderTimelineSpanRegion } from "./audiorendertimelinespanregion";
import { AudioRenderTimelineSpanTempoChanges } from "./audiorendertimelinespantempochanges";
export declare enum AudioRenderTimelineSpanSpanTypeEnum {
    Metered = "metered",
    Unmetered = "unmetered"
}
/**
 * The beginning of a non-overlapping period of absolute time
**/
export declare class AudioRenderTimelineSpan extends SpeakeasyBase {
    id?: number;
    instrumentGroups?: AudioRenderTimelineSpanInstrumentGroup[];
    regions?: AudioRenderTimelineSpanRegion[];
    spanType: AudioRenderTimelineSpanSpanTypeEnum;
    tempo?: number;
    tempoChanges?: AudioRenderTimelineSpanTempoChanges[];
    time: number;
}
