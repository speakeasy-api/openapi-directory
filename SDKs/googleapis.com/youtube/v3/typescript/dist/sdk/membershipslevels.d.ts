import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MembershipsLevels {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves a list of all pricing levels offered by a creator to the fans.
     */
    youtubeMembershipsLevelsList(req: operations.YoutubeMembershipsLevelsListRequest, security: operations.YoutubeMembershipsLevelsListSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeMembershipsLevelsListResponse>;
}
