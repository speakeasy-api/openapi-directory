import { SpeakeasyBase } from "../../../internal/utils";
import { VideoAgeGating } from "./videoagegating";
import { VideoContentDetails } from "./videocontentdetails";
import { VideoFileDetails } from "./videofiledetails";
import { VideoLiveStreamingDetails } from "./videolivestreamingdetails";
import { VideoLocalization } from "./videolocalization";
import { VideoMonetizationDetails } from "./videomonetizationdetails";
import { VideoPlayer } from "./videoplayer";
import { VideoProcessingDetails } from "./videoprocessingdetails";
import { VideoRecordingDetails } from "./videorecordingdetails";
import { VideoSnippet } from "./videosnippet";
import { VideoStatistics } from "./videostatistics";
import { VideoStatus } from "./videostatus";
import { VideoSuggestions } from "./videosuggestions";
import { VideoTopicDetails } from "./videotopicdetails";
/**
 * A *video* resource represents a YouTube video.
 */
export declare class Video extends SpeakeasyBase {
    ageGating?: VideoAgeGating;
    /**
     * Details about the content of a YouTube Video.
     */
    contentDetails?: VideoContentDetails;
    /**
     * Etag of this resource.
     */
    etag?: string;
    /**
     * Describes original video file properties, including technical details about audio and video streams, but also metadata information like content length, digitization time, or geotagging information.
     */
    fileDetails?: VideoFileDetails;
    /**
     * The ID that YouTube uses to uniquely identify the video.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#video".
     */
    kind?: string;
    /**
     * Details about the live streaming metadata.
     */
    liveStreamingDetails?: VideoLiveStreamingDetails;
    /**
     * The localizations object contains localized versions of the basic details about the video, such as its title and description.
     */
    localizations?: Record<string, VideoLocalization>;
    /**
     * Details about monetization of a YouTube Video.
     */
    monetizationDetails?: VideoMonetizationDetails;
    /**
     * Player to be used for a video playback.
     */
    player?: VideoPlayer;
    /**
     * Describes processing status and progress and availability of some other Video resource parts.
     */
    processingDetails?: VideoProcessingDetails;
    /**
     * DEPRECATED. b/157517979: This part was never populated after it was added. However, it sees non-zero traffic because there is generated client code in the wild that refers to it [1]. We keep this field and do NOT remove it because otherwise V3 would return an error when this part gets requested [2]. [1] https://developers.google.com/resources/api-libraries/documentation/youtube/v3/csharp/latest/classGoogle_1_1Apis_1_1YouTube_1_1v3_1_1Data_1_1VideoProjectDetails.html [2] http://google3/video/youtube/src/python/servers/data_api/common.py?l=1565-1569&rcl=344141677
     */
    projectDetails?: Record<string, any>;
    /**
     * Recording information associated with the video.
     */
    recordingDetails?: VideoRecordingDetails;
    /**
     * Basic details about a video, including title, description, uploader, thumbnails and category.
     */
    snippet?: VideoSnippet;
    /**
     * Statistics about the video, such as the number of times the video was viewed or liked.
     */
    statistics?: VideoStatistics;
    /**
     * Basic details about a video category, such as its localized title. Next Id: 18
     */
    status?: VideoStatus;
    /**
     * Specifies suggestions on how to improve video content, including encoding hints, tag suggestions, and editor suggestions.
     */
    suggestions?: VideoSuggestions;
    /**
     * Freebase topic information related to the video.
     */
    topicDetails?: VideoTopicDetails;
}
