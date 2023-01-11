import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRepostsPlaylistsPlaylistIdPathParams extends SpeakeasyBase {
    playlistId: number;
}
export declare class DeleteRepostsPlaylistsPlaylistIdSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
}
export declare class DeleteRepostsPlaylistsPlaylistIdRequest extends SpeakeasyBase {
    pathParams: DeleteRepostsPlaylistsPlaylistIdPathParams;
    security: DeleteRepostsPlaylistsPlaylistIdSecurity;
}
export declare class DeleteRepostsPlaylistsPlaylistIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
