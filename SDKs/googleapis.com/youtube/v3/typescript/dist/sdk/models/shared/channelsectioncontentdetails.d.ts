import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details about a channelsection, including playlists and channels.
 */
export declare class ChannelSectionContentDetails extends SpeakeasyBase {
    /**
     * The channel ids for type multiple_channels.
     */
    channels?: string[];
    /**
     * The playlist ids for type single_playlist and multiple_playlists. For singlePlaylist, only one playlistId is allowed.
     */
    playlists?: string[];
}
