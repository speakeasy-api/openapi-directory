import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutPlaylistsPlaylistIdPathParams extends SpeakeasyBase {
    playlistId: number;
}
export declare class PutPlaylistsPlaylistIdSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
}
/**
 * Soundcloud Track object.
**/
export declare class PutPlaylistsPlaylistId200ApplicationJsonTracks extends SpeakeasyBase {
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
export declare class PutPlaylistsPlaylistId200ApplicationJson extends SpeakeasyBase {
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
    tracks?: PutPlaylistsPlaylistId200ApplicationJsonTracks[];
    type?: string;
    uri?: string;
    user?: shared.MetaUser;
    userId?: number;
}
export declare class PutPlaylistsPlaylistIdRequest extends SpeakeasyBase {
    pathParams: PutPlaylistsPlaylistIdPathParams;
    request?: shared.CreateUpdatePlaylistRequest;
    security: PutPlaylistsPlaylistIdSecurity;
}
export declare class PutPlaylistsPlaylistIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    putPlaylistsPlaylistId200ApplicationJSONObject?: PutPlaylistsPlaylistId200ApplicationJson;
}
