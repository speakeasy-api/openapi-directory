import { AxiosInstance } from "axios";
import { CurrentGlobalTime } from "./currentglobaltime";
export declare const ServerList: readonly ["https://api.interzoid.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    currentGlobalTime: CurrentGlobalTime;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
