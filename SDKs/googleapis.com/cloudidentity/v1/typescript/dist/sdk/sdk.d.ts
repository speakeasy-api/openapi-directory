import { AxiosInstance } from "axios";
import { Customers } from "./customers";
import { Devices } from "./devices";
import { Groups } from "./groups";
export declare const ServerList: readonly ["https://cloudidentity.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    customers: Customers;
    devices: Devices;
    groups: Groups;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
