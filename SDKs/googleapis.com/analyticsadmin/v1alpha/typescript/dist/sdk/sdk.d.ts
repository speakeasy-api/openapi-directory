import { Accounts } from "./accounts";
import { AccountSummaries } from "./accountsummaries";
import { Properties } from "./properties";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://analyticsadmin.googleapis.com/"];
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
 *
 * @see {@link http://code.google.com/apis/analytics/docs/mgmt/home.html}
 */
export declare class SDK {
    accountSummaries: AccountSummaries;
    accounts: Accounts;
    properties: Properties;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
