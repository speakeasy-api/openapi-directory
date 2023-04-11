import { SpeakeasyBase } from "../../../internal/utils";
/**
 * public or private
 */
export declare enum CreateUpdatePlaylistRequestPlaylistSharingEnum {
    Public = "public",
    Private = "private"
}
export declare class CreateUpdatePlaylistRequestPlaylistTracks extends SpeakeasyBase {
    /**
     * SoundCloud track id
     */
    id: string;
}
export declare class CreateUpdatePlaylistRequestPlaylist extends SpeakeasyBase {
    /**
     * Description of the playlist
     */
    description?: string;
    /**
     * public or private
     */
    sharing?: CreateUpdatePlaylistRequestPlaylistSharingEnum;
    /**
     * Title of the playlist
     */
    title?: string;
    /**
     * List of tracks to add to playlist
     */
    tracks?: CreateUpdatePlaylistRequestPlaylistTracks[];
}
/**
 * Create Playlist request
 */
export declare class CreateUpdatePlaylistRequest extends SpeakeasyBase {
    playlist?: CreateUpdatePlaylistRequestPlaylist;
}
