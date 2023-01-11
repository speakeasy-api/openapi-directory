import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for ExchangeOauthToken
**/
export declare class GoogleIdentityStsV1ExchangeOauthTokenRequest extends SpeakeasyBase {
    clientId?: string;
    code?: string;
    codeVerifier?: string;
    grantType?: string;
    redirectUri?: string;
    refreshToken?: string;
    scope?: string;
}
