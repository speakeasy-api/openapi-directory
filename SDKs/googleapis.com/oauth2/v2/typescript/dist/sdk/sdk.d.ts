import * as operations from "./models/operations";
import { Userinfo } from "./userinfo";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://www.googleapis.com/"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Obtains end-user authorization grants for use with other Google APIs.
 *
 * @see {@link https://developers.google.com/identity/protocols/oauth2/}
 */
export declare class SDK {
    userinfo: Userinfo;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    oauth2Tokeninfo(req: operations.Oauth2TokeninfoRequest, config?: AxiosRequestConfig): Promise<operations.Oauth2TokeninfoResponse>;
}
