import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Views {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * sessionsIdViewsGet - Views: List Session Views
     *
     * Get data for all views in a session
    **/
    sessionsIdViewsGet(req: operations.SessionsIdViewsGetRequest, config?: AxiosRequestConfig): Promise<operations.SessionsIdViewsGetResponse>;
    /**
     * sessionsIdViewsPost - Views: Create A Session View
     *
     * Create a page view object for a viewing session
    **/
    sessionsIdViewsPost(req: operations.SessionsIdViewsPostRequest, config?: AxiosRequestConfig): Promise<operations.SessionsIdViewsPostResponse>;
    /**
     * viewsIdDelete - Views: Delete by Id
     *
     * Remove a view and dependant data.
    **/
    viewsIdDelete(req: operations.ViewsIdDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ViewsIdDeleteResponse>;
    /**
     * viewsIdGet - Views: Get View
     *
     * Get view meta data
    **/
    viewsIdGet(req: operations.ViewsIdGetRequest, config?: AxiosRequestConfig): Promise<operations.ViewsIdGetResponse>;
}
