import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CuepointCueTypeEnum {
    CueTypeUnspecified = "cueTypeUnspecified",
    CueTypeAd = "cueTypeAd"
}
/**
 * Note that there may be a 5-second end-point resolution issue. For instance, if a cuepoint comes in for 22:03:27, we may stuff the cuepoint into 22:03:25 or 22:03:30, depending. This is an artifact of HLS.
 */
export declare class Cuepoint extends SpeakeasyBase {
    cueType?: CuepointCueTypeEnum;
    /**
     * The duration of this cuepoint.
     */
    durationSecs?: number;
    etag?: string;
    /**
     * The identifier for cuepoint resource.
     */
    id?: string;
    /**
     * The time when the cuepoint should be inserted by offset to the broadcast actual start time.
     */
    insertionOffsetTimeMs?: string;
    /**
     * The wall clock time at which the cuepoint should be inserted. Only one of insertion_offset_time_ms and walltime_ms may be set at a time.
     */
    walltimeMs?: string;
}
