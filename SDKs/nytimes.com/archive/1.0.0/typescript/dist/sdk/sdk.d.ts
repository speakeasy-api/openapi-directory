import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Archive } from "./archive";
export declare const ServerList: readonly ["http://api.nytimes.com/svc/archive/v1", "https://api.nytimes.com/svc/archive/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    archive: Archive;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
