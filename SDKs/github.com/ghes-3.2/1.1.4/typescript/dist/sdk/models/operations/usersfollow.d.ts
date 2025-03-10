import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UsersFollowRequest extends SpeakeasyBase {
    /**
     * The handle for the GitHub user account.
     */
    username: string;
}
export declare class UsersFollowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
}
