import { SpeakeasyBase } from "../../../internal/utils";
import { MetaUser } from "./metauser";
import { Track } from "./track";
/**
 * Soundcloud Playlist Object
 */
export declare class Playlist extends SpeakeasyBase {
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
     * SoundCloud User object.
     */
    label?: MetaUser;
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
     * Count of playlist likes.
     */
    likesCount?: number;
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
     * Tags.
     */
    tags?: string;
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
    tracks?: Track[];
    /**
     * tracks URI.
     */
    tracksUri?: string;
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
    user?: MetaUser;
    /**
     * User identifier.
     */
    userId?: number;
}
