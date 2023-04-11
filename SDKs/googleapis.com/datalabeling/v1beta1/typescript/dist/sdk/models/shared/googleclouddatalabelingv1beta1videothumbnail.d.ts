import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container of information of a video thumbnail.
 */
export declare class GoogleCloudDatalabelingV1beta1VideoThumbnail extends SpeakeasyBase {
    /**
     * A byte string of the video frame.
     */
    thumbnail?: string;
    /**
     * Time offset relative to the beginning of the video, corresponding to the video frame where the thumbnail has been extracted from.
     */
    timeOffset?: string;
}
