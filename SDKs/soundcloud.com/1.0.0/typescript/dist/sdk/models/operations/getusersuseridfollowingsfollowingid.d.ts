import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersUserIdFollowingsFollowingIdSecurity extends SpeakeasyBase {
    authHeader: string;
    clientId: string;
}
export declare class GetUsersUserIdFollowingsFollowingIdRequest extends SpeakeasyBase {
    /**
     * SoundCloud User id to denote a Following of a user
     */
    followingId: number;
    /**
     * SoundCloud User id
     */
    userId: number;
}
export declare class GetUsersUserIdFollowingsFollowingIdResponse extends SpeakeasyBase {
    /**
     * Success
     */
    completeUser?: shared.CompleteUser;
    contentType: string;
    /**
     * Unauthorized
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
