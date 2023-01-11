import { SpeakeasyBase } from "../../../internal/utils";
import { Album } from "./album";
import { Artist } from "./artist";
import { AudioAssets } from "./audioassets";
import { Contributor } from "./contributor";
import { ModelRelease } from "./modelrelease";
/**
 * Audio metadata
**/
export declare class Audio extends SpeakeasyBase {
    addedDate?: Date;
    affiliateUrl?: string;
    album?: Album;
    artists?: Artist[];
    assets?: AudioAssets;
    bpm?: number;
    contributor: Contributor;
    deletedTime?: Date;
    description?: string;
    duration?: number;
    genres?: string[];
    id: string;
    instruments?: string[];
    isAdult?: boolean;
    isInstrumental?: boolean;
    isrc?: string;
    keywords?: string[];
    language?: string;
    lyrics?: string;
    mediaType: string;
    modelReleases?: ModelRelease[];
    moods?: string[];
    publishedTime?: Date;
    recordingVersion?: string;
    releases?: string[];
    similarArtists?: Artist[];
    submittedTime?: Date;
    title?: string;
    updatedTime?: Date;
    url?: string;
    vocalDescription?: string;
}
