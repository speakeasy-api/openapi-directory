import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Comments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets a comment by blog id, post id and comment id.
     */
    bloggerCommentsGet(req: operations.BloggerCommentsGetRequest, security: operations.BloggerCommentsGetSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerCommentsGetResponse>;
    /**
     * Lists comments.
     */
    bloggerCommentsList(req: operations.BloggerCommentsListRequest, security: operations.BloggerCommentsListSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerCommentsListResponse>;
}
