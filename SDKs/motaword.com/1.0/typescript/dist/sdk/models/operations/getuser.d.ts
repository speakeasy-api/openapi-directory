import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserSecurity extends SpeakeasyBase {
    mwoAuth: string;
}
export declare class GetUserRequest extends SpeakeasyBase {
    /**
     * User ID
     */
    userId: number;
}
export declare class GetUserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * UserNotFound
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * User summary
     */
    user?: shared.User;
}
