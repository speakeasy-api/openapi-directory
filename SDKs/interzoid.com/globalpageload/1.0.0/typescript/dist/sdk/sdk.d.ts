import { PageLoadPerformanceTime } from "./pageloadperformancetime";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.interzoid.com"];
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
 * This API provides a timed, browser-simulated page load function (or a measured API call) from the specified geography using a server from that geography.
 *
 * @see {@link https://www.interzoid.com/services/globalpageload} - API home page and documentation
 */
export declare class SDK {
    pageLoadPerformanceTime: PageLoadPerformanceTime;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
