import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersUserEmailRequest extends SpeakeasyBase {
    /**
     * user's email
     */
    userEmail: string;
}
export declare class GetUsersUserEmailResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * user data
     */
    userResponse?: shared.UserResponse;
}
