import { Conversion } from "./conversion";
import { Reports } from "./reports";
import { SavedColumns } from "./savedcolumns";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://doubleclicksearch.googleapis.com/"];
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
 * The Search Ads 360 API allows developers to automate uploading conversions and downloading reports from Search Ads 360.
 *
 * @see {@link https://developers.google.com/search-ads}
 */
export declare class SDK {
    conversion: Conversion;
    reports: Reports;
    savedColumns: SavedColumns;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
