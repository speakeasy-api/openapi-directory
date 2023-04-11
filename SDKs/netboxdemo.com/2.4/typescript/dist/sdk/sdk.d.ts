import { Circuits } from "./circuits";
import { Dcim } from "./dcim";
import { Extras } from "./extras";
import { Ipam } from "./ipam";
import * as shared from "./models/shared";
import { Secrets } from "./secrets";
import { Tenancy } from "./tenancy";
import { Virtualization } from "./virtualization";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://netboxdemo.com/api"];
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
 * API to access NetBox
 */
export declare class SDK {
    circuits: Circuits;
    dcim: Dcim;
    extras: Extras;
    ipam: Ipam;
    secrets: Secrets;
    tenancy: Tenancy;
    virtualization: Virtualization;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
