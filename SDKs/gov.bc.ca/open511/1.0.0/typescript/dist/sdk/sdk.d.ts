import { AxiosInstance } from "axios";
import { Resources } from "./resources";
export declare const ServerList: readonly ["http://api.open511.gov.bc.ca/", "https://api.open511.gov.bc.ca/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    resources: Resources;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
