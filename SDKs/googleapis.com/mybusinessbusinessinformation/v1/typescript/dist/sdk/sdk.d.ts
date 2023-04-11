import { Accounts } from "./accounts";
import { Attributes } from "./attributes";
import { Categories } from "./categories";
import { Chains } from "./chains";
import { GoogleLocations } from "./googlelocations";
import { Locations } from "./locations";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://mybusinessbusinessinformation.googleapis.com/"];
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
 * The My Business Business Information API provides an interface for managing business information. Note - If you have a quota of 0 after enabling the API, please request for GBP API access.
 *
 * @see {@link https://developers.google.com/my-business/}
 */
export declare class SDK {
    accounts: Accounts;
    attributes: Attributes;
    categories: Categories;
    chains: Chains;
    googleLocations: GoogleLocations;
    locations: Locations;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
