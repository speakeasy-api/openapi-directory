import { AxiosInstance } from "axios";
import { Forms } from "./forms";
export declare const ServerList: readonly ["https://sandbox-api.va.gov/services/va_forms/{version}", "https://api.va.gov/services/va_forms/{version}"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    forms: Forms;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
