import { SpeakeasyBase } from "../../../internal/utils";
import { MetaUser } from "./metauser";
export declare enum TrackAccessEnum {
    Playable = "playable",
    Preview = "preview",
    Blocked = "blocked",
    Null = "null"
}
/**
 * Soundcloud Track object.
**/
export declare class Track extends SpeakeasyBase {
    access?: TrackAccessEnum;
    artworkUrl?: string;
    availableCountryCodes?: string;
    bpm?: number;
    commentCount?: number;
    commentable?: boolean;
    createdAt?: string;
    description?: string;
    downloadCount?: number;
    downloadUrl?: string;
    downloadable?: string;
    duration?: number;
    embeddableBy?: string;
    favoritingsCount?: number;
    genre?: string;
    id?: number;
    isrc?: string;
    keySignature?: string;
    kind?: string;
    labelName?: string;
    license?: string;
    permalinkUrl?: string;
    playbackCount?: number;
    purchaseTitle?: string;
    purchaseUrl?: string;
    release?: string;
    releaseDay?: number;
    releaseMonth?: number;
    releaseYear?: number;
    repostsCount?: number;
    secretUri?: string;
    sharing?: string;
    streamUrl?: string;
    streamable?: boolean;
    tagList?: string;
    title?: string;
    uri?: string;
    user?: MetaUser;
    userFavorite?: boolean;
    userPlaybackCount?: number;
    waveformUrl?: string;
}
