import { AxiosInstance } from "axios";
import { Developers } from "./developers";
export declare const ServerList: readonly ["https://analytics.redeal.io/api/1.0.0"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    developers: Developers;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
