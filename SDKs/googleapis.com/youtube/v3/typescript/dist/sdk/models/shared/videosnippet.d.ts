import { SpeakeasyBase } from "../../../internal/utils";
import { ThumbnailDetails } from "./thumbnaildetails";
import { VideoLocalization } from "./videolocalization";
/**
 * Indicates if the video is an upcoming/active live broadcast. Or it's "none" if the video is not an upcoming/active live broadcast.
 */
export declare enum VideoSnippetLiveBroadcastContentEnum {
    None = "none",
    Upcoming = "upcoming",
    Live = "live",
    Completed = "completed"
}
/**
 * Basic details about a video, including title, description, uploader, thumbnails and category.
 */
export declare class VideoSnippet extends SpeakeasyBase {
    /**
     * The YouTube video category associated with the video.
     */
    categoryId?: string;
    /**
     * The ID that YouTube uses to uniquely identify the channel that the video was uploaded to.
     */
    channelId?: string;
    /**
     * Channel title for the channel that the video belongs to.
     */
    channelTitle?: string;
    /**
     * The default_audio_language property specifies the language spoken in the video's default audio track.
     */
    defaultAudioLanguage?: string;
    /**
     * The language of the videos's default snippet.
     */
    defaultLanguage?: string;
    /**
     * The video's description. @mutable youtube.videos.insert youtube.videos.update
     */
    description?: string;
    /**
     * Indicates if the video is an upcoming/active live broadcast. Or it's "none" if the video is not an upcoming/active live broadcast.
     */
    liveBroadcastContent?: VideoSnippetLiveBroadcastContentEnum;
    /**
     * Localized versions of certain video properties (e.g. title).
     */
    localized?: VideoLocalization;
    /**
     * The date and time when the video was uploaded.
     */
    publishedAt?: Date;
    /**
     * A list of keyword tags associated with the video. Tags may contain spaces.
     */
    tags?: string[];
    /**
     * Internal representation of thumbnails for a YouTube resource.
     */
    thumbnails?: ThumbnailDetails;
    /**
     * The video's title. @mutable youtube.videos.insert youtube.videos.update
     */
    title?: string;
}
