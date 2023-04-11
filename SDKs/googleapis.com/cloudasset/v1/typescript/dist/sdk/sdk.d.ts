import { Assets } from "./assets";
import { EffectiveIamPolicies } from "./effectiveiampolicies";
import { Feeds } from "./feeds";
import { SavedQueries } from "./savedqueries";
import { V1 } from "./v1";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://cloudasset.googleapis.com/"];
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
 * The Cloud Asset API manages the history and inventory of Google Cloud resources.
 *
 * @see {@link https://cloud.google.com/asset-inventory/docs/quickstart}
 */
export declare class SDK {
    assets: Assets;
    effectiveIamPolicies: EffectiveIamPolicies;
    feeds: Feeds;
    savedQueries: SavedQueries;
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
