import { SpeakeasyBase } from "../../../internal/utils";
import { AudioRenderTimelineSpanInstrumentGroupStatus } from "./audiorendertimelinespaninstrumentgroupstatus";
/**
 * An instrument and the status objects that specify when that instrument plays
**/
export declare class AudioRenderTimelineSpanInstrumentGroup extends SpeakeasyBase {
    instrumentGroup: string;
    statuses?: AudioRenderTimelineSpanInstrumentGroupStatus[];
}
