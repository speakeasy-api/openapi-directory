import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMePlaylistsSecurity extends SpeakeasyBase {
    authHeader: string;
}
export declare class GetMePlaylistsRequest extends SpeakeasyBase {
    /**
     * Number of results to return in the collection.
     */
    limit?: number;
}
export declare class GetMePlaylistsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    error?: shared.ErrorT;
    /**
     * Success
     */
    playlistsArray?: shared.Playlist[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
