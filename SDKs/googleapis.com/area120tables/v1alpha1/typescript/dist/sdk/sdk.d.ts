import { AxiosInstance } from "axios";
import { Tables } from "./tables";
import { Workspaces } from "./workspaces";
export declare const ServerList: readonly ["https://area120tables.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    tables: Tables;
    workspaces: Workspaces;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
