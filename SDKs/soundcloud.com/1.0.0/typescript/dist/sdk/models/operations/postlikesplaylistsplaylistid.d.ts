import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostLikesPlaylistsPlaylistIdPathParams extends SpeakeasyBase {
    playlistId: number;
}
export declare class PostLikesPlaylistsPlaylistIdSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
}
export declare class PostLikesPlaylistsPlaylistIdRequest extends SpeakeasyBase {
    pathParams: PostLikesPlaylistsPlaylistIdPathParams;
    security: PostLikesPlaylistsPlaylistIdSecurity;
}
export declare class PostLikesPlaylistsPlaylistIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    tooManyRequests?: shared.TooManyRequests;
}
