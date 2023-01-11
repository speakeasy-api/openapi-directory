import { AxiosInstance } from "axios";
import { Facilities } from "./facilities";
export declare const ServerList: readonly ["https://sandbox-api.va.gov/services/va_facilities/{version}", "https://api.va.gov/services/va_facilities/{version}"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    facilities: Facilities;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
