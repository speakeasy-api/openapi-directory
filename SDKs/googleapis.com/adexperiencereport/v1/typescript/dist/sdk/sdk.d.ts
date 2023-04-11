import { Sites } from "./sites";
import { ViolatingSites } from "./violatingsites";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://adexperiencereport.googleapis.com/"];
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
 * Views Ad Experience Report data, and gets a list of sites that have a significant number of annoying ads.
 *
 * @see {@link https://developers.google.com/ad-experience-report/}
 */
export declare class SDK {
    sites: Sites;
    violatingSites: ViolatingSites;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
