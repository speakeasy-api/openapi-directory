import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Views {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Views: List Session Views
     *
     * @remarks
     * Get data for all views in a session
     */
    sessionsIdViewsGet(req: operations.SessionsIdViewsGetRequest, config?: AxiosRequestConfig): Promise<operations.SessionsIdViewsGetResponse>;
    /**
     * Views: Create A Session View
     *
     * @remarks
     * Create a page view object for a viewing session
     */
    sessionsIdViewsPost(req: operations.SessionsIdViewsPostRequest, config?: AxiosRequestConfig): Promise<operations.SessionsIdViewsPostResponse>;
    /**
     * Views: Delete by Id
     *
     * @remarks
     * Remove a view and dependant data.
     */
    viewsIdDelete(req: operations.ViewsIdDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ViewsIdDeleteResponse>;
    /**
     * Views: Get View
     *
     * @remarks
     * Get view meta data
     */
    viewsIdGet(req: operations.ViewsIdGetRequest, config?: AxiosRequestConfig): Promise<operations.ViewsIdGetResponse>;
}
