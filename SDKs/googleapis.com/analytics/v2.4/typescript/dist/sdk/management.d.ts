import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Management {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Lists all accounts to which the user has access.
     */
    analyticsManagementAccountsList(req: operations.AnalyticsManagementAccountsListRequest, security: operations.AnalyticsManagementAccountsListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementAccountsListResponse>;
    /**
     * Lists goals to which the user has access.
     */
    analyticsManagementGoalsList(req: operations.AnalyticsManagementGoalsListRequest, security: operations.AnalyticsManagementGoalsListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementGoalsListResponse>;
    /**
     * Lists views (profiles) to which the user has access.
     */
    analyticsManagementProfilesList(req: operations.AnalyticsManagementProfilesListRequest, security: operations.AnalyticsManagementProfilesListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementProfilesListResponse>;
    /**
     * Lists advanced segments to which the user has access.
     */
    analyticsManagementSegmentsList(req: operations.AnalyticsManagementSegmentsListRequest, security: operations.AnalyticsManagementSegmentsListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementSegmentsListResponse>;
    /**
     * Lists web properties to which the user has access.
     */
    analyticsManagementWebpropertiesList(req: operations.AnalyticsManagementWebpropertiesListRequest, security: operations.AnalyticsManagementWebpropertiesListSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementWebpropertiesListResponse>;
}
