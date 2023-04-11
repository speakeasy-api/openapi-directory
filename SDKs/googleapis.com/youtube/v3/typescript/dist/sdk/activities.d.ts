import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Activities {
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
    youtubeActivitiesList(req: operations.YoutubeActivitiesListRequest, security: operations.YoutubeActivitiesListSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeActivitiesListResponse>;
}
