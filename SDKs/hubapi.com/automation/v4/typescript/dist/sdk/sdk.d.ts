import { Callbacks } from "./callbacks";
import { Definitions } from "./definitions";
import { Functions } from "./functions";
import { Revisions } from "./revisions";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.hubapi.com/"];
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
 * Create custom workflow actions
 */
export declare class SDK {
    /**
     * Operations to complete callbacks for custom workflow actions.
     */
    callbacks: Callbacks;
    /**
     * Operations to configure custom workflow actions.
     */
    definitions: Definitions;
    /**
     * Operations to configure the functions associated with custom workflow actions.
     */
    functions: Functions;
    /**
     * Operations to retrieve the revisions for custom workflow actions.
     */
    revisions: Revisions;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
