import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://oauth.twilio.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * This is the public Twilio REST API.
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Issues a new Access token (optionally identity_token & refresh_token) in exchange of Oauth grant
     */
    createDeviceCode(req: operations.CreateDeviceCodeCreateDeviceCodeRequest, security: operations.CreateDeviceCodeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateDeviceCodeResponse>;
    /**
     * Issues a new Access token (optionally identity_token & refresh_token) in exchange of Oauth grant
     */
    createToken(req: operations.CreateTokenCreateTokenRequest, security: operations.CreateTokenSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateTokenResponse>;
    /**
     * Fetches public JWKs
     */
    fetchCerts(serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchCertsResponse>;
    /**
     * Fetch configuration details about the OpenID Connect Authorization Server
     */
    fetchOpenidDiscovery(serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchOpenidDiscoveryResponse>;
    /**
     * Retrieves the consented UserInfo and other claims about the logged-in subject (end-user).
     */
    fetchUserInfo(serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchUserInfoResponse>;
}
