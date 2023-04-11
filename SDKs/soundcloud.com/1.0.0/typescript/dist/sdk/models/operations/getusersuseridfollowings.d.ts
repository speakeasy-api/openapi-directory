import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersUserIdFollowingsSecurity extends SpeakeasyBase {
    authHeader: string;
    clientId: string;
}
export declare class GetUsersUserIdFollowingsRequest extends SpeakeasyBase {
    /**
     * Number of results to return in the collection.
     */
    limit?: number;
    /**
     * SoundCloud User id
     */
    userId: number;
}
export declare class GetUsersUserIdFollowingsResponse extends SpeakeasyBase {
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
    getUsersUserIdFollowings200ApplicationJSONOneOf?: any;
}
