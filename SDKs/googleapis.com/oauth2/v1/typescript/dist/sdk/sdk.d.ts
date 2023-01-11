import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Userinfo } from "./userinfo";
export declare const ServerList: readonly ["https://www.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    userinfo: Userinfo;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * oauth2Tokeninfo - Get token info
    **/
    oauth2Tokeninfo(req: operations.Oauth2TokeninfoRequest, config?: AxiosRequestConfig): Promise<operations.Oauth2TokeninfoResponse>;
}
