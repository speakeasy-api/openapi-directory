import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["http://api.nytimes.com/svc/community/v3"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * getUserContentByDateJson - Comments by Date
    **/
    getUserContentByDateJson(req: operations.GetUserContentByDateJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetUserContentByDateJsonResponse>;
    /**
     * getUserContentRecentJson - Recent User Comments
    **/
    getUserContentRecentJson(req: operations.GetUserContentRecentJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetUserContentRecentJsonResponse>;
    /**
     * getUserContentUrlJson - Comments by URL
    **/
    getUserContentUrlJson(req: operations.GetUserContentUrlJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetUserContentUrlJsonResponse>;
    /**
     * getUserContentUserJson - Comments by User
    **/
    getUserContentUserJson(req: operations.GetUserContentUserJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetUserContentUserJsonResponse>;
}
