import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersUserIdTracksSecurity extends SpeakeasyBase {
    authHeader: string;
    clientId: string;
}
export declare class GetUsersUserIdTracksRequest extends SpeakeasyBase {
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
     * SoundCloud User id
     */
    userId: number;
}
export declare class GetUsersUserIdTracksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    getUsersUserIdTracks200ApplicationJSONOneOf?: any;
}
