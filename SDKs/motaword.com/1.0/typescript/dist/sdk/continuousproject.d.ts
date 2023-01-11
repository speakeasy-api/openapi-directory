import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ContinuousProject {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * collectAnalytics - Save/collect analytics data from Active widget
     *
     * Save/collect analytics data from Active widget
    **/
    collectAnalytics(req: operations.CollectAnalyticsRequest, config?: AxiosRequestConfig): Promise<operations.CollectAnalyticsResponse>;
    /**
     * createActiveWidget - Create a new Active widget. This does not create a new Active project, just a separate widget.
     *
     * Create a new Active widget. This does not create a new Active project, just a separate widget.
    **/
    createActiveWidget(req: operations.CreateActiveWidgetRequest, config?: AxiosRequestConfig): Promise<operations.CreateActiveWidgetResponse>;
    /**
     * createContinuousProject - Create a new continuous project
     *
     * Create a new continuous project
    **/
    createContinuousProject(req: operations.CreateContinuousProjectRequest, config?: AxiosRequestConfig): Promise<operations.CreateContinuousProjectResponse>;
    /**
     * deleteActiveWidget - Delete a single widget for this Active project
     *
     * Delete a single widget for this Active project
    **/
    deleteActiveWidget(req: operations.DeleteActiveWidgetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteActiveWidgetResponse>;
    /**
     * deleteContinuousProject - Delete single continuous project
     *
     * Delete single continuous project
    **/
    deleteContinuousProject(req: operations.DeleteContinuousProjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteContinuousProjectResponse>;
    /**
     * getActiveWidget - Get a single widget for this Active project
     *
     * Get a single widget for this Active project
    **/
    getActiveWidget(req: operations.GetActiveWidgetRequest, config?: AxiosRequestConfig): Promise<operations.GetActiveWidgetResponse>;
    /**
     * getActiveWidgets - Get widgets for this Active project
     *
     * Get widgets for this Active project
    **/
    getActiveWidgets(req: operations.GetActiveWidgetsRequest, config?: AxiosRequestConfig): Promise<operations.GetActiveWidgetsResponse>;
    /**
     * getAnalyticsToken - Get JWT token to be used in analytics dashboards
     *
     * Get JWT token to be used in analytics dashboards
    **/
    getAnalyticsToken(req: operations.GetAnalyticsTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetAnalyticsTokenResponse>;
    /**
     * getContinuousProject - Get single continuous project
     *
     * Get single continuous project
    **/
    getContinuousProject(req: operations.GetContinuousProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetContinuousProjectResponse>;
    /**
     * getContinuousProjects - Get a list of continuous projects
     *
     * Get a list of continuous projects
    **/
    getContinuousProjects(config?: AxiosRequestConfig): Promise<operations.GetContinuousProjectsResponse>;
    /**
     * resetActiveWidgetToken - Resets the access token of the Active widget.
     *
     * Resets the access token of the Active widget.
    **/
    resetActiveWidgetToken(req: operations.ResetActiveWidgetTokenRequest, config?: AxiosRequestConfig): Promise<operations.ResetActiveWidgetTokenResponse>;
    /**
     * translate - Instantly translate your content with your existing TM and MT resources.
     *
     * Instantly translate your content with your existing TM and MT resources.
    **/
    translate(req: operations.TranslateRequest, config?: AxiosRequestConfig): Promise<operations.TranslateResponse>;
    /**
     * updateActiveWidget - Update Active widget settings.
     *
     * Update Active widget settings.
    **/
    updateActiveWidget(req: operations.UpdateActiveWidgetRequest, config?: AxiosRequestConfig): Promise<operations.UpdateActiveWidgetResponse>;
    /**
     * updateContinuousProject - Update continuous project
     *
     * Update continuous project
    **/
    updateContinuousProject(req: operations.UpdateContinuousProjectRequest, config?: AxiosRequestConfig): Promise<operations.UpdateContinuousProjectResponse>;
}
