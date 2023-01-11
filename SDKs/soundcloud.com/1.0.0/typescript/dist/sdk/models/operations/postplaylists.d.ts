import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostPlaylistsSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
}
/**
 * Soundcloud Track object.
**/
export declare class PostPlaylists201ApplicationJsonTracks extends SpeakeasyBase {
    artworkUrl?: string;
    bpm?: number;
    commentCount?: number;
    commentable?: boolean;
    createdAt?: string;
    description?: string;
    downloadCount?: number;
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
    sharing?: string;
    streamUrl?: string;
    streamable?: boolean;
    tagList?: string;
    title?: string;
    uri?: string;
    user?: shared.MetaUser;
    userFavorite?: boolean;
    userPlaybackCount?: number;
    waveformUrl?: string;
}
/**
 * Soundcloud Playlist Object
**/
export declare class PostPlaylists201ApplicationJson extends SpeakeasyBase {
    artworkUrl?: string;
    createdAt?: string;
    description?: string;
    downloadable?: boolean;
    duration?: number;
    ean?: string;
    embeddableBy?: string;
    genre?: string;
    id?: number;
    kind?: string;
    labelId?: number;
    labelName?: string;
    lastModified?: string;
    license?: string;
    permalink?: string;
    permalinkUrl?: string;
    playlistType?: string;
    purchaseTitle?: string;
    purchaseUrl?: string;
    release?: string;
    releaseDay?: number;
    releaseMonth?: number;
    releaseYear?: number;
    sharing?: string;
    streamable?: boolean;
    tagList?: string;
    title?: string;
    trackCount?: number;
    tracks?: PostPlaylists201ApplicationJsonTracks[];
    type?: string;
    uri?: string;
    user?: shared.MetaUser;
    userId?: number;
}
export declare class PostPlaylistsRequest extends SpeakeasyBase {
    request?: shared.CreateUpdatePlaylistRequest;
    security: PostPlaylistsSecurity;
}
export declare class PostPlaylistsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    postPlaylists201ApplicationJSONObject?: PostPlaylists201ApplicationJson;
}
