import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Routing } from "./routing";
export declare const ServerList: readonly ["https://api.tomtom.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    routing: Routing;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
