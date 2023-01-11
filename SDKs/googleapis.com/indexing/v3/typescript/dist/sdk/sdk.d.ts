import { AxiosInstance } from "axios";
import { UrlNotifications } from "./urlnotifications";
export declare const ServerList: readonly ["https://indexing.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    urlNotifications: UrlNotifications;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
