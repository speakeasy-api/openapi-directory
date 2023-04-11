import { Divisions } from "./divisions";
import { Elections } from "./elections";
import { Representatives } from "./representatives";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://civicinfo.googleapis.com/"];
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
 * Provides polling places, early vote locations, contest data, election officials, and government representatives for U.S. residential addresses.
 *
 * @see {@link https://developers.google.com/civic-information/}
 */
export declare class SDK {
    divisions: Divisions;
    elections: Elections;
    representatives: Representatives;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
