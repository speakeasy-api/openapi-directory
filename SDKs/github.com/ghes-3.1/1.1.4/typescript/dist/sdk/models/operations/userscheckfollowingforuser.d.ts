import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UsersCheckFollowingForUserRequest extends SpeakeasyBase {
    targetUser: string;
    /**
     * The handle for the GitHub user account.
     */
    username: string;
}
export declare class UsersCheckFollowingForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
