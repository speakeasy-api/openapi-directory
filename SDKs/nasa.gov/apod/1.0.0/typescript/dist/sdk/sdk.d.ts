import { AxiosInstance } from "axios";
import { RequestTag } from "./requesttag";
export declare const ServerList: readonly ["https://api.nasa.gov/planetary", "http://api.nasa.gov/planetary"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    requestTag: RequestTag;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
