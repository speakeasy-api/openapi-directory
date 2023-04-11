import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Blogs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets a blog by id.
     */
    bloggerBlogsGet(req: operations.BloggerBlogsGetRequest, security: operations.BloggerBlogsGetSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerBlogsGetResponse>;
    /**
     * Lists blogs by user id, possibly filtered.
     */
    bloggerBlogsList(req: operations.BloggerBlogsListRequest, security: operations.BloggerBlogsListSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerBlogsListResponse>;
}
