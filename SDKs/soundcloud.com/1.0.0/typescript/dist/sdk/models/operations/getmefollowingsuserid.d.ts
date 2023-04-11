import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMeFollowingsUserIdSecurity extends SpeakeasyBase {
    authHeader: string;
}
export declare class GetMeFollowingsUserIdRequest extends SpeakeasyBase {
    /**
     * SoundCloud User id
     */
    userId: number;
}
export declare class GetMeFollowingsUserIdResponse extends SpeakeasyBase {
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
