import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMeFollowersFollowerIdSecurity extends SpeakeasyBase {
    authHeader: string;
}
export declare class GetMeFollowersFollowerIdRequest extends SpeakeasyBase {
    /**
     * SoundCloud User id to denote a Follower
     */
    followerId: number;
}
export declare class GetMeFollowersFollowerIdResponse extends SpeakeasyBase {
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
    user?: shared.User;
}
