import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AudioRenderTimelineSpanInstrumentGroupStatus } from "./audiorendertimelinespaninstrumentgroupstatus";



// AudioRenderTimelineSpanInstrumentGroup
/** 
 * An instrument and the status objects that specify when that instrument plays
**/
export class AudioRenderTimelineSpanInstrumentGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instrument_group" })
  instrumentGroup: string;

  @SpeakeasyMetadata({ data: "json, name=statuses", elemType: AudioRenderTimelineSpanInstrumentGroupStatus })
  statuses?: AudioRenderTimelineSpanInstrumentGroupStatus[];
}
