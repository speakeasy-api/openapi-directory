import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Events } from "./events";
export declare const ServerList: readonly ["http://api.nytimes.com/svc/semantic/v2/geocodes", "https://api.nytimes.com/svc/semantic/v2/geocodes"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    events: Events;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
