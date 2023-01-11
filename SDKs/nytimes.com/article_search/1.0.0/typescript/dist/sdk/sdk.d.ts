import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Stories } from "./stories";
export declare const ServerList: readonly ["http://api.nytimes.com/svc/search/v2", "https://api.nytimes.com/svc/search/v2"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    stories: Stories;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
