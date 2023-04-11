import { Accounts } from "./accounts";
import { Adclients } from "./adclients";
import { Associationsessions } from "./associationsessions";
import { Customchannels } from "./customchannels";
import { Reports } from "./reports";
import { Urlchannels } from "./urlchannels";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://www.googleapis.com/adsensehost/v4.1"];
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
 * Generates performance reports, generates ad codes, and provides publisher management capabilities for AdSense Hosts.
 *
 * @see {@link https://developers.google.com/adsense/host/}
 */
export declare class SDK {
    accounts: Accounts;
    adclients: Adclients;
    associationsessions: Associationsessions;
    customchannels: Customchannels;
    reports: Reports;
    urlchannels: Urlchannels;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
