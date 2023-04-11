import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchUsersUserEmailRequest extends SpeakeasyBase {
    user?: shared.User;
    /**
     * user's email
     */
    userEmail: string;
}
export declare class PatchUsersUserEmailResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * user updated
     */
    userResponse?: shared.UserResponse;
}
