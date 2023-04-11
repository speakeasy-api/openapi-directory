import { Customers } from "./customers";
import { SearchAds360Fields } from "./searchads360fields";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://searchads360.googleapis.com/"];
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
 * The Search Ads 360 API allows developers to automate downloading reports from Search Ads 360.
 *
 * @see {@link https://developers.google.com/search-ads/reporting}
 */
export declare class SDK {
    customers: Customers;
    searchAds360Fields: SearchAds360Fields;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
