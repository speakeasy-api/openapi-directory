import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * View, modify your gists.
 */
export declare class Gists {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Check if a gist is starred
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/gists#check-if-a-gist-is-starred} - API method documentation
     */
    gistsCheckIsStarred(req: operations.GistsCheckIsStarredRequest, config?: AxiosRequestConfig): Promise<operations.GistsCheckIsStarredResponse>;
    /**
     * Create a gist
     *
     * @remarks
     * Allows you to add a new gist with one or more files.
     *
     * **Note:** Don't name your files "gistfile" with a numerical suffix. This is the format of the automatic naming scheme that Gist uses internally.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/gists#create-a-gist} - API method documentation
     */
    gistsCreate(req: operations.GistsCreateRequestBody, config?: AxiosRequestConfig): Promise<operations.GistsCreateResponse>;
    /**
     * Create a gist comment
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/gists#create-a-gist-comment} - API method documentation
     */
    gistsCreateComment(req: operations.GistsCreateCommentRequest, config?: AxiosRequestConfig): Promise<operations.GistsCreateCommentResponse>;
    /**
     * Delete a gist
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/gists#delete-a-gist} - API method documentation
     */
    gistsDelete(req: operations.GistsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.GistsDeleteResponse>;
    /**
     * Delete a gist comment
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/gists#delete-a-gist-comment} - API method documentation
     */
    gistsDeleteComment(req: operations.GistsDeleteCommentRequest, config?: AxiosRequestConfig): Promise<operations.GistsDeleteCommentResponse>;
    /**
     * Fork a gist
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/gists#fork-a-gist} - API method documentation
     */
    gistsFork(req: operations.GistsForkRequest, config?: AxiosRequestConfig): Promise<operations.GistsForkResponse>;
    /**
     * Get a gist
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/gists#get-a-gist} - API method documentation
     */
    gistsGet(req: operations.GistsGetRequest, config?: AxiosRequestConfig): Promise<operations.GistsGetResponse>;
    /**
     * Get a gist comment
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/gists#get-a-gist-comment} - API method documentation
     */
    gistsGetComment(req: operations.GistsGetCommentRequest, config?: AxiosRequestConfig): Promise<operations.GistsGetCommentResponse>;
    /**
     * Get a gist revision
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/gists#get-a-gist-revision} - API method documentation
     */
    gistsGetRevision(req: operations.GistsGetRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GistsGetRevisionResponse>;
    /**
     * List gists for the authenticated user
     *
     * @remarks
     * Lists the authenticated user's gists or if called anonymously, this endpoint returns all public gists:
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/gists#list-gists-for-the-authenticated-user} - API method documentation
     */
    gistsList(req: operations.GistsListRequest, config?: AxiosRequestConfig): Promise<operations.GistsListResponse>;
    /**
     * List gist comments
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/gists#list-gist-comments} - API method documentation
     */
    gistsListComments(req: operations.GistsListCommentsRequest, config?: AxiosRequestConfig): Promise<operations.GistsListCommentsResponse>;
    /**
     * List gist commits
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/gists#list-gist-commits} - API method documentation
     */
    gistsListCommits(req: operations.GistsListCommitsRequest, config?: AxiosRequestConfig): Promise<operations.GistsListCommitsResponse>;
    /**
     * List gists for a user
     *
     * @remarks
     * Lists public gists for the specified user:
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/gists#list-gists-for-a-user} - API method documentation
     */
    gistsListForUser(req: operations.GistsListForUserRequest, config?: AxiosRequestConfig): Promise<operations.GistsListForUserResponse>;
    /**
     * List gist forks
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/gists#list-gist-forks} - API method documentation
     */
    gistsListForks(req: operations.GistsListForksRequest, config?: AxiosRequestConfig): Promise<operations.GistsListForksResponse>;
    /**
     * List public gists
     *
     * @remarks
     * List public gists sorted by most recently updated to least recently updated.
     *
     * Note: With [pagination](https://docs.github.com/enterprise-server@3.2/rest/overview/resources-in-the-rest-api#pagination), you can fetch up to 3000 gists. For example, you can fetch 100 pages with 30 gists per page or 30 pages with 100 gists per page.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/gists#list-public-gists} - API method documentation
     */
    gistsListPublic(req: operations.GistsListPublicRequest, config?: AxiosRequestConfig): Promise<operations.GistsListPublicResponse>;
    /**
     * List starred gists
     *
     * @remarks
     * List the authenticated user's starred gists:
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/gists#list-starred-gists} - API method documentation
     */
    gistsListStarred(req: operations.GistsListStarredRequest, config?: AxiosRequestConfig): Promise<operations.GistsListStarredResponse>;
    /**
     * Star a gist
     *
     * @remarks
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.2/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/gists#star-a-gist} - API method documentation
     */
    gistsStar(req: operations.GistsStarRequest, config?: AxiosRequestConfig): Promise<operations.GistsStarResponse>;
    /**
     * Unstar a gist
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/gists#unstar-a-gist} - API method documentation
     */
    gistsUnstar(req: operations.GistsUnstarRequest, config?: AxiosRequestConfig): Promise<operations.GistsUnstarResponse>;
    /**
     * Update a gist
     *
     * @remarks
     * Allows you to update a gist's description and to update, delete, or rename gist files. Files from the previous version of the gist that aren't explicitly changed during an edit are unchanged.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/gists/#update-a-gist} - API method documentation
     */
    gistsUpdate(req: operations.GistsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.GistsUpdateResponse>;
    /**
     * Update a gist comment
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/gists#update-a-gist-comment} - API method documentation
     */
    gistsUpdateComment(req: operations.GistsUpdateCommentRequest, config?: AxiosRequestConfig): Promise<operations.GistsUpdateCommentResponse>;
}
