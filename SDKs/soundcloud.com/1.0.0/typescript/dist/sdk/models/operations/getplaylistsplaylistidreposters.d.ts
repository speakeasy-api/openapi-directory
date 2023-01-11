import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPlaylistsPlaylistIdRepostersPathParams extends SpeakeasyBase {
    playlistId: number;
}
export declare class GetPlaylistsPlaylistIdRepostersQueryParams extends SpeakeasyBase {
    limit?: number;
}
export declare class GetPlaylistsPlaylistIdRepostersSecurity extends SpeakeasyBase {
    clientId: shared.SchemeClientId;
}
export declare class GetPlaylistsPlaylistIdRepostersRequest extends SpeakeasyBase {
    pathParams: GetPlaylistsPlaylistIdRepostersPathParams;
    queryParams: GetPlaylistsPlaylistIdRepostersQueryParams;
    security: GetPlaylistsPlaylistIdRepostersSecurity;
}
export declare class GetPlaylistsPlaylistIdRepostersResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    metaUsers?: shared.MetaUsers;
    statusCode: number;
}
