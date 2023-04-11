import { SpeakeasyBase } from "../../../internal/utils";
import { MetaUser } from "./metauser";
/**
 * Level of access the user (logged in or anonymous) has to the track.
 *
 * @remarks
 *   * `playable` - user is allowed to listen to a full track.
 *   * `preview` - user is allowed to preview a track, meaning a snippet is available
 *   * `blocked` - user can only see the metadata of a track, no streaming is possible
 *
 */
export declare enum TrackAccessEnum {
    Playable = "playable",
    Preview = "preview",
    Blocked = "blocked",
    Null = "null"
}
/**
 * Soundcloud Track object.
 */
export declare class Track extends SpeakeasyBase {
    /**
     * Level of access the user (logged in or anonymous) has to the track.
     *
     * @remarks
     *   * `playable` - user is allowed to listen to a full track.
     *   * `preview` - user is allowed to preview a track, meaning a snippet is available
     *   * `blocked` - user can only see the metadata of a track, no streaming is possible
     *
     */
    access?: TrackAccessEnum;
    /**
     * URL to a JPEG image.
     */
    artworkUrl?: string;
    /**
     * List of countries where track is available.
     */
    availableCountryCodes?: string;
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
     * URL to download a track.
     */
    downloadUrl?: string;
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
     * Number of reposts.
     */
    repostsCount?: number;
    /**
     * Secret URL.
     */
    secretUri?: string;
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
    user?: MetaUser;
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
