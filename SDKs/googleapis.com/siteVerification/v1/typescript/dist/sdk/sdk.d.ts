import { AxiosInstance } from "axios";
import { WebResource } from "./webresource";
export declare const ServerList: readonly ["https://www.googleapis.com/siteVerification/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    webResource: WebResource;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
