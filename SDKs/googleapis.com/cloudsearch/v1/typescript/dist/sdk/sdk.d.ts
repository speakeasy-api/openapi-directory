import { Debug } from "./debug";
import { Indexing } from "./indexing";
import { Media } from "./media";
import { Operations } from "./operations";
import { Query } from "./query";
import { Settings } from "./settings";
import { Stats } from "./stats";
import { V1 } from "./v1";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://cloudsearch.googleapis.com/"];
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
 * Cloud Search provides cloud-based search capabilities over Google Workspace data. The Cloud Search API allows indexing of non-Google Workspace data into Cloud Search.
 *
 * @see {@link https://developers.google.com/cloud-search/docs/guides/}
 */
export declare class SDK {
    debug: Debug;
    indexing: Indexing;
    media: Media;
    operations: Operations;
    query: Query;
    settings: Settings;
    stats: Stats;
    v1: V1;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
