import { AxiosInstance } from "axios";
import { V1Tax } from "./v1tax";
import { V3Tax } from "./v3tax";
export declare const ServerList: readonly ["https://api.taxrates.io/api"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    v1Tax: V1Tax;
    v3Tax: V3Tax;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
