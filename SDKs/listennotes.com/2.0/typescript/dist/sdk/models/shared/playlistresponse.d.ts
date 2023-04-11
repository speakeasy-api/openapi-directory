import { SpeakeasyBase } from "../../../internal/utils";
import { PlaylistItem } from "./playlistitem";
import { PlaylistVisibilityFieldEnum } from "./playlistvisibilityfieldenum";
/**
 * The type of this playlist, which should be either **episode_list** or **podcast_list**.
 *
 * @remarks
 *
 */
export declare enum PlaylistResponseTypeEnum {
    EpisodeList = "episode_list",
    PodcastList = "podcast_list"
}
/**
 * OK
 */
export declare class PlaylistResponse extends SpeakeasyBase {
    /**
     * Playlist description.
     */
    description?: string;
    /**
     * A 11-character playlist id, which can be used to further fetch detailed playlist metadata via `GET /playlists/{id}`.
     */
    id?: string;
    /**
     * High resolution image url of the playlist.
     */
    image?: string;
    /**
     * A list of playlist items.
     */
    items?: PlaylistItem[];
    /**
     * Passed to the **last_timestamp_ms** parameter of `GET /playlists/{id}` to paginate through items of that playlist.
     *
     * @remarks
     *
     */
    lastTimestampMs?: number;
    /**
     * The url of this playlist on ListenNotes.com.
     */
    listennotesUrl?: string;
    /**
     * Playlist name.
     */
    name?: string;
    /**
     * Low resolution image url of the playlist.
     */
    thumbnail?: string;
    /**
     * Total number of items in this playlist.
     */
    total?: number;
    /**
     * Total audio length of all episodes in this playlist, in seconds. It will have a valid value only when type is **episode_list**. In other words, it will be 0 if type is **podcast_list**.
     */
    totalAudioLengthSec?: number;
    /**
     * The type of this playlist, which should be either **episode_list** or **podcast_list**.
     *
     * @remarks
     *
     */
    type?: PlaylistResponseTypeEnum;
    /**
     * Visibility of this playlist.
     */
    visibility?: PlaylistVisibilityFieldEnum;
}
