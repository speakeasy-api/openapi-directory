import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Agents } from "./agents";
import { ApplicationDocuments } from "./applicationdocuments";
import { Applications } from "./applications";
import { BankAccounts } from "./bankaccounts";
import { CoveragePlans } from "./coverageplans";
import { Dependents } from "./dependents";
import { Employees } from "./employees";
import { GroupConfigurationContacts } from "./groupconfigurationcontacts";
import { GroupConfigurationLocations } from "./groupconfigurationlocations";
import { GroupCoverages } from "./groupcoverages";
import { Groups } from "./groups";
import { MemberElections } from "./memberelections";
export declare const ServerList: readonly ["https://group-installation.noyo.com", "https://group-installation-sandbox.noyo.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    agents: Agents;
    applicationDocuments: ApplicationDocuments;
    applications: Applications;
    bankAccounts: BankAccounts;
    coveragePlans: CoveragePlans;
    dependents: Dependents;
    employees: Employees;
    groupConfigurationContacts: GroupConfigurationContacts;
    groupConfigurationLocations: GroupConfigurationLocations;
    groupCoverages: GroupCoverages;
    groups: Groups;
    memberElections: MemberElections;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * ping - Ping Endpoint
     *
     * Returns a simple OK message with a 200 status code
    **/
    ping(config?: AxiosRequestConfig): Promise<operations.PingResponse>;
}
