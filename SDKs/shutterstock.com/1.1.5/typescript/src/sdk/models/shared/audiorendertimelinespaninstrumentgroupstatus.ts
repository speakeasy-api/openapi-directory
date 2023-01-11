import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum {
    Active = "active",
    Inactive = "inactive"
}


// AudioRenderTimelineSpanInstrumentGroupStatus
/** 
 * The status of an instrument at a specific beat
**/
export class AudioRenderTimelineSpanInstrumentGroupStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=beat" })
  beat: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum;
}
