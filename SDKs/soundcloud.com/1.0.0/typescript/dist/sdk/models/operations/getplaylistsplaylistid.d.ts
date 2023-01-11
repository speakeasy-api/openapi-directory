import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPlaylistsPlaylistIdPathParams extends SpeakeasyBase {
    playlistId: number;
}
export declare class GetPlaylistsPlaylistIdQueryParams extends SpeakeasyBase {
    access?: shared.AccessEnum[];
    secretToken?: string;
}
export declare class GetPlaylistsPlaylistIdSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
    clientId: shared.SchemeClientId;
}
export declare class GetPlaylistsPlaylistIdRequest extends SpeakeasyBase {
    pathParams: GetPlaylistsPlaylistIdPathParams;
    queryParams: GetPlaylistsPlaylistIdQueryParams;
    security: GetPlaylistsPlaylistIdSecurity;
}
export declare class GetPlaylistsPlaylistIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    playlist?: shared.Playlist;
    statusCode: number;
}
