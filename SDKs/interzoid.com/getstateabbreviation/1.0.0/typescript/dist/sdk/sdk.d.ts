import { StateDataStandardization } from "./statedatastandardization";
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
 * This API provides the two-letter state abbreviation (or the province abbreviation for Canada) for the purposes of standardizing state name data, improving query results, analytics, and data merging.
 *
 * @see {@link https://www.interzoid.com/services/getstateabbreviation} - API home page and documentation
 */
export declare class SDK {
    stateDataStandardization: StateDataStandardization;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
