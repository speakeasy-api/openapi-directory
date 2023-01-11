import { AxiosInstance } from "axios";
import { V1 } from "./v1";
import { V2 } from "./v2";
export declare const ServerList: readonly ["https://ote-godaddy.com//api.ote-godaddy.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    v1: V1;
    v2: V2;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
