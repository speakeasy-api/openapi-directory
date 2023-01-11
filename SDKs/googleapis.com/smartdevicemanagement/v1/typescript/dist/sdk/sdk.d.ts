import { AxiosInstance } from "axios";
import { Enterprises } from "./enterprises";
export declare const ServerList: readonly ["https://smartdevicemanagement.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    enterprises: Enterprises;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
