import { Processes } from "./processes";
import { Projects } from "./projects";
import { Scripts } from "./scripts";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://script.googleapis.com/"];
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
 * Manages and executes Google Apps Script projects.
 *
 * @see {@link https://developers.google.com/apps-script/api/}
 */
export declare class SDK {
    processes: Processes;
    projects: Projects;
    scripts: Scripts;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
