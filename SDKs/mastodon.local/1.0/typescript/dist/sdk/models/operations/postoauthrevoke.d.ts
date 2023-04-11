import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostOauthRevokeRequestBody extends SpeakeasyBase {
    /**
     * Client ID, obtained during app registration
     */
    clientId: string;
    /**
     * Client secret, obtained during app registration
     */
    clientSecret: string;
    /**
     * The previously obtained token, to be invalidated
     */
    token: string;
}
export declare class PostOauthRevokeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * If you provide a token you do not own, or no token at all, the API call will return a 403 error.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
