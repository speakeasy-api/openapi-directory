import { Changes } from "./changes";
import { DnsKeys } from "./dnskeys";
import { ManagedZoneOperations } from "./managedzoneoperations";
import { ManagedZones } from "./managedzones";
import { Policies } from "./policies";
import { Projects } from "./projects";
import { ResourceRecordSets } from "./resourcerecordsets";
import { ResponsePolicies } from "./responsepolicies";
import { ResponsePolicyRules } from "./responsepolicyrules";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://dns.googleapis.com/"];
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
 * @see {@link https://cloud.google.com/dns/docs}
 */
export declare class SDK {
    changes: Changes;
    dnsKeys: DnsKeys;
    managedZoneOperations: ManagedZoneOperations;
    managedZones: ManagedZones;
    policies: Policies;
    projects: Projects;
    resourceRecordSets: ResourceRecordSets;
    responsePolicies: ResponsePolicies;
    responsePolicyRules: ResponsePolicyRules;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
