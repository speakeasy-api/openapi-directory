import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersUserIdPlaylistsPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class GetUsersUserIdPlaylistsQueryParams extends SpeakeasyBase {
    access?: shared.AccessEnum[];
    limit?: number;
    linkedPartitioning?: boolean;
}
export declare class GetUsersUserIdPlaylistsSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
    clientId: shared.SchemeClientId;
}
export declare class GetUsersUserIdPlaylistsRequest extends SpeakeasyBase {
    pathParams: GetUsersUserIdPlaylistsPathParams;
    queryParams: GetUsersUserIdPlaylistsQueryParams;
    security: GetUsersUserIdPlaylistsSecurity;
}
export declare class GetUsersUserIdPlaylistsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    getUsersUserIdPlaylists200ApplicationJSONOneOf?: any;
}
