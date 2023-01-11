import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteLikesPlaylistsPlaylistIdPathParams extends SpeakeasyBase {
    playlistId: number;
}
export declare class DeleteLikesPlaylistsPlaylistIdSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
}
export declare class DeleteLikesPlaylistsPlaylistIdRequest extends SpeakeasyBase {
    pathParams: DeleteLikesPlaylistsPlaylistIdPathParams;
    security: DeleteLikesPlaylistsPlaylistIdSecurity;
}
export declare class DeleteLikesPlaylistsPlaylistIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
