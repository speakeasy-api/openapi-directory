import { AxiosInstance } from "axios";
import { Account } from "./account";
import { CiscoSntc } from "./ciscosntc";
import { Export } from "./export";
import { Organization } from "./organization";
import { Public } from "./public";
import { ServiceNow } from "./servicenow";
import { Splunk } from "./splunk";
export declare const ServerList: readonly ["https://console.rumble.run/api/v1.0"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    account: Account;
    ciscoSNTC: CiscoSntc;
    export: Export;
    organization: Organization;
    public: Public;
    serviceNow: ServiceNow;
    splunk: Splunk;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
