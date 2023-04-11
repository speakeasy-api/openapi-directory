import { Call } from "./call";
import { Conference } from "./conference";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://raw.github.com/rtckit/media/master/eqivo/readme-splash.png"];
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
 * Eqivo OpenApi Specification
 */
export declare class SDK {
    /**
     * API methods responsible for spawning and manipulating individual calls
     */
    call: Call;
    /**
     * API methods responsible for managing conference rooms
     */
    conference: Conference;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
