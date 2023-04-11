import { Resources } from "./resources";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://api.open511.gov.bc.ca/", "https://api.open511.gov.bc.ca/"];
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
 * This API is DriveBC's implementation of the Open511 specification.  It provides information about known road events (traffic accidents, construction, etc.) in British Columbia, Canada.  Please note that you may experience issues when submitting requests to the delivery or test environment if using this [OpenAPI specification](https://github.com/bcgov/api-specs) in other API console viewers.
 *
 * @see {@link http://api.open511.gov.bc.ca/help} - Additional API Documentation
 */
export declare class SDK {
    resources: Resources;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
