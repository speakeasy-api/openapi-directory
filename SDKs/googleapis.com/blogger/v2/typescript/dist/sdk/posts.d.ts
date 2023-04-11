import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Posts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets a post by blog id and post id
     */
    bloggerPostsGet(req: operations.BloggerPostsGetRequest, security: operations.BloggerPostsGetSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerPostsGetResponse>;
    /**
     * Lists posts.
     */
    bloggerPostsList(req: operations.BloggerPostsListRequest, security: operations.BloggerPostsListSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerPostsListResponse>;
}
