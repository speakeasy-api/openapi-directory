import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class OAuth {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postOauthAccessToken - Obtain a access token
     *
     * Obtain an access token using the request token and the verification code you received after the user provided authorization. See section 6.3 of the OAuth v1.0a specification for more details.
     *
    **/
    postOauthAccessToken(req: operations.PostOauthAccessTokenRequest, config?: AxiosRequestConfig): Promise<operations.PostOauthAccessTokenResponse>;
    /**
     * postOauthLiveSessionToken - Obtain a live session token
     *
     * In order to access protected IB resources, a live session token is required. This endpoint allows consumers to obtain a live session token to access these resources using an OAuth access token and the Diffie-Hellman prime and generator supplied during the registration process.
     * Note this is an additional IB-specific step, and not part of the OAuth v1.0a specification. Please refer to the "OAuth at Interactive Brokers" document for more details.  https://www.interactivebrokers.com/webtradingapi/oauth.pdf
     *
    **/
    postOauthLiveSessionToken(req: operations.PostOauthLiveSessionTokenRequest, config?: AxiosRequestConfig): Promise<operations.PostOauthLiveSessionTokenResponse>;
    /**
     * postOauthRequestToken - Obtain a request token
     *
     * Obtain a request token. See section 6.1 of the OAuth v1.0a specification for more information. http://oauth.net/core/1.0a/#auth_step1
     *
     * Note we do not return an oauth_token_secret in the response as we are using RSA signatures rather than PLAINTEXT authentication.
     *
    **/
    postOauthRequestToken(req: operations.PostOauthRequestTokenRequest, config?: AxiosRequestConfig): Promise<operations.PostOauthRequestTokenResponse>;
}
