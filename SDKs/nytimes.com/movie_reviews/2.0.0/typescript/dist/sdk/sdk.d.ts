import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
export declare const ServerList: readonly ["http://api.nytimes.com/svc/movies/v2", "https://api.nytimes.com/svc/movies/v2"];
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
    getCriticsResourceTypeJson(req: operations.GetCriticsResourceTypeJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCriticsResourceTypeJsonResponse>;
    getReviewsSearchJson(req: operations.GetReviewsSearchJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetReviewsSearchJsonResponse>;
    getReviewsResourceTypeJson(req: operations.GetReviewsResourceTypeJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetReviewsResourceTypeJsonResponse>;
}
