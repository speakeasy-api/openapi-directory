import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AudioRenderTimelineSpanInstrumentGroup } from "./audiorendertimelinespaninstrumentgroup";
import { AudioRenderTimelineSpanRegion } from "./audiorendertimelinespanregion";
import { AudioRenderTimelineSpanTempoChanges } from "./audiorendertimelinespantempochanges";


export enum AudioRenderTimelineSpanSpanTypeEnum {
    Metered = "metered",
    Unmetered = "unmetered"
}


// AudioRenderTimelineSpan
/** 
 * The beginning of a non-overlapping period of absolute time
**/
export class AudioRenderTimelineSpan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=instrument_groups", elemType: AudioRenderTimelineSpanInstrumentGroup })
  instrumentGroups?: AudioRenderTimelineSpanInstrumentGroup[];

  @SpeakeasyMetadata({ data: "json, name=regions", elemType: AudioRenderTimelineSpanRegion })
  regions?: AudioRenderTimelineSpanRegion[];

  @SpeakeasyMetadata({ data: "json, name=span_type" })
  spanType: AudioRenderTimelineSpanSpanTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=tempo" })
  tempo?: number;

  @SpeakeasyMetadata({ data: "json, name=tempo_changes", elemType: AudioRenderTimelineSpanTempoChanges })
  tempoChanges?: AudioRenderTimelineSpanTempoChanges[];

  @SpeakeasyMetadata({ data: "json, name=time" })
  time: number;
}
