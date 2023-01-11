import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRepostsPlaylistsPlaylistIdPathParams extends SpeakeasyBase {
    playlistId: number;
}
export declare class PostRepostsPlaylistsPlaylistIdSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
}
export declare class PostRepostsPlaylistsPlaylistIdRequest extends SpeakeasyBase {
    pathParams: PostRepostsPlaylistsPlaylistIdPathParams;
    security: PostRepostsPlaylistsPlaylistIdSecurity;
}
export declare class PostRepostsPlaylistsPlaylistIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
