import { AdditionalData } from "./additionaldata";
import { Filters } from "./filters";
import { Geocoding } from "./geocoding";
import * as shared from "./models/shared";
import { ReverseGeocoding } from "./reversegeocoding";
import { Search } from "./search";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.tomtom.com"];
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
 * Search API is a RESTful API that allows developers to run a single line fuzzy search for addresses and POIs. Search API returns the latitude/longitude of a specific address, cross street, geographic feature, or point of interest (POI).
 */
export declare class SDK {
    additionalData: AdditionalData;
    filters: Filters;
    geocoding: Geocoding;
    reverseGeocoding: ReverseGeocoding;
    search: Search;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
