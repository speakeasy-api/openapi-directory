import { Projects } from "./projects";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://redis.googleapis.com/"];
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
 * Creates and manages Redis instances on the Google Cloud Platform.
 *
 * @see {@link https://cloud.google.com/memorystore/docs/redis/}
 */
export declare class SDK {
    projects: Projects;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
