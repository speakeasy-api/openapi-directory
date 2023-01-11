import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Blog {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getBlogPosts - Get blog posts - ordered by created desc by default
    **/
    getBlogPosts(req: operations.GetBlogPostsRequest, config?: AxiosRequestConfig): Promise<operations.GetBlogPostsResponse>;
}
