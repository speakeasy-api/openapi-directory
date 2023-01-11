import { AxiosInstance } from "axios";
import { Alerts } from "./alerts";
import { V1beta1 } from "./v1beta1";
export declare const ServerList: readonly ["https://alertcenter.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    alerts: Alerts;
    v1beta1: V1beta1;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
