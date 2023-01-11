import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AudioRenderTimelineSpan } from "./audiorendertimelinespan";



// AudioRenderTimeline
/** 
 * A timeline object that represents either a request for music to be created or an entire music composition
**/
export class AudioRenderTimeline extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=spans", elemType: AudioRenderTimelineSpan })
  spans?: AudioRenderTimelineSpan[];
}
