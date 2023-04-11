import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateUserRequest extends SpeakeasyBase {
    userUpdateContent?: shared.UserUpdateContent;
    /**
     * User ID
     */
    userId: number;
}
export declare class UpdateUserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * UserNotFound
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * User info
     */
    user?: shared.User;
}
