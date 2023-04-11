import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Members {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves a list of members that match the request criteria for a channel.
     */
    youtubeMembersList(req: operations.YoutubeMembersListRequest, security: operations.YoutubeMembersListSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeMembersListResponse>;
}
