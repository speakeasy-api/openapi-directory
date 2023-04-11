import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTracksSecurity extends SpeakeasyBase {
    authHeader: string;
    clientId: string;
}
export declare class GetTracksRequest extends SpeakeasyBase {
    /**
     * Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.
     *
     * @remarks
     *
     */
    access?: shared.AccessEnum[];
    /**
     * Return tracks with a specified bpm[from], bpm[to]
     */
    bpm?: shared.Bpm;
    /**
     * (yyyy-mm-dd hh:mm:ss) return tracks created within the specified dates
     */
    createdAt?: shared.CreatedAt;
    /**
     * Return tracks within a specified duration range
     */
    duration?: shared.Duration;
    /**
     * A comma separated list of genres
     */
    genres?: string;
    /**
     * A comma separated list of track ids to filter on
     */
    ids?: string;
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
    /**
     * A comma separated list of tags
     */
    tags?: string;
}
export declare class GetTracksResponse extends SpeakeasyBase {
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
    getTracks200ApplicationJSONOneOf?: any;
}
