import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersUserIdFavoritesSecurity extends SpeakeasyBase {
    authHeader: string;
    clientId: string;
}
export declare class GetUsersUserIdFavoritesRequest extends SpeakeasyBase {
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
export declare class GetUsersUserIdFavoritesResponse extends SpeakeasyBase {
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
    getUsersUserIdFavorites200ApplicationJSONOneOf?: any;
}
