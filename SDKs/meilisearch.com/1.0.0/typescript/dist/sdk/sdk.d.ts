import { Documents } from "./documents";
import { Dumps } from "./dumps";
import { Indexes } from "./indexes";
import { KeyManagement } from "./keymanagement";
import { Search } from "./search";
import { Settings } from "./settings";
import { Stats } from "./stats";
import { SubRoutes } from "./subroutes";
import { Tasks } from "./tasks";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://localhost:7700/"];
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
export declare class SDK {
    documents: Documents;
    dumps: Dumps;
    indexes: Indexes;
    keyManagement: KeyManagement;
    search: Search;
    settings: Settings;
    stats: Stats;
    subRoutes: SubRoutes;
    tasks: Tasks;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
