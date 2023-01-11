import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMePlaylistsQueryParams extends SpeakeasyBase {
    limit?: number;
}
export declare class GetMePlaylistsSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
}
export declare class GetMePlaylistsRequest extends SpeakeasyBase {
    queryParams: GetMePlaylistsQueryParams;
    security: GetMePlaylistsSecurity;
}
export declare class GetMePlaylistsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    playlistsArray?: shared.Playlist[];
    statusCode: number;
}
