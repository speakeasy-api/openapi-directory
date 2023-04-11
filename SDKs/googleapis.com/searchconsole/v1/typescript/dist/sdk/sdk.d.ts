import { Searchanalytics } from "./searchanalytics";
import { Sitemaps } from "./sitemaps";
import { Sites } from "./sites";
import { UrlInspection } from "./urlinspection";
import { UrlTestingTools } from "./urltestingtools";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://searchconsole.googleapis.com/"];
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
 * The Search Console API provides access to both Search Console data (verified users only) and to public information on an URL basis (anyone)
 *
 * @see {@link https://developers.google.com/webmaster-tools/search-console-api/}
 */
export declare class SDK {
    searchanalytics: Searchanalytics;
    sitemaps: Sitemaps;
    sites: Sites;
    urlInspection: UrlInspection;
    urlTestingTools: UrlTestingTools;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
