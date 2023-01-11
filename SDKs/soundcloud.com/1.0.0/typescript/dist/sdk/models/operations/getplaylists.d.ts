import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPlaylistsQueryParams extends SpeakeasyBase {
    access?: shared.AccessEnum[];
    limit?: number;
    linkedPartitioning?: boolean;
    offset?: number;
    q: string;
}
export declare class GetPlaylistsSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
    clientId: shared.SchemeClientId;
}
export declare class GetPlaylistsRequest extends SpeakeasyBase {
    queryParams: GetPlaylistsQueryParams;
    security: GetPlaylistsSecurity;
}
export declare class GetPlaylistsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    getPlaylists200ApplicationJSONOneOf?: any;
}
