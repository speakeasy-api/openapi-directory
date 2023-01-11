import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeletePlaylistsPlaylistIdPathParams extends SpeakeasyBase {
    playlistId: number;
}
export declare class DeletePlaylistsPlaylistIdSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
    clientId: shared.SchemeClientId;
}
export declare class DeletePlaylistsPlaylistIdRequest extends SpeakeasyBase {
    pathParams: DeletePlaylistsPlaylistIdPathParams;
    security: DeletePlaylistsPlaylistIdSecurity;
}
export declare class DeletePlaylistsPlaylistIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
