import { Pagespeedapi } from "./pagespeedapi";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://www.googleapis.com/pagespeedonline/v4"];
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
 * Analyzes the performance of a web page and provides tailored suggestions to make that page faster.
 *
 * @see {@link https://developers.google.com/speed/docs/insights/v4/getting-started}
 */
export declare class SDK {
    pagespeedapi: Pagespeedapi;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
