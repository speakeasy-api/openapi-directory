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
     * Gets a blog by url.
     */
    bloggerBlogsGetByUrl(req: operations.BloggerBlogsGetByUrlRequest, security: operations.BloggerBlogsGetByUrlSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerBlogsGetByUrlResponse>;
    /**
     * Lists blogs by user.
     */
    bloggerBlogsListByUser(req: operations.BloggerBlogsListByUserRequest, security: operations.BloggerBlogsListByUserSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerBlogsListByUserResponse>;
}
