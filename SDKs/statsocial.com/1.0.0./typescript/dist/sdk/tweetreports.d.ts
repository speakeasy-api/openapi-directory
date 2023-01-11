import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TweetReports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getReportsTweetCreate - Used to create tweet reports
     *
     * This report details the audience of the users who have tweeted content that matches what was provided in the keywords. To create custom or twitter reports other methods must be used.
     *
    **/
    getReportsTweetCreate(req: operations.GetReportsTweetCreateRequest, config?: AxiosRequestConfig): Promise<operations.GetReportsTweetCreateResponse>;
    /**
     * postReportsTweetCreate - Used to create tweet reports
     *
     * This report details the audience of the users who have tweeted content that matches what was provided in the keywords. To create custom or twitter reports other methods must be used.
     *
    **/
    postReportsTweetCreate(req: operations.PostReportsTweetCreateRequest, config?: AxiosRequestConfig): Promise<operations.PostReportsTweetCreateResponse>;
}
