import { AxiosInstance } from "axios";
import { Sites } from "./sites";
import { ViolatingSites } from "./violatingsites";
export declare const ServerList: readonly ["https://adexperiencereport.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    sites: Sites;
    violatingSites: ViolatingSites;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
