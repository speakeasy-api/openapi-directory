import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPlaylistsPlaylistIdTracksPathParams extends SpeakeasyBase {
    playlistId: number;
}
export declare class GetPlaylistsPlaylistIdTracksQueryParams extends SpeakeasyBase {
    access?: shared.AccessEnum[];
    linkedPartitioning?: boolean;
    secretToken?: string;
}
export declare class GetPlaylistsPlaylistIdTracksSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
    clientId: shared.SchemeClientId;
}
export declare class GetPlaylistsPlaylistIdTracksRequest extends SpeakeasyBase {
    pathParams: GetPlaylistsPlaylistIdTracksPathParams;
    queryParams: GetPlaylistsPlaylistIdTracksQueryParams;
    security: GetPlaylistsPlaylistIdTracksSecurity;
}
export declare class GetPlaylistsPlaylistIdTracksResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    getPlaylistsPlaylistIdTracks200ApplicationJSONOneOf?: any;
}
