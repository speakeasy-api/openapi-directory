import { AxiosInstance } from "axios";
import { AmpUrls } from "./ampurls";
export declare const ServerList: readonly ["https://acceleratedmobilepageurl.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    ampUrls: AmpUrls;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
