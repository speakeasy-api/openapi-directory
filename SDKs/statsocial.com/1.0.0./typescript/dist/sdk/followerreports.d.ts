import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FollowerReports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getReportsTwitterCreate - Used to create twitter follower report
     *
     * This report uses the twitter followers as the audience. To create custom or tweet reports other methods must be used. Any report older than two days will be automatically regenerated upon create.
     *
    **/
    getReportsTwitterCreate(req: operations.GetReportsTwitterCreateRequest, config?: AxiosRequestConfig): Promise<operations.GetReportsTwitterCreateResponse>;
    /**
     * postReportsTwitterCreate - Used to create twitter follower report
     *
     * This report uses the twitter followers as the audience. To create custom or tweet reports other methods must be used. Any report older than two days will be automatically regenerated upon create.
     *
    **/
    postReportsTwitterCreate(req: operations.PostReportsTwitterCreateRequest, config?: AxiosRequestConfig): Promise<operations.PostReportsTwitterCreateResponse>;
}
