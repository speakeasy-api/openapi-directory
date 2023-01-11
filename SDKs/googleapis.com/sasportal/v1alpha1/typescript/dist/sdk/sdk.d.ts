import { AxiosInstance } from "axios";
import { Customers } from "./customers";
import { Installer } from "./installer";
import { Nodes } from "./nodes";
import { Policies } from "./policies";
export declare const ServerList: readonly ["https://sasportal.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    customers: Customers;
    installer: Installer;
    nodes: Nodes;
    policies: Policies;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
