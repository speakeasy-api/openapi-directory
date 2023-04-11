import { Accounts } from "./accounts";
import { Adclients } from "./adclients";
import { Adunits } from "./adunits";
import { Alerts } from "./alerts";
import { Customchannels } from "./customchannels";
import { Metadata } from "./metadata";
import { Payments } from "./payments";
import { Reports } from "./reports";
import { Savedadstyles } from "./savedadstyles";
import { Urlchannels } from "./urlchannels";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://www.googleapis.com/adsense/v1.4"];
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
 * Accesses AdSense publishers' inventory and generates performance reports.
 *
 * @see {@link https://developers.google.com/adsense/management/}
 */
export declare class SDK {
    accounts: Accounts;
    adclients: Adclients;
    adunits: Adunits;
    alerts: Alerts;
    customchannels: Customchannels;
    metadata: Metadata;
    payments: Payments;
    reports: Reports;
    savedadstyles: Savedadstyles;
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
