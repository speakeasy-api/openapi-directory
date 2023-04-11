import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAccessTokenSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetAccessTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Authentication response
     */
    token?: shared.Token;
    /**
     * Authentication error - for vendor auth, it will also fail if their account is not approved yet. In that case, the error response will include "account_status" key.
     */
    tokenError?: shared.TokenError;
}
