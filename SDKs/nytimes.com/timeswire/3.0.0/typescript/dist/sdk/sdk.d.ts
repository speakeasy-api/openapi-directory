import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
export declare const ServerList: readonly ["http://api.nytimes.com/svc/news/v3", "https://api.nytimes.com/svc/news/v3"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
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
    getContentJson(req: operations.GetContentJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetContentJsonResponse>;
    getContentSourceSectionJson(req: operations.GetContentSourceSectionJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetContentSourceSectionJsonResponse>;
    getContentSourceSectionTimePeriodJson(req: operations.GetContentSourceSectionTimePeriodJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetContentSourceSectionTimePeriodJsonResponse>;
}
