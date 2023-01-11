import { AxiosInstance } from "axios";
import { Queries } from "./queries";
import { Reports } from "./reports";
export declare const ServerList: readonly ["https://doubleclickbidmanager.googleapis.com/doubleclickbidmanager/v1.1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    queries: Queries;
    reports: Reports;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
