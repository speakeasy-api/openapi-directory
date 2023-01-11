import { SpeakeasyBase } from "../../../internal/utils";
import { AudioRenderTimelineSpan } from "./audiorendertimelinespan";
/**
 * A timeline object that represents either a request for music to be created or an entire music composition
**/
export declare class AudioRenderTimeline extends SpeakeasyBase {
    spans?: AudioRenderTimelineSpan[];
}
