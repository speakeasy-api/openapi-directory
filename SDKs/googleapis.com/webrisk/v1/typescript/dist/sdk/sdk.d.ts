import { Hashes } from "./hashes";
import { Projects } from "./projects";
import { ThreatLists } from "./threatlists";
import { Uris } from "./uris";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://webrisk.googleapis.com/"];
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
 *
 * @see {@link https://cloud.google.com/web-risk/}
 */
export declare class SDK {
    hashes: Hashes;
    projects: Projects;
    threatLists: ThreatLists;
    uris: Uris;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
