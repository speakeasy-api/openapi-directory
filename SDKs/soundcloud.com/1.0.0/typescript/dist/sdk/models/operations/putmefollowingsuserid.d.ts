import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutMeFollowingsUserIdSecurity extends SpeakeasyBase {
    authHeader: string;
}
export declare class PutMeFollowingsUserIdRequest extends SpeakeasyBase {
    /**
     * SoundCloud User id
     */
    userId: number;
}
export declare class PutMeFollowingsUserIdResponse extends SpeakeasyBase {
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
