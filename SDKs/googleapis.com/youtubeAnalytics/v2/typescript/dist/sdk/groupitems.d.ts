import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class GroupItems {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Removes an item from a group.
     */
    youtubeAnalyticsGroupItemsDelete(req: operations.YoutubeAnalyticsGroupItemsDeleteRequest, security: operations.YoutubeAnalyticsGroupItemsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeAnalyticsGroupItemsDeleteResponse>;
    /**
     * Creates a group item.
     */
    youtubeAnalyticsGroupItemsInsert(req: operations.YoutubeAnalyticsGroupItemsInsertRequest, security: operations.YoutubeAnalyticsGroupItemsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeAnalyticsGroupItemsInsertResponse>;
    /**
     * Returns a collection of group items that match the API request parameters.
     */
    youtubeAnalyticsGroupItemsList(req: operations.YoutubeAnalyticsGroupItemsListRequest, security: operations.YoutubeAnalyticsGroupItemsListSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeAnalyticsGroupItemsListResponse>;
}
