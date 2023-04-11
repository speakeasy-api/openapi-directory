import { Balance } from "./balance";
import { Configuration } from "./configuration";
import { SecretManagement } from "./secretmanagement";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.nexmo.com"];
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
 * Enables users to manage their Vonage API Account by programmable means. More information is available here: <https://developer.nexmo.com/account/overview>.
 */
export declare class SDK {
    /**
     * This section shows how you can query the current balance of your account, and if you have auto-reload enabled how to trigger a top-up to your account without waiting for the next balance check.
     */
    balance: Balance;
    /**
     * Manage the settings on your account
     */
    configuration: Configuration;
    /**
     * Many of the Vonage APIs are accessed using an API key and secret. It is recommended that you change or "rotate" your secrets from time to time for security purposes. This section provides the API interface for achieving this.
     *
     * @remarks
     * Note: to work on secrets for your secondary accounts, you may authenticate with your primary credentials and supply the secondary API keys as URL parameters to these API endpoints.
     */
    secretManagement: SecretManagement;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
