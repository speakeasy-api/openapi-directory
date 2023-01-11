import { AxiosInstance } from "axios";
import { Activities } from "./activities";
export declare const ServerList: readonly ["https://www.googleapis.com/appsactivity/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    activities: Activities;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
