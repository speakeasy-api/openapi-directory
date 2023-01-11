import { AxiosInstance } from "axios";
import { Data } from "./data";
import { Management } from "./management";
export declare const ServerList: readonly ["https://www.googleapis.com/analytics/v2.4"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    data: Data;
    management: Management;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
