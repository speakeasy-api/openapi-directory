import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AudioRenderTimelineSpanTempoChanges
/** 
 * An inflection point in a tempo curve; the API creates the overall tempo by using a linear interpolation of the time between each tempo change
**/
export class AudioRenderTimelineSpanTempoChanges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tempo" })
  tempo: number;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time: number;
}
