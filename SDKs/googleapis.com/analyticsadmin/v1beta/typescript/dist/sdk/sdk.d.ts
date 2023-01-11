import { AxiosInstance } from "axios";
import { AccountSummaries } from "./accountsummaries";
import { Accounts } from "./accounts";
import { Properties } from "./properties";
export declare const ServerList: readonly ["https://analyticsadmin.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    accountSummaries: AccountSummaries;
    accounts: Accounts;
    properties: Properties;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
