import { AxiosInstance } from "axios";
import { Terraintiles } from "./terraintiles";
export declare const ServerList: readonly ["https://vectortile.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    terraintiles: Terraintiles;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
