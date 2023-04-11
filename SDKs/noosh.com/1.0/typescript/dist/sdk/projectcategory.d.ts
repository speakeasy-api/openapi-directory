import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ProjectCategory {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List the project categories
     *
     * @remarks
     * List the project categories
     */
    getProjectCategoryList(req: operations.GetProjectCategoryListRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectCategoryListResponse>;
    /**
     * List the project categories of client side
     *
     * @remarks
     * List the project categories of client side
     */
    getProjectCategoryListOfClient(req: operations.GetProjectCategoryListOfClientRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectCategoryListOfClientResponse>;
}
