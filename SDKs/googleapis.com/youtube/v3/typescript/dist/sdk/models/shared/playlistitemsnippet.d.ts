import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceId } from "./resourceid";
import { ThumbnailDetails } from "./thumbnaildetails";
/**
 * Basic details about a playlist, including title, description and thumbnails. Basic details of a YouTube Playlist item provided by the author. Next ID: 15
 */
export declare class PlaylistItemSnippet extends SpeakeasyBase {
    /**
     * The ID that YouTube uses to uniquely identify the user that added the item to the playlist.
     */
    channelId?: string;
    /**
     * Channel title for the channel that the playlist item belongs to.
     */
    channelTitle?: string;
    /**
     * The item's description.
     */
    description?: string;
    /**
     * The ID that YouTube uses to uniquely identify thGe playlist that the playlist item is in.
     */
    playlistId?: string;
    /**
     * The order in which the item appears in the playlist. The value uses a zero-based index, so the first item has a position of 0, the second item has a position of 1, and so forth.
     */
    position?: number;
    /**
     * The date and time that the item was added to the playlist.
     */
    publishedAt?: Date;
    /**
     * A resource id is a generic reference that points to another YouTube resource.
     */
    resourceId?: ResourceId;
    /**
     * Internal representation of thumbnails for a YouTube resource.
     */
    thumbnails?: ThumbnailDetails;
    /**
     * The item's title.
     */
    title?: string;
    /**
     * Channel id for the channel this video belongs to.
     */
    videoOwnerChannelId?: string;
    /**
     * Channel title for the channel this video belongs to.
     */
    videoOwnerChannelTitle?: string;
}
