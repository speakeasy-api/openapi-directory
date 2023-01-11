import { AxiosInstance } from "axios";
import { Customers } from "./customers";
import { Resellernotify } from "./resellernotify";
import { Subscriptions } from "./subscriptions";
export declare const ServerList: readonly ["https://reseller.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    customers: Customers;
    resellernotify: Resellernotify;
    subscriptions: Subscriptions;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
