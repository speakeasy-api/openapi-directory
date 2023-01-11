import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AppsFindAndModifyApps {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteAppsAppId - Removes app and all versions
     *
     * - This method is called on behalf of a developer.
     *
    **/
    deleteAppsAppId(req: operations.DeleteAppsAppIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppsAppIdResponse>;
    /**
     * deleteAppsAppIdVersionsVersion - Removes AppVersion
     *
     * - This method is called on behalf of a developer.
     *
    **/
    deleteAppsAppIdVersionsVersion(req: operations.DeleteAppsAppIdVersionsVersionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppsAppIdVersionsVersionResponse>;
    /**
     * getApps - Returns a paginated list of APPROVED or SUSPENDED apps
     *
     * - Results are paginated and the default is value is 1000 if no limit is provided
     * - If no query is specified, returns all APPROVED or SUSPENDED apps within the marketplace
     *
    **/
    getApps(req: operations.GetAppsRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsResponse>;
    /**
     * getAppsBySafeNameSafeName - Returns a single APPROVED or SUSPENDED app
     *
     * - A 'view' event is recorded when trackViews is set to true
     *
    **/
    getAppsBySafeNameSafeName(req: operations.GetAppsBySafeNameSafeNameRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsBySafeNameSafeNameResponse>;
    /**
     * getAppsTextSearch - Searches through the text of fields to find APPROVED or SUSPENDED apps
     *
     * - Results are returned for the market provided within the basic authentication credentials
     *
    **/
    getAppsTextSearch(req: operations.GetAppsTextSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsTextSearchResponse>;
    /**
     * getAppsVersions - Returns a paginated list of AppVersions
     *
     * - Results are paginated when limit is set, otherwise all results are returned
     * - If no query is specified, returns all AppVersions within the marketplace
     * - Only returns AppVersions owned by this developer
     *
    **/
    getAppsVersions(req: operations.GetAppsVersionsRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsVersionsResponse>;
    /**
     * getAppsAppId - Returns a single APPROVED or SUSPENDED app
     *
     * - A 'view' event is recorded when trackViews is set to true
     *
    **/
    getAppsAppId(req: operations.GetAppsAppIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsAppIdResponse>;
    /**
     * getAppsAppIdVersionsVersion - Returns a single AppVersion
     *
     * - Only returns AppVersions owned by this developer
     *
    **/
    getAppsAppIdVersionsVersion(req: operations.GetAppsAppIdVersionsVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsAppIdVersionsVersionResponse>;
    /**
     * patchAppsAppIdVersionsVersion - Updates the app fields or creates a new version
     *
     * - This method is called on behalf of a developer.
     * - Price and is required if the model is 'single' or 'recurring'
     * - Returns the newly updated app
     * - This endpoint updates only the fields provided in the request (relative update). In contrast, the POST version of this method replaces the entire object to match the request (absolute update).
     *
    **/
    patchAppsAppIdVersionsVersion(req: operations.PatchAppsAppIdVersionsVersionRequest, config?: AxiosRequestConfig): Promise<operations.PatchAppsAppIdVersionsVersionResponse>;
    /**
     * postApps - Adds a new app for this developer
     *
     * - This method is called on behalf of a developer.
     * - Price is required if the model is 'single' or 'recurring'
     * - Returns the newly created app
     *
    **/
    postApps(req: operations.PostAppsRequest, config?: AxiosRequestConfig): Promise<operations.PostAppsResponse>;
    /**
     * postAppsAppIdLive - Change the live app to another, previously approved version
     *
     * - This method is called on behalf of a developer.
     *
    **/
    postAppsAppIdLive(req: operations.PostAppsAppIdLiveRequest, config?: AxiosRequestConfig): Promise<operations.PostAppsAppIdLiveResponse>;
    /**
     * postAppsAppIdPublish - Publishes the current working version of the app to the marketplace
     *
     * - This method is called on behalf of a developer.
     * - Only effects the current working version of the app.
     *
    **/
    postAppsAppIdPublish(req: operations.PostAppsAppIdPublishRequest, config?: AxiosRequestConfig): Promise<operations.PostAppsAppIdPublishResponse>;
    /**
     * postAppsAppIdVersionsVersion - Updates the app or creates a new version
     *
     * - This method is called on behalf of a developer.
     * - Price and is required if the model is 'single' or 'recurring'
     * - Returns the newly updated app
     * - This endpoint replaces the entire object to match the request (absolute update). In contrast, the PATCH version of this endpoint updates only the fields provided in the request (relative update).
     *
    **/
    postAppsAppIdVersionsVersion(req: operations.PostAppsAppIdVersionsVersionRequest, config?: AxiosRequestConfig): Promise<operations.PostAppsAppIdVersionsVersionResponse>;
    /**
     * postAppsAppIdVersionsVersionStatus - Allows a developer or administrator to change the status of apps
     *
     * Only certain status changes are allowed. For instance, a developer is only able to suspend and unsuspend their app (which must already be approved). See here for a state change diagram of allowed status changes for administrators: https://support.openchannel.io/documentation/api/#415-apps-status-change
     *
    **/
    postAppsAppIdVersionsVersionStatus(req: operations.PostAppsAppIdVersionsVersionStatusRequest, config?: AxiosRequestConfig): Promise<operations.PostAppsAppIdVersionsVersionStatusResponse>;
}
