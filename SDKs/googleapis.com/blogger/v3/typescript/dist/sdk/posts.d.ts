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
     * Deletes a post by blog id and post id.
     */
    bloggerPostsDelete(req: operations.BloggerPostsDeleteRequest, security: operations.BloggerPostsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerPostsDeleteResponse>;
    /**
     * Gets a post by blog id and post id
     */
    bloggerPostsGet(req: operations.BloggerPostsGetRequest, security: operations.BloggerPostsGetSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerPostsGetResponse>;
    /**
     * Gets a post by path.
     */
    bloggerPostsGetByPath(req: operations.BloggerPostsGetByPathRequest, security: operations.BloggerPostsGetByPathSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerPostsGetByPathResponse>;
    /**
     * Inserts a post.
     */
    bloggerPostsInsert(req: operations.BloggerPostsInsertRequest, security: operations.BloggerPostsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerPostsInsertResponse>;
    /**
     * Lists posts.
     */
    bloggerPostsList(req: operations.BloggerPostsListRequest, security: operations.BloggerPostsListSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerPostsListResponse>;
    /**
     * Patches a post.
     */
    bloggerPostsPatch(req: operations.BloggerPostsPatchRequest, security: operations.BloggerPostsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerPostsPatchResponse>;
    /**
     * Publishes a post.
     */
    bloggerPostsPublish(req: operations.BloggerPostsPublishRequest, security: operations.BloggerPostsPublishSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerPostsPublishResponse>;
    /**
     * Reverts a published or scheduled post to draft state.
     */
    bloggerPostsRevert(req: operations.BloggerPostsRevertRequest, security: operations.BloggerPostsRevertSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerPostsRevertResponse>;
    /**
     * Searches for posts matching given query terms in the specified blog.
     */
    bloggerPostsSearch(req: operations.BloggerPostsSearchRequest, security: operations.BloggerPostsSearchSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerPostsSearchResponse>;
    /**
     * Updates a post by blog id and post id.
     */
    bloggerPostsUpdate(req: operations.BloggerPostsUpdateRequest, security: operations.BloggerPostsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerPostsUpdateResponse>;
}
