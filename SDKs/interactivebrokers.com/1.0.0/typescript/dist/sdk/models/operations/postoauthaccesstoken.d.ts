import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * OAuth Parameters
 */
export declare class PostOauthAccessTokenRequestBody extends SpeakeasyBase {
    /**
     * The 25-character hexadecimal string that was obtained from Interactive Brokers during the OAuth consumer registration process.
     */
    oauthConsumerKey?: string;
    /**
     * A random string uniquely generated for each request.
     */
    oauthNonce?: string;
    /**
     * The signature for the request generated using the method specified in the oauth_signature_method parameter. See section 9 of the OAuth v1.0a specification for more details on signing requests.
     */
    oauthSignature?: string;
    /**
     * The signature method used to sign the request. Currently only 'RSA-SHA256' is supported.
     */
    oauthSignatureMethod?: string;
    /**
     * Timestamp expressed in seconds since 1/1/1970 00:00:00 GMT. Must be a positive integer and greater than or equal to any timestamp used in previous requests.
     */
    oauthTimestamp?: string;
    /**
     * The request token obtained from IB via /request_token.
     */
    oauthToken?: string;
    /**
     * The verification code received from IB after the user has granted authorization.
     */
    oauthVerifier?: string;
}
/**
 * Access token and token secret
 */
export declare class PostOauthAccessToken200ApplicationJSON extends SpeakeasyBase {
    oauthToken?: string;
    oauthTokenSecret?: string;
}
export declare class PostOauthAccessTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Access token and token secret
     */
    postOauthAccessToken200ApplicationJSONObject?: PostOauthAccessToken200ApplicationJSON;
}
