import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class FollowerReports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Used to create twitter follower report
     *
     * @remarks
     * This report uses the twitter followers as the audience. To create custom or tweet reports other methods must be used. Any report older than two days will be automatically regenerated upon create.
     *
     */
    getReportsTwitterCreate(req: operations.GetReportsTwitterCreateRequest, config?: AxiosRequestConfig): Promise<operations.GetReportsTwitterCreateResponse>;
    /**
     * Used to create twitter follower report
     *
     * @remarks
     * This report uses the twitter followers as the audience. To create custom or tweet reports other methods must be used. Any report older than two days will be automatically regenerated upon create.
     *
     */
    postReportsTwitterCreate(req: operations.PostReportsTwitterCreateRequest, config?: AxiosRequestConfig): Promise<operations.PostReportsTwitterCreateResponse>;
}
