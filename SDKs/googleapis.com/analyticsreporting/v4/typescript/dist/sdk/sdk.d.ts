import { AxiosInstance } from "axios";
import { Reports } from "./reports";
import { UserActivity } from "./useractivity";
export declare const ServerList: readonly ["https://analyticsreporting.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    reports: Reports;
    userActivity: UserActivity;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
