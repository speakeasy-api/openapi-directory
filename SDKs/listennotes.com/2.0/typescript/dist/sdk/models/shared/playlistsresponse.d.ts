import { SpeakeasyBase } from "../../../internal/utils";
import { PlaylistVisibilityFieldEnum } from "./playlistvisibilityfieldenum";
/**
 * A playlist
 */
export declare class PlaylistsResponsePlaylists extends SpeakeasyBase {
    /**
     * Playlist description.
     */
    description?: string;
    /**
     * The number of episodes (including custom audio) in this playlist.
     */
    episodeCount?: number;
    /**
     * A 11-character playlist id, which can be used to further fetch detailed playlist metadata via `GET /playlists/{id}`.
     */
    id?: string;
    /**
     * High resolution image url of the playlist.
     */
    image?: string;
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
     * The number of podcasts in this playlist.
     */
    podcastCount?: number;
    /**
     * Low resolution image url of the playlist.
     */
    thumbnail?: string;
    /**
     * Total audio length of all episodes in this playlist, in seconds.
     */
    totalAudioLengthSec?: number;
    /**
     * Visibility of this playlist.
     */
    visibility?: PlaylistVisibilityFieldEnum;
}
/**
 * OK
 */
export declare class PlaylistsResponse extends SpeakeasyBase {
    hasNext?: boolean;
    hasPrevious?: boolean;
    nextPageNumber?: number;
    pageNumber?: number;
    playlists?: PlaylistsResponsePlaylists[];
    previousPageNumber?: number;
    total?: number;
}
