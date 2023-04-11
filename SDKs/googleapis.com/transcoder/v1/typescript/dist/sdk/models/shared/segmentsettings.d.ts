import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Segment settings for `ts`, `fmp4` and `vtt`.
 */
export declare class SegmentSettings extends SpeakeasyBase {
    /**
     * Required. Create an individual segment file. The default is `false`.
     */
    individualSegments?: boolean;
    /**
     * Duration of the segments in seconds. The default is `6.0s`. Note that `segmentDuration` must be greater than or equal to [`gopDuration`](#videostream), and `segmentDuration` must be divisible by [`gopDuration`](#videostream).
     */
    segmentDuration?: string;
}
