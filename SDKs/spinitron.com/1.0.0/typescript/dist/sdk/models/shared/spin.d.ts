import { SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
export declare class SpinLinks extends SpeakeasyBase {
    playlist?: Link;
    self?: Link;
}
/**
 * The new created Spin.
 */
export declare class Spin extends SpeakeasyBase {
    links?: SpinLinks;
    artist?: string;
    /**
     * Station-specific custom field relating to the song's artist
     */
    artistCustom?: string;
    /**
     * Reference number in the record label's catalog
     */
    catalogNumber?: string;
    /**
     * Is the track's metadata schema "classical" rather than "popular"?
     */
    classical?: boolean;
    composer?: string;
    /**
     * For classical music, conducor of the ensemble
     */
    conductor?: string;
    /**
     * Duration in seconds
     */
    duration?: number;
    /**
     * UTC datetime ISO-8601
     */
    end?: Date;
    /**
     * For classical music, orchestra, performing ensemble, choir, etc.
     */
    ensemble?: string;
    genre?: string;
    id?: number;
    /**
     * Cover art
     */
    image?: string;
    isrc?: string;
    iswc?: string;
    /**
     * Record label, i.e. publisher of the sound recording
     */
    label?: string;
    /**
     * Station-specific custom field relating to the record label
     */
    labelCustom?: string;
    /**
     * Is the artist local to the station?
     */
    local?: boolean;
    /**
     * Media format in which the sound recording was reased
     */
    medium?: string;
    /**
     * Is this a recent release?
     */
    new?: boolean;
    /**
     * HTML-formatted DJ annotation of the spin, can include images etc.
     */
    note?: string;
    /**
     * For classical music, featured performing artists, e.g. soloists
     */
    performers?: string;
    playlistId?: number;
    release?: string;
    /**
     * Station-specific custom field relating to the release
     */
    releaseCustom?: string;
    /**
     * Year of initial release
     */
    released?: number;
    /**
     * Was the spin requested by a listener?
     */
    request?: boolean;
    /**
     * Title of the song or track
     */
    song?: string;
    /**
     * UTC datetime ISO-8601
     */
    start?: Date;
    /**
     * Station's time zone
     */
    timezone?: string;
    /**
     * Universal Product Code of the release
     */
    upc?: string;
    /**
     * Is it a "Various Artists" release?
     */
    va?: boolean;
    /**
     * For classical music, the main compositional work the track (see `song` field) belongs to
     */
    work?: string;
}
