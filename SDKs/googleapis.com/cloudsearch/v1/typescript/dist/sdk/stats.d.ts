import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Stats {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets indexed item statistics aggreggated across all data sources. This API only returns statistics for previous dates; it doesn't return statistics for the current day. **Note:** This API requires a standard end user account to execute.
     */
    cloudsearchStatsGetIndex(req: operations.CloudsearchStatsGetIndexRequest, security: operations.CloudsearchStatsGetIndexSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsearchStatsGetIndexResponse>;
    /**
     * Get the query statistics for customer. **Note:** This API requires a standard end user account to execute.
     */
    cloudsearchStatsGetQuery(req: operations.CloudsearchStatsGetQueryRequest, security: operations.CloudsearchStatsGetQuerySecurity, config?: AxiosRequestConfig): Promise<operations.CloudsearchStatsGetQueryResponse>;
    /**
     * Get search application stats for customer. **Note:** This API requires a standard end user account to execute.
     */
    cloudsearchStatsGetSearchapplication(req: operations.CloudsearchStatsGetSearchapplicationRequest, security: operations.CloudsearchStatsGetSearchapplicationSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsearchStatsGetSearchapplicationResponse>;
    /**
     * Get the # of search sessions, % of successful sessions with a click query statistics for customer. **Note:** This API requires a standard end user account to execute.
     */
    cloudsearchStatsGetSession(req: operations.CloudsearchStatsGetSessionRequest, security: operations.CloudsearchStatsGetSessionSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsearchStatsGetSessionResponse>;
    /**
     * Get the users statistics for customer. **Note:** This API requires a standard end user account to execute.
     */
    cloudsearchStatsGetUser(req: operations.CloudsearchStatsGetUserRequest, security: operations.CloudsearchStatsGetUserSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsearchStatsGetUserResponse>;
    /**
     * Gets indexed item statistics for a single data source. **Note:** This API requires a standard end user account to execute.
     */
    cloudsearchStatsIndexDatasourcesGet(req: operations.CloudsearchStatsIndexDatasourcesGetRequest, security: operations.CloudsearchStatsIndexDatasourcesGetSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsearchStatsIndexDatasourcesGetResponse>;
    /**
     * Get the query statistics for search application. **Note:** This API requires a standard end user account to execute.
     */
    cloudsearchStatsQuerySearchapplicationsGet(req: operations.CloudsearchStatsQuerySearchapplicationsGetRequest, security: operations.CloudsearchStatsQuerySearchapplicationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsearchStatsQuerySearchapplicationsGetResponse>;
    /**
     * Get the # of search sessions, % of successful sessions with a click query statistics for search application. **Note:** This API requires a standard end user account to execute.
     */
    cloudsearchStatsSessionSearchapplicationsGet(req: operations.CloudsearchStatsSessionSearchapplicationsGetRequest, security: operations.CloudsearchStatsSessionSearchapplicationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsearchStatsSessionSearchapplicationsGetResponse>;
    /**
     * Get the users statistics for search application. **Note:** This API requires a standard end user account to execute.
     */
    cloudsearchStatsUserSearchapplicationsGet(req: operations.CloudsearchStatsUserSearchapplicationsGetRequest, security: operations.CloudsearchStatsUserSearchapplicationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsearchStatsUserSearchapplicationsGetResponse>;
}
