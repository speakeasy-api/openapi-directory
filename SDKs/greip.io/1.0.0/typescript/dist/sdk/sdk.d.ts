import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://gregeoip.com", "https://dev.gregeoip.com"];
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
 * This documentation shows how to use Greip API, By highlighting the API methods, options and some other features that allow you to get the most of this API.
 *
 * @see {@link https://docs.greip.io} - Find more info here
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
     * BulkLookup endpoint: Returns the geolocation data of multiple IP Addresses.
     *
     * @see {@link https://docs.greip.io/methods/bulk-lookup} - Greip API - Bulk Lookup
     */
    getBulkLookup(req: operations.GetBulkLookupRequest, config?: AxiosRequestConfig): Promise<operations.GetBulkLookupResponse>;
    /**
     * Country endpoint: Returns the information of a specific country by passing the `countrCode`.
     *
     * @see {@link https://docs.greip.io/methods/country-data-api} - Greip API - Country Data API
     */
    getCountry(req: operations.GetCountryRequest, config?: AxiosRequestConfig): Promise<operations.GetCountryResponse>;
    /**
     * GeoIP endpoint: Returns the geolocation data of the visitor.
     *
     * @see {@link https://docs.greip.io/methods/retrieve-visitor-info} - Greip API - Retrieve Visitor Info
     */
    getGeoIP(req: operations.GetGeoIPRequest, config?: AxiosRequestConfig): Promise<operations.GetGeoIPResponse>;
    /**
     * IPLookup endpoint: Returns the geolocation data of a specific IP Address.
     *
     * @see {@link https://docs.greip.io/methods/lookup-ip-address} - Greip API - Lookup IP Address
     */
    getIPLookup(req: operations.GetIPLookupRequest, config?: AxiosRequestConfig): Promise<operations.GetIPLookupResponse>;
    /**
     * badWords endpoint: Detects whether user inputs contain profanity or not.
     *
     * @see {@link https://docs.greip.io/methods/profanity-detection} - Greip API - Profanity Detection
     */
    getBadWords(req: operations.GetBadWordsRequest, config?: AxiosRequestConfig): Promise<operations.GetBadWordsResponse>;
}
