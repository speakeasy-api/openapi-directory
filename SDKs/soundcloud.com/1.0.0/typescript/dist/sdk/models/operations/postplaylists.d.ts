import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostPlaylistsSecurity extends SpeakeasyBase {
    authHeader: string;
}
/**
 * Soundcloud Track object.
 */
export declare class PostPlaylists201ApplicationJSONTracks extends SpeakeasyBase {
    /**
     * URL to a JPEG image.
     */
    artworkUrl?: string;
    /**
     * Tempo.
     */
    bpm?: number;
    /**
     * Number of comments.
     */
    commentCount?: number;
    /**
     * Is commentable.
     */
    commentable?: boolean;
    /**
     * Created timestamp.
     */
    createdAt?: string;
    /**
     * Track description.
     */
    description?: string;
    /**
     * NUmber of downloads.
     */
    downloadCount?: number;
    /**
     * Is downloadable.
     */
    downloadable?: string;
    /**
     * Track duration.
     */
    duration?: number;
    /**
     * Embeddable by.
     */
    embeddableBy?: string;
    /**
     * Number of favoritings.
     */
    favoritingsCount?: number;
    /**
     * Genre
     */
    genre?: string;
    /**
     * Track identifier.
     */
    id?: number;
    /**
     * ISRC code.
     */
    isrc?: string;
    /**
     * Key signature.
     */
    keySignature?: string;
    /**
     * Type of object (track).
     */
    kind?: string;
    /**
     * Label user name.
     */
    labelName?: string;
    /**
     * License
     */
    license?: string;
    /**
     * Permalink URL.
     */
    permalinkUrl?: string;
    /**
     * Number of plays.
     */
    playbackCount?: number;
    /**
     * Purchase title.
     */
    purchaseTitle?: string;
    /**
     * Purchase URL.
     */
    purchaseUrl?: string;
    /**
     * Release.
     */
    release?: string;
    /**
     * Day of release.
     */
    releaseDay?: number;
    /**
     * Month of release.
     */
    releaseMonth?: number;
    /**
     * Year of release.
     */
    releaseYear?: number;
    /**
     * Type of sharing (public/private).
     */
    sharing?: string;
    /**
     * URL to stream.
     */
    streamUrl?: string;
    /**
     * Is streamable.
     */
    streamable?: boolean;
    /**
     * Tags.
     */
    tagList?: string;
    /**
     * Track title.
     */
    title?: string;
    /**
     * Track URI.
     */
    uri?: string;
    /**
     * SoundCloud User object.
     */
    user?: shared.MetaUser;
    /**
     * Is user's favourite.
     */
    userFavorite?: boolean;
    /**
     * Number of plays by a user.
     */
    userPlaybackCount?: number;
    /**
     * Waveform URL.
     */
    waveformUrl?: string;
}
/**
 * Soundcloud Playlist Object
 */
export declare class PostPlaylists201ApplicationJSON extends SpeakeasyBase {
    /**
     * URL to a JPEG image.
     */
    artworkUrl?: string;
    /**
     * Created timestamp.
     */
    createdAt?: string;
    /**
     * Playlist description.
     */
    description?: string;
    /**
     * is downloadable.
     */
    downloadable?: boolean;
    /**
     * Playlist duration.
     */
    duration?: number;
    /**
     * European Article Number.
     */
    ean?: string;
    /**
     * Embeddable by.
     */
    embeddableBy?: string;
    /**
     * Playlist genre.
     */
    genre?: string;
    /**
     * Playlist identifier.
     */
    id?: number;
    /**
     * Type of Soundcloud object (playlist).
     */
    kind?: string;
    /**
     * Label user identifier.
     */
    labelId?: number;
    /**
     * Label name.
     */
    labelName?: string;
    /**
     * Last modified timestamp.
     */
    lastModified?: string;
    /**
     * License.
     */
    license?: string;
    /**
     * Playlist permalink.
     */
    permalink?: string;
    /**
     * Playlist permalink URL.
     */
    permalinkUrl?: string;
    /**
     * Type of playlist.
     */
    playlistType?: string;
    /**
     * Purchase title.
     */
    purchaseTitle?: string;
    /**
     * Purchase URL.
     */
    purchaseUrl?: string;
    /**
     * Release.
     */
    release?: string;
    /**
     * Day of release.
     */
    releaseDay?: number;
    /**
     * Month of release.
     */
    releaseMonth?: number;
    /**
     * Year of release.
     */
    releaseYear?: number;
    /**
     * Type of sharing (private/public).
     */
    sharing?: string;
    /**
     * Is streamable.
     */
    streamable?: boolean;
    /**
     * Tags.
     */
    tagList?: string;
    /**
     * Playlist title.
     */
    title?: string;
    /**
     * Count of tracks.
     */
    trackCount?: number;
    /**
     * List of tracks.
     */
    tracks?: PostPlaylists201ApplicationJSONTracks[];
    /**
     * Playlist type.
     */
    type?: string;
    /**
     * Playlist URI.
     */
    uri?: string;
    /**
     * SoundCloud User object.
     */
    user?: shared.MetaUser;
    /**
     * User identifier.
     */
    userId?: number;
}
export declare class PostPlaylistsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    postPlaylists201ApplicationJSONObject?: PostPlaylists201ApplicationJSON;
}
