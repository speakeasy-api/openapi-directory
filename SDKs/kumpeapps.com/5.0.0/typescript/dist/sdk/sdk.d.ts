import { Authentication } from "./authentication";
import { KKid } from "./kkid";
import * as shared from "./models/shared";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://restapi.kumpeapps.com/{version}", "https://restapi.preprod.kumpeapps.com/{version}"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
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
 * KKid API. Due to security concerns all calls to this API requires authentication. If you have access then you may use your KumpeApps username/password to authenticate. To gain access please use the contact developer link below.
 */
export declare class SDK {
    /**
     * KKid API Functions
     *
     * @see {@link https://github.com/kumpeapps/kkid}
     */
    kKid: KKid;
    /**
     * Authenticate KumpeApps users (required to get apiKey)
     */
    authentication: Authentication;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
