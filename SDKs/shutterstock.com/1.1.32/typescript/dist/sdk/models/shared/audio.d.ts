import { SpeakeasyBase } from "../../../internal/utils";
import { Album } from "./album";
import { Artist } from "./artist";
import { AudioAssets } from "./audioassets";
import { Contributor } from "./contributor";
import { ModelRelease } from "./modelrelease";
/**
 * Audio metadata
 */
export declare class Audio extends SpeakeasyBase {
    /**
     * Date this track was added to the Shutterstock library
     */
    addedDate?: Date;
    /**
     * Affiliate referral link; appears only for registered affiliate partners
     */
    affiliateUrl?: string;
    /**
     * Album metadata
     */
    album?: Album;
    /**
     * List of artists
     */
    artists?: Artist[];
    /**
     * Files that are available as part of an audio asset
     */
    assets?: AudioAssets;
    /**
     * BPM (beats per minute) of this track
     */
    bpm?: number;
    /**
     * Information about a contributor
     */
    contributor: Contributor;
    deletedTime?: Date;
    /**
     * Description of this track
     */
    description?: string;
    /**
     * Duration of this track in seconds
     */
    duration?: number;
    /**
     * List of all genres for this track
     */
    genres?: string[];
    /**
     * Shutterstock ID of this track
     */
    id: string;
    /**
     * List of all instruments that appear in this track
     */
    instruments?: string[];
    /**
     * Whether or not this track contains adult content
     */
    isAdult?: boolean;
    /**
     * Whether or not this track is purely instrumental (lacking lyrics)
     */
    isInstrumental?: boolean;
    isrc?: string;
    /**
     * List of all keywords for this track
     */
    keywords?: string[];
    /**
     * Language of this track's lyrics
     */
    language?: string;
    /**
     * Lyrics of this track
     */
    lyrics?: string;
    /**
     * Media type of this track; should always be "audio"
     */
    mediaType: string;
    /**
     * List of all model releases for this track
     */
    modelReleases?: ModelRelease[];
    /**
     * List of all moods of this track
     */
    moods?: string[];
    /**
     * Time this track was published
     */
    publishedTime?: Date;
    /**
     * Recording version of this track
     */
    recordingVersion?: string;
    /**
     * List of all releases of this track
     */
    releases?: string[];
    /**
     * List of all similar artists of this track
     */
    similarArtists?: Artist[];
    /**
     * Time this track was submitted
     */
    submittedTime?: Date;
    /**
     * Title of this track
     */
    title?: string;
    /**
     * Time this track was last updated
     */
    updatedTime?: Date;
    url?: string;
    /**
     * Vocal description of this track
     */
    vocalDescription?: string;
}
