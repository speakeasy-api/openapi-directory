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
     * Marks a comment as not spam by blog id, post id and comment id.
     */
    bloggerCommentsApprove(req: operations.BloggerCommentsApproveRequest, security: operations.BloggerCommentsApproveSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerCommentsApproveResponse>;
    /**
     * Deletes a comment by blog id, post id and comment id.
     */
    bloggerCommentsDelete(req: operations.BloggerCommentsDeleteRequest, security: operations.BloggerCommentsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerCommentsDeleteResponse>;
    /**
     * Gets a comment by id.
     */
    bloggerCommentsGet(req: operations.BloggerCommentsGetRequest, security: operations.BloggerCommentsGetSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerCommentsGetResponse>;
    /**
     * Lists comments.
     */
    bloggerCommentsList(req: operations.BloggerCommentsListRequest, security: operations.BloggerCommentsListSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerCommentsListResponse>;
    /**
     * Lists comments by blog.
     */
    bloggerCommentsListByBlog(req: operations.BloggerCommentsListByBlogRequest, security: operations.BloggerCommentsListByBlogSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerCommentsListByBlogResponse>;
    /**
     * Marks a comment as spam by blog id, post id and comment id.
     */
    bloggerCommentsMarkAsSpam(req: operations.BloggerCommentsMarkAsSpamRequest, security: operations.BloggerCommentsMarkAsSpamSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerCommentsMarkAsSpamResponse>;
    /**
     * Removes the content of a comment by blog id, post id and comment id.
     */
    bloggerCommentsRemoveContent(req: operations.BloggerCommentsRemoveContentRequest, security: operations.BloggerCommentsRemoveContentSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerCommentsRemoveContentResponse>;
}
