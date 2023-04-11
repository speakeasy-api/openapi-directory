import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Video segment.
 */
export declare class GoogleCloudVideointelligenceV1beta2VideoSegment extends SpeakeasyBase {
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the end of the segment (inclusive).
     */
    endTimeOffset?: string;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the start of the segment (inclusive).
     */
    startTimeOffset?: string;
}
