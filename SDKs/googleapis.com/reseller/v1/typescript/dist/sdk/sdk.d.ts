import { Customers } from "./customers";
import { Resellernotify } from "./resellernotify";
import { Subscriptions } from "./subscriptions";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://reseller.googleapis.com/"];
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
 * Perform common functions that are available on the Channel Services console at scale, like placing orders and viewing customer information
 *
 * @see {@link https://developers.google.com/google-apps/reseller/}
 */
export declare class SDK {
    customers: Customers;
    resellernotify: Resellernotify;
    subscriptions: Subscriptions;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
