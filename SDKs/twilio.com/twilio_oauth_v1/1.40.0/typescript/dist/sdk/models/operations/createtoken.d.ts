import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateTokenServerList: readonly ["https://oauth.twilio.com"];
export declare class CreateTokenSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateTokenCreateTokenRequest extends SpeakeasyBase {
    /**
     * The credential for confidential OAuth App.
     */
    clientSecret?: string;
    /**
     * A 34 character string that uniquely identifies this OAuth App.
     */
    clientSid: string;
    /**
     * JWT token related to the authorization code grant type.
     */
    code?: string;
    /**
     * A code which is generation cryptographically.
     */
    codeVerifier?: string;
    /**
     * JWT token related to the device code grant type.
     */
    deviceCode?: string;
    /**
     * The Id of the device associated with the token (refresh token).
     */
    deviceId?: string;
    /**
     * Grant type is a credential representing resource owner's authorization which can be used by client to obtain access token.
     */
    grantType: string;
    /**
     * JWT token related to the refresh token grant type.
     */
    refreshToken?: string;
}
export declare class CreateTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    oauthV1Token?: shared.OauthV1Token;
}
