import { Description } from "./description";
import { Query } from "./query";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.parliament.uk/search"];
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
 * Performs search on parliament.uk domain. Implements [OpenSearch specification](https://github.com/dewitt/opensearch). Throttled at 10 requests per second per IP address.
 *
 * @see {@link https://github.com/dewitt/opensearch} - OpenSearch github repository
 */
export declare class SDK {
    description: Description;
    query: Query;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
