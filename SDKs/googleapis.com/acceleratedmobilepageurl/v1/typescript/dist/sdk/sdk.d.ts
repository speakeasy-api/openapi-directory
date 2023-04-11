import { AmpUrls } from "./ampurls";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://acceleratedmobilepageurl.googleapis.com/"];
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
 * Retrieves the list of AMP URLs (and equivalent AMP Cache URLs) for a given list of public URL(s).
 *
 * @see {@link https://developers.google.com/amp/cache/}
 */
export declare class SDK {
    ampUrls: AmpUrls;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
