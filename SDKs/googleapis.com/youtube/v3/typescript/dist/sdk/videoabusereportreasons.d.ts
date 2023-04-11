import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class VideoAbuseReportReasons {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves a list of resources, possibly filtered.
     */
    youtubeVideoAbuseReportReasonsList(req: operations.YoutubeVideoAbuseReportReasonsListRequest, security: operations.YoutubeVideoAbuseReportReasonsListSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeVideoAbuseReportReasonsListResponse>;
}
