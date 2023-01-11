import { AxiosInstance } from "axios";
import { BillingAccounts } from "./billingaccounts";
export declare const ServerList: readonly ["https://billingbudgets.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    billingAccounts: BillingAccounts;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
