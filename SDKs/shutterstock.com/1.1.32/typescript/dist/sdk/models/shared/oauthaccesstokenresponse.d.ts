import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Access token response to client apps
 */
export declare class OauthAccessTokenResponse extends SpeakeasyBase {
    /**
     * Access token that can be used for future requests
     */
    accessToken: string;
    /**
     * Number of seconds before token expires, only present for expiring tokens
     */
    expiresIn?: number;
    /**
     * A refresh token that can be used to renew the access_token when it expires, only present for expiring tokens
     */
    refreshToken?: string;
    /**
     * Type of token
     */
    tokenType: string;
    /**
     * Metadata about the access_token, only present for expiring tokens
     */
    userToken?: string;
}
