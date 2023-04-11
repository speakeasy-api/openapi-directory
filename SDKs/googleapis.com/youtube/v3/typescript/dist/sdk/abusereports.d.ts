import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AbuseReports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Inserts a new resource into this collection.
     */
    youtubeAbuseReportsInsert(req: operations.YoutubeAbuseReportsInsertRequest, security: operations.YoutubeAbuseReportsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeAbuseReportsInsertResponse>;
}
