import { SpeakeasyBase } from "../../../internal/utils";
import { VideoProcessingDetailsProcessingProgress } from "./videoprocessingdetailsprocessingprogress";
/**
 * The reason that YouTube failed to process the video. This property will only have a value if the processingStatus property's value is failed.
 */
export declare enum VideoProcessingDetailsProcessingFailureReasonEnum {
    UploadFailed = "uploadFailed",
    TranscodeFailed = "transcodeFailed",
    StreamingFailed = "streamingFailed",
    Other = "other"
}
/**
 * The video's processing status. This value indicates whether YouTube was able to process the video or if the video is still being processed.
 */
export declare enum VideoProcessingDetailsProcessingStatusEnum {
    Processing = "processing",
    Succeeded = "succeeded",
    Failed = "failed",
    Terminated = "terminated"
}
/**
 * Describes processing status and progress and availability of some other Video resource parts.
 */
export declare class VideoProcessingDetails extends SpeakeasyBase {
    /**
     * This value indicates whether video editing suggestions, which might improve video quality or the playback experience, are available for the video. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request.
     */
    editorSuggestionsAvailability?: string;
    /**
     * This value indicates whether file details are available for the uploaded video. You can retrieve a video's file details by requesting the fileDetails part in your videos.list() request.
     */
    fileDetailsAvailability?: string;
    /**
     * The reason that YouTube failed to process the video. This property will only have a value if the processingStatus property's value is failed.
     */
    processingFailureReason?: VideoProcessingDetailsProcessingFailureReasonEnum;
    /**
     * This value indicates whether the video processing engine has generated suggestions that might improve YouTube's ability to process the the video, warnings that explain video processing problems, or errors that cause video processing problems. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request.
     */
    processingIssuesAvailability?: string;
    /**
     * Video processing progress and completion time estimate.
     */
    processingProgress?: VideoProcessingDetailsProcessingProgress;
    /**
     * The video's processing status. This value indicates whether YouTube was able to process the video or if the video is still being processed.
     */
    processingStatus?: VideoProcessingDetailsProcessingStatusEnum;
    /**
     * This value indicates whether keyword (tag) suggestions are available for the video. Tags can be added to a video's metadata to make it easier for other users to find the video. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request.
     */
    tagSuggestionsAvailability?: string;
    /**
     * This value indicates whether thumbnail images have been generated for the video.
     */
    thumbnailsAvailability?: string;
}
