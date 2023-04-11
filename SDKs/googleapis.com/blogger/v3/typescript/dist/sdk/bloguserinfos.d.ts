import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class BlogUserInfos {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one blog and user info pair by blog id and user id.
     */
    bloggerBlogUserInfosGet(req: operations.BloggerBlogUserInfosGetRequest, security: operations.BloggerBlogUserInfosGetSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerBlogUserInfosGetResponse>;
}
