import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Groups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a group.
     */
    youtubeAnalyticsGroupsDelete(req: operations.YoutubeAnalyticsGroupsDeleteRequest, security: operations.YoutubeAnalyticsGroupsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeAnalyticsGroupsDeleteResponse>;
    /**
     * Creates a group.
     */
    youtubeAnalyticsGroupsInsert(req: operations.YoutubeAnalyticsGroupsInsertRequest, security: operations.YoutubeAnalyticsGroupsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeAnalyticsGroupsInsertResponse>;
    /**
     * Returns a collection of groups that match the API request parameters. For example, you can retrieve all groups that the authenticated user owns, or you can retrieve one or more groups by their unique IDs.
     */
    youtubeAnalyticsGroupsList(req: operations.YoutubeAnalyticsGroupsListRequest, security: operations.YoutubeAnalyticsGroupsListSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeAnalyticsGroupsListResponse>;
    /**
     * Modifies a group. For example, you could change a group's title.
     */
    youtubeAnalyticsGroupsUpdate(req: operations.YoutubeAnalyticsGroupsUpdateRequest, security: operations.YoutubeAnalyticsGroupsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeAnalyticsGroupsUpdateResponse>;
}
