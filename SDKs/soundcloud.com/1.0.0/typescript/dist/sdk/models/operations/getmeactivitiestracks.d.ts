import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMeActivitiesTracksSecurity extends SpeakeasyBase {
    authHeader: string;
}
export declare class GetMeActivitiesTracksRequest extends SpeakeasyBase {
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
}
export declare class GetMeActivitiesTracksResponse extends SpeakeasyBase {
    /**
     * Success
     */
    activities?: shared.Activities;
    contentType: string;
    /**
     * Unauthorized
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
