import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Retrieve and update posts.
 */
export declare class Posts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Bookmark a post
     */
    bookmarkPost(req: operations.BookmarkPostRequest, config?: AxiosRequestConfig): Promise<operations.BookmarkPostResponse>;
    /**
     * Delete a post bookmark
     */
    deleteBookmark(req: operations.DeleteBookmarkRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBookmarkResponse>;
    /**
     * Delete a post
     *
     * @remarks
     * Users can delete posts they have made that have been satisfied or withdrawn or that have expired. Deleting posts isn't intended to be a normal part of the posting process since it makes reposting and viewing old posts harder.
     *
     */
    deletePost(req: operations.DeletePostRequest, config?: AxiosRequestConfig): Promise<operations.DeletePostResponse>;
    /**
     * List all posts
     *
     * @remarks
     * This endpoint provides an easy way to get a feed of all the publicly published posts on trash nothing. It provides access to all publicly published offer and wanted posts from the last 30 days. The posts are sorted by date (newest first). <br /><br /> There are fewer options for filtering, sorting and searching posts with this endpoint but there is no 1,000 post limit and posts that are crossposted to multiple groups are not merged together in the response.  In most cases, crossposted posts are easy to detect because they have the same user_id, title and content.
     *
     */
    getAllPosts(req: operations.GetAllPostsRequest, security: operations.GetAllPostsSecurity, config?: AxiosRequestConfig): Promise<operations.GetAllPostsResponse>;
    /**
     * List all post changes
     *
     * @remarks
     * This endpoint provides an easy way to get a feed of all the changes that have been made to publicly published posts on trash nothing.  Similar to the /posts/all endpoint, only data from the last 30 days is available and the changes are sorted by date (newest first).  Every change includes the date of the change, the post_id of the post that was changed and the type of change. <br /><br /> The different types of changes that are returned are listed below. <br /><br /> - deleted<br /> - undeleted<br /> - satisfied<br /> - promised<br /> - unpromised<br /> - withdrawn<br /> - edited<br /> <br /> For edited changes, clients can use the retrieve post API endpoint to get the edits that have been made to the post.
     *
     */
    getAllPostsChanges(req: operations.GetAllPostsChangesRequest, security: operations.GetAllPostsChangesSecurity, config?: AxiosRequestConfig): Promise<operations.GetAllPostsChangesResponse>;
    /**
     * Retrieve a post
     */
    getPost(req: operations.GetPostRequest, security: operations.GetPostSecurity, config?: AxiosRequestConfig): Promise<operations.GetPostResponse>;
    /**
     * Retrieve post display data
     *
     * @remarks
     * Retrieve a post and other data related to the post that is useful for displaying the post such as data about the user who posted the post and the groups the post was posted on.
     *
     */
    getPostAndRelatedData(req: operations.GetPostAndRelatedDataRequest, security: operations.GetPostAndRelatedDataSecurity, config?: AxiosRequestConfig): Promise<operations.GetPostAndRelatedDataResponse>;
    /**
     * List posts
     *
     * @remarks
     * NOTE: When paging through the posts returned by this endpoint, there will be at most 1,000 posts that can be returned (eg. 50 pages worth of posts with the default per_page value of 20).  In areas where there are more than 1,000 posts, clients can use more specific query parameters to adjust which posts are returned.
     * NOTE: Passing the latitude, longitude and radius parameters filters all posts by their location and so these parameters will temporarily override the current users' location preferences. When latitude, longitude and radius are not specified, public posts will be filtered by the current users' location preferences.
     *
     */
    getPosts(req: operations.GetPostsRequest, security: operations.GetPostsSecurity, config?: AxiosRequestConfig): Promise<operations.GetPostsResponse>;
    /**
     * Retrieve multiple posts
     */
    getPostsByIds(req: operations.GetPostsByIdsRequest, security: operations.GetPostsByIdsSecurity, config?: AxiosRequestConfig): Promise<operations.GetPostsByIdsResponse>;
    /**
     * Promise an offer post
     *
     * @remarks
     * Mark an offer by the current user as promised to someone. This helps people viewing the post know that the items being offered may soon be given away as long as the person who was promised the items picks them up.
     *
     */
    promisePost(req: operations.PromisePostRequest, config?: AxiosRequestConfig): Promise<operations.PromisePostResponse>;
    /**
     * Reply to a post
     *
     * @remarks
     * Send a reply to a post from the current user to the post author.
     */
    replyToPost(req: operations.ReplyToPostRequest, config?: AxiosRequestConfig): Promise<operations.ReplyToPostResponse>;
    /**
     * Report a post
     *
     * @remarks
     * Reports a post to be reviewed by the moderators.
     */
    reportPost(req: operations.ReportPostRequest, config?: AxiosRequestConfig): Promise<operations.ReportPostResponse>;
    /**
     * Satisfy a post
     *
     * @remarks
     * Mark an offer or wanted post by the current user as satisfied (eg. an offer has been taken or a wanted has been received).
     */
    satisfyPost(req: operations.SatisfyPostRequest, config?: AxiosRequestConfig): Promise<operations.SatisfyPostResponse>;
    /**
     * Search posts
     *
     * @remarks
     * Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters.
     * NOTE: When paging through the posts returned by this endpoint, there will be at most 1,000 posts that can be returned (eg. 50 pages worth of posts with the default per_page value of 20).  In areas where there are more than 1,000 posts, clients can use more specific query parameters to adjust which posts are returned.
     *
     */
    searchPosts(req: operations.SearchPostsRequest, security: operations.SearchPostsSecurity, config?: AxiosRequestConfig): Promise<operations.SearchPostsResponse>;
    /**
     * Share a post
     *
     * @remarks
     * Forwards a copy of the post to the current user so that they can forward it to friends.
     */
    sharePost(req: operations.SharePostRequest, config?: AxiosRequestConfig): Promise<operations.SharePostResponse>;
    /**
     * Submit a post
     *
     * @remarks
     * Submits a new post.
     *
     */
    submitPost(req: operations.SubmitPostRequestBody, config?: AxiosRequestConfig): Promise<operations.SubmitPostResponse>;
    /**
     * Unpromise an offer post
     *
     * @remarks
     * Mark an offer by the current user as unpromised.
     */
    unpromisePost(req: operations.UnpromisePostRequest, config?: AxiosRequestConfig): Promise<operations.UnpromisePostResponse>;
    /**
     * Update a post
     *
     * @remarks
     * Users can update posts to fix mistakes with their post, add photos, or add more details about the items. Updates should not be used to say that items in a post have been taken or received since the post satisfy endpoint is designed to do that.
     *
     */
    updatePost(req: operations.UpdatePostRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePostResponse>;
    /**
     * Withdraw a post
     *
     * @remarks
     * Mark an offer or wanted post by the current user as withdrawn.
     */
    withdrawPost(req: operations.WithdrawPostRequest, config?: AxiosRequestConfig): Promise<operations.WithdrawPostResponse>;
}
