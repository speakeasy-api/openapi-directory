import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPlaylistsSecurity extends SpeakeasyBase {
    authHeader: string;
    clientId: string;
}
export declare class GetPlaylistsRequest extends SpeakeasyBase {
    /**
     * Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.
     *
     * @remarks
     *
     */
    access?: shared.AccessEnum[];
    /**
     * Number of results to return in the collection.
     */
    limit?: number;
    /**
     * Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)
     */
    linkedPartitioning?: boolean;
    /**
     * Offset of first result. Deprecated, use `linked_partitioning` instead.
     */
    offset?: number;
    /**
     * search
     */
    q: string;
}
export declare class GetPlaylistsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    getPlaylists200ApplicationJSONOneOf?: any;
}
