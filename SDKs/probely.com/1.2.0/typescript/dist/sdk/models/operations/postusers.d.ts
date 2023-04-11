import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostUsersRequestBodyInput extends SpeakeasyBase {
    /**
     * User's email (changing this resets the user's password and revokes existing tokens)
     */
    email: string;
    /**
     * User's name
     */
    name: string;
    title?: shared.UserTitleEnum;
}
export declare class PostUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * User object
     */
    user?: shared.User;
}
