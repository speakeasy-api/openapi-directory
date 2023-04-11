import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Pages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete an existing Page.
     */
    deletePagesIdJson(req: operations.DeletePagesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeletePagesIdJsonResponse>;
    /**
     * Retrieve all Pages.
     */
    getPagesJson(req: operations.GetPagesJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetPagesJsonResponse>;
    /**
     * Count all Pages.
     */
    getPagesCountJson(req: operations.GetPagesCountJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetPagesCountJsonResponse>;
    /**
     * Retrieve a single Page by id.
     */
    getPagesIdJson(req: operations.GetPagesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetPagesIdJsonResponse>;
    /**
     * Create a new Page.
     */
    postPagesJson(req: operations.PostPagesJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostPagesJsonResponse>;
    /**
     * Update a Page.
     */
    putPagesIdJson(req: operations.PutPagesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutPagesIdJsonResponse>;
}
