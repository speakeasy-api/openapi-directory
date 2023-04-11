import { Customers } from "./customers";
import { Installer } from "./installer";
import { Nodes } from "./nodes";
import { Policies } from "./policies";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://sasportal.googleapis.com/"];
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
 * @see {@link https://developers.google.com/spectrum-access-system/}
 */
export declare class SDK {
    customers: Customers;
    installer: Installer;
    nodes: Nodes;
    policies: Policies;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
