import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The access token represents the authorization of a specific application to access specific parts of a user’s data.
 */
export declare class GoogleCloudIntegrationsV1alphaAccessToken extends SpeakeasyBase {
    /**
     * The access token encapsulating the security identity of a process or thread.
     */
    accessToken?: string;
    /**
     * Required. The approximate time until the access token retrieved is valid.
     */
    accessTokenExpireTime?: string;
    /**
     * If the access token will expire, use the refresh token to obtain another access token.
     */
    refreshToken?: string;
    /**
     * The approximate time until the refresh token retrieved is valid.
     */
    refreshTokenExpireTime?: string;
    /**
     * Only support "bearer" token in v1 as bearer token is the predominant type used with OAuth 2.0.
     */
    tokenType?: string;
}
