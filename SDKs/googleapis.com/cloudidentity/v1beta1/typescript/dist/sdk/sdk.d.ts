import { Customers } from "./customers";
import { Devices } from "./devices";
import { Groups } from "./groups";
import { InboundSamlSsoProfiles } from "./inboundsamlssoprofiles";
import { InboundSsoAssignments } from "./inboundssoassignments";
import { OrgUnits } from "./orgunits";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://cloudidentity.googleapis.com/"];
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
 * API for provisioning and managing identity resources.
 *
 * @see {@link https://cloud.google.com/identity/}
 */
export declare class SDK {
    customers: Customers;
    devices: Devices;
    groups: Groups;
    inboundSamlSsoProfiles: InboundSamlSsoProfiles;
    inboundSsoAssignments: InboundSsoAssignments;
    orgUnits: OrgUnits;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
