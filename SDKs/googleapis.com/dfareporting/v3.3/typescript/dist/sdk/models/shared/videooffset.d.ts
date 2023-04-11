import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Video Offset
 */
export declare class VideoOffset extends SpeakeasyBase {
    /**
     * Duration, as a percentage of video duration. Do not set when offsetSeconds is set. Acceptable values are 0 to 100, inclusive.
     */
    offsetPercentage?: number;
    /**
     * Duration, in seconds. Do not set when offsetPercentage is set. Acceptable values are 0 to 86399, inclusive.
     */
    offsetSeconds?: number;
}
