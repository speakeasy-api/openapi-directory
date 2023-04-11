import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class OAuth {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * ObtainToken
     *
     * @remarks
     * Returns an OAuth access token.
     *
     * The endpoint supports distinct methods of obtaining OAuth access tokens.
     * Applications specify a method by adding the `grant_type` parameter
     * in the request and also provide relevant information.
     *
     * __Note:__ Regardless of the method application specified,
     * the endpoint always returns two items; an OAuth access token and
     * a refresh token in the response.
     *
     * __OAuth tokens should only live on secure servers. Application clients
     * should never interact directly with OAuth tokens__.
     */
    obtainToken(req: shared.ObtainTokenRequest, config?: AxiosRequestConfig): Promise<operations.ObtainTokenResponse>;
    /**
     * RenewToken
     *
     * @remarks
     * `RenewToken` is deprecated. For information about refreshing OAuth access tokens, see
     * [Migrate from Renew to Refresh OAuth Tokens](https://developer.squareup.com/docs/oauth-api/migrate-to-refresh-tokens).
     *
     *
     * Renews an OAuth access token before it expires.
     *
     * OAuth access tokens besides your application's personal access token expire after __30 days__.
     * You can also renew expired tokens within __15 days__ of their expiration.
     * You cannot renew an access token that has been expired for more than 15 days.
     * Instead, the associated user must re-complete the OAuth flow from the beginning.
     *
     * __Important:__ The `Authorization` header for this endpoint must have the
     * following format:
     *
     * ```
     * Authorization: Client APPLICATION_SECRET
     * ```
     *
     * Replace `APPLICATION_SECRET` with the application secret on the Credentials
     * page in the [developer dashboard](https://developer.squareup.com/apps).
     */
    renewToken(req: operations.RenewTokenRequest, security: operations.RenewTokenSecurity, config?: AxiosRequestConfig): Promise<operations.RenewTokenResponse>;
    /**
     * RevokeToken
     *
     * @remarks
     * Revokes an access token generated with the OAuth flow.
     *
     * If an account has more than one OAuth access token for your application, this
     * endpoint revokes all of them, regardless of which token you specify. When an
     * OAuth access token is revoked, all of the active subscriptions associated
     * with that OAuth token are canceled immediately.
     *
     * __Important:__ The `Authorization` header for this endpoint must have the
     * following format:
     *
     * ```
     * Authorization: Client APPLICATION_SECRET
     * ```
     *
     * Replace `APPLICATION_SECRET` with the application secret on the OAuth
     * page in the [developer dashboard](https://developer.squareup.com/apps).
     */
    revokeToken(req: shared.RevokeTokenRequest, security: operations.RevokeTokenSecurity, config?: AxiosRequestConfig): Promise<operations.RevokeTokenResponse>;
}
