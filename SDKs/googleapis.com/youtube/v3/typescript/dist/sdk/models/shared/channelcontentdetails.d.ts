import { SpeakeasyBase } from "../../../internal/utils";
export declare class ChannelContentDetailsRelatedPlaylists extends SpeakeasyBase {
    /**
     * The ID of the playlist that contains the channel"s favorite videos. Use the playlistItems.insert and playlistItems.delete to add or remove items from that list.
     */
    favorites?: string;
    /**
     * The ID of the playlist that contains the channel"s liked videos. Use the playlistItems.insert and playlistItems.delete to add or remove items from that list.
     */
    likes?: string;
    /**
     * The ID of the playlist that contains the channel"s uploaded videos. Use the videos.insert method to upload new videos and the videos.delete method to delete previously uploaded videos.
     */
    uploads?: string;
    /**
     * The ID of the playlist that contains the channel"s watch history. Use the playlistItems.insert and playlistItems.delete to add or remove items from that list.
     */
    watchHistory?: string;
    /**
     * The ID of the playlist that contains the channel"s watch later playlist. Use the playlistItems.insert and playlistItems.delete to add or remove items from that list.
     */
    watchLater?: string;
}
/**
 * Details about the content of a channel.
 */
export declare class ChannelContentDetails extends SpeakeasyBase {
    relatedPlaylists?: ChannelContentDetailsRelatedPlaylists;
}
