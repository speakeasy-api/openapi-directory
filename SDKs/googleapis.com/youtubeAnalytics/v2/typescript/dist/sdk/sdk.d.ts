import { GroupItems } from "./groupitems";
import { Groups } from "./groups";
import { Reports } from "./reports";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://youtubeanalytics.googleapis.com/"];
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
 * Retrieves your YouTube Analytics data.
 *
 * @see {@link https://developers.google.com/youtube/analytics}
 */
export declare class SDK {
    groupItems: GroupItems;
    groups: Groups;
    reports: Reports;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
