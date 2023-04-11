import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMeLikesTracksSecurity extends SpeakeasyBase {
    authHeader: string;
}
export declare class GetMeLikesTracksRequest extends SpeakeasyBase {
    /**
     * Number of results to return in the collection.
     */
    limit?: number;
    /**
     * Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)
     */
    linkedPartitioning?: boolean;
}
export declare class GetMeLikesTracksResponse extends SpeakeasyBase {
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
    getMeLikesTracks200ApplicationJSONOneOf?: any;
}
