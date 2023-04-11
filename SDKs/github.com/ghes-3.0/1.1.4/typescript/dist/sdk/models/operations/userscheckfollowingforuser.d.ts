import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UsersCheckFollowingForUserRequest extends SpeakeasyBase {
    targetUser: string;
    username: string;
}
export declare class UsersCheckFollowingForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
