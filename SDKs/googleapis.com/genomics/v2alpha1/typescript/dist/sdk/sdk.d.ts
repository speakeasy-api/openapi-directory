import { Pipelines } from "./pipelines";
import { Projects } from "./projects";
import { Workers } from "./workers";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://genomics.googleapis.com/"];
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
 * Uploads, processes, queries, and searches Genomics data in the cloud.
 *
 * @see {@link https://cloud.google.com/genomics}
 */
export declare class SDK {
    pipelines: Pipelines;
    projects: Projects;
    workers: Workers;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
