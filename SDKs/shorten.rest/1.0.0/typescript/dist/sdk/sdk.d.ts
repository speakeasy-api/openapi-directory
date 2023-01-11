import { AxiosInstance } from "axios";
import { Alias } from "./alias";
import { Click } from "./click";
export declare const ServerList: readonly ["https://api.shorten.rest"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    alias: Alias;
    click: Click;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
