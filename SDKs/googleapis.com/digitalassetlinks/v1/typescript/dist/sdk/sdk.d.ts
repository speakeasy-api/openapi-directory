import { Assetlinks } from "./assetlinks";
import { Statements } from "./statements";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://digitalassetlinks.googleapis.com/"];
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
 * Discovers relationships between online assets such as websites or mobile apps.
 *
 * @see {@link https://developers.google.com/digital-asset-links/}
 */
export declare class SDK {
    assetlinks: Assetlinks;
    statements: Statements;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
