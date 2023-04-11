import { Asps } from "./asps";
import { Channels } from "./channels";
import { Chromeosdevices } from "./chromeosdevices";
import { Customer } from "./customer";
import { Customers } from "./customers";
import { DomainAliases } from "./domainaliases";
import { Domains } from "./domains";
import { Groups } from "./groups";
import { Members } from "./members";
import { Mobiledevices } from "./mobiledevices";
import { Orgunits } from "./orgunits";
import { Privileges } from "./privileges";
import { Resources } from "./resources";
import { RoleAssignments } from "./roleassignments";
import { Roles } from "./roles";
import { Schemas } from "./schemas";
import { Tokens } from "./tokens";
import { TwoStepVerification } from "./twostepverification";
import { Users } from "./users";
import { VerificationCodes } from "./verificationcodes";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://admin.googleapis.com/"];
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
 * Admin SDK lets administrators of enterprise domains to view and manage resources like user, groups etc. It also provides audit and usage reports of domain.
 *
 * @see {@link https://developers.google.com/admin-sdk/}
 */
export declare class SDK {
    asps: Asps;
    channels: Channels;
    chromeosdevices: Chromeosdevices;
    customer: Customer;
    customers: Customers;
    domainAliases: DomainAliases;
    domains: Domains;
    groups: Groups;
    members: Members;
    mobiledevices: Mobiledevices;
    orgunits: Orgunits;
    privileges: Privileges;
    resources: Resources;
    roleAssignments: RoleAssignments;
    roles: Roles;
    schemas: Schemas;
    tokens: Tokens;
    twoStepVerification: TwoStepVerification;
    users: Users;
    verificationCodes: VerificationCodes;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
