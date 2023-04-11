import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * OAuth Parameters
 */
export declare class PostOauthLiveSessionTokenRequestBody extends SpeakeasyBase {
    /**
     * Challenge value calculated using the Diffie-Hellman prime and generated provided during the registration process. See the "OAuth at Interactive Brokers" document for more details.
     *
     * @remarks
     *
     */
    diffieHellmanChallenge?: string;
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
}
/**
 * DH response
 */
export declare class PostOauthLiveSessionToken200ApplicationJSON extends SpeakeasyBase {
    diffieHellmanResponse?: string;
    liveSessionTokenSignature?: string;
}
export declare class PostOauthLiveSessionTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * DH response
     */
    postOauthLiveSessionToken200ApplicationJSONObject?: PostOauthLiveSessionToken200ApplicationJSON;
}
