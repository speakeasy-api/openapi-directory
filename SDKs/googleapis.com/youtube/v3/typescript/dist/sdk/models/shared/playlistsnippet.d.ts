import { SpeakeasyBase } from "../../../internal/utils";
import { PlaylistLocalization } from "./playlistlocalization";
import { ThumbnailDetails } from "./thumbnaildetails";
/**
 * Basic details about a playlist, including title, description and thumbnails.
 */
export declare class PlaylistSnippet extends SpeakeasyBase {
    /**
     * The ID that YouTube uses to uniquely identify the channel that published the playlist.
     */
    channelId?: string;
    /**
     * The channel title of the channel that the video belongs to.
     */
    channelTitle?: string;
    /**
     * The language of the playlist's default title and description.
     */
    defaultLanguage?: string;
    /**
     * The playlist's description.
     */
    description?: string;
    /**
     * Playlist localization setting
     */
    localized?: PlaylistLocalization;
    /**
     * The date and time that the playlist was created.
     */
    publishedAt?: Date;
    /**
     * Keyword tags associated with the playlist.
     */
    tags?: string[];
    /**
     * Note: if the playlist has a custom thumbnail, this field will not be populated. The video id selected by the user that will be used as the thumbnail of this playlist. This field defaults to the first publicly viewable video in the playlist, if: 1. The user has never selected a video to be the thumbnail of the playlist. 2. The user selects a video to be the thumbnail, and then removes that video from the playlist. 3. The user selects a non-owned video to be the thumbnail, but that video becomes private, or gets deleted.
     */
    thumbnailVideoId?: string;
    /**
     * Internal representation of thumbnails for a YouTube resource.
     */
    thumbnails?: ThumbnailDetails;
    /**
     * The playlist's title.
     */
    title?: string;
}
