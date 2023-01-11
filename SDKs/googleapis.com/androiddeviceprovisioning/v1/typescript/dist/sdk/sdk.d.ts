import { AxiosInstance } from "axios";
import { Customers } from "./customers";
import { Partners } from "./partners";
export declare const ServerList: readonly ["https://androiddeviceprovisioning.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    customers: Customers;
    partners: Partners;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
