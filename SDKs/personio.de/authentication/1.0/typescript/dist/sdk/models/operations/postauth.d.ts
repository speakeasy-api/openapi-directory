import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostAuthRequest extends SpeakeasyBase {
    /**
     * Client id of the downloaded credentials file
     */
    clientId: string;
    /**
     * Client secret of the downloaded credentials file
     */
    clientSecret: string;
}
export declare class PostAuthResponse extends SpeakeasyBase {
    authenticationTokenResponse?: shared.AuthenticationTokenResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
