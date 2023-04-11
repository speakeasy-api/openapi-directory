import { Archive } from "./archive";
import * as shared from "./models/shared";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://api.nytimes.com/svc/archive/v1", "https://api.nytimes.com/svc/archive/v1"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
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
 * The Archive API provides lists of NYT articles by month going back to 1851.  You can use it to build your own local database of NYT article metadata.
 *
 * @see {@link http://developer.nytimes.com/}
 */
export declare class SDK {
    archive: Archive;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
