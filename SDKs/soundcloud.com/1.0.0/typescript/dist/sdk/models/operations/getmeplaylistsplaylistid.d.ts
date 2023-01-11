import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMePlaylistsPlaylistIdPathParams extends SpeakeasyBase {
    playlistId: number;
}
export declare class GetMePlaylistsPlaylistIdSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
}
export declare class GetMePlaylistsPlaylistIdRequest extends SpeakeasyBase {
    pathParams: GetMePlaylistsPlaylistIdPathParams;
    security: GetMePlaylistsPlaylistIdSecurity;
}
export declare class GetMePlaylistsPlaylistIdResponse extends SpeakeasyBase {
    contentType: string;
    playlist?: shared.Playlist;
    statusCode: number;
}
