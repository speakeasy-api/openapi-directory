import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Interact with reactions to various GitHub entities.
 */
export declare class Reactions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create reaction for a commit comment
     *
     * @remarks
     * Create a reaction to a [commit comment](https://docs.github.com/enterprise-server@3.2/rest/reference/repos#comments). A response with an HTTP `200` status means that you already added the reaction type to this commit comment.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/reactions#create-reaction-for-a-commit-comment} - API method documentation
     */
    reactionsCreateForCommitComment(req: operations.ReactionsCreateForCommitCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsCreateForCommitCommentResponse>;
    /**
     * Create reaction for an issue
     *
     * @remarks
     * Create a reaction to an [issue](https://docs.github.com/enterprise-server@3.2/rest/reference/issues/). A response with an HTTP `200` status means that you already added the reaction type to this issue.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/reactions#create-reaction-for-an-issue} - API method documentation
     */
    reactionsCreateForIssue(req: operations.ReactionsCreateForIssueRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsCreateForIssueResponse>;
    /**
     * Create reaction for an issue comment
     *
     * @remarks
     * Create a reaction to an [issue comment](https://docs.github.com/enterprise-server@3.2/rest/reference/issues#comments). A response with an HTTP `200` status means that you already added the reaction type to this issue comment.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/reactions#create-reaction-for-an-issue-comment} - API method documentation
     */
    reactionsCreateForIssueComment(req: operations.ReactionsCreateForIssueCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsCreateForIssueCommentResponse>;
    /**
     * Create reaction for a pull request review comment
     *
     * @remarks
     * Create a reaction to a [pull request review comment](https://docs.github.com/enterprise-server@3.2/rest/reference/pulls#comments). A response with an HTTP `200` status means that you already added the reaction type to this pull request review comment.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/reactions#create-reaction-for-a-pull-request-review-comment} - API method documentation
     */
    reactionsCreateForPullRequestReviewComment(req: operations.ReactionsCreateForPullRequestReviewCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsCreateForPullRequestReviewCommentResponse>;
    /**
     * Create reaction for a release
     *
     * @remarks
     * Create a reaction to a [release](https://docs.github.com/enterprise-server@3.2/rest/reference/repos#releases). A response with a `Status: 200 OK` means that you already added the reaction type to this release.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/reactions/#create-reaction-for-a-release} - API method documentation
     */
    reactionsCreateForRelease(req: operations.ReactionsCreateForReleaseRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsCreateForReleaseResponse>;
    /**
     * Create reaction for a team discussion comment
     *
     * @remarks
     * Create a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@3.2/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.2/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/reactions#create-reaction-for-a-team-discussion-comment} - API method documentation
     */
    reactionsCreateForTeamDiscussionCommentInOrg(req: operations.ReactionsCreateForTeamDiscussionCommentInOrgRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsCreateForTeamDiscussionCommentInOrgResponse>;
    /**
     * Create reaction for a team discussion comment (Legacy)
     *
     * @remarks
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new "[Create reaction for a team discussion comment](https://docs.github.com/enterprise-server@3.2/rest/reference/reactions#create-reaction-for-a-team-discussion-comment)" endpoint.
     *
     * Create a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@3.2/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.2/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/reactions/#create-reaction-for-a-team-discussion-comment-legacy} - API method documentation
     */
    reactionsCreateForTeamDiscussionCommentLegacy(req: operations.ReactionsCreateForTeamDiscussionCommentLegacyRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsCreateForTeamDiscussionCommentLegacyResponse>;
    /**
     * Create reaction for a team discussion
     *
     * @remarks
     * Create a reaction to a [team discussion](https://docs.github.com/enterprise-server@3.2/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.2/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/reactions#create-reaction-for-a-team-discussion} - API method documentation
     */
    reactionsCreateForTeamDiscussionInOrg(req: operations.ReactionsCreateForTeamDiscussionInOrgRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsCreateForTeamDiscussionInOrgResponse>;
    /**
     * Create reaction for a team discussion (Legacy)
     *
     * @remarks
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create reaction for a team discussion`](https://docs.github.com/enterprise-server@3.2/rest/reference/reactions#create-reaction-for-a-team-discussion) endpoint.
     *
     * Create a reaction to a [team discussion](https://docs.github.com/enterprise-server@3.2/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.2/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/reactions/#create-reaction-for-a-team-discussion-legacy} - API method documentation
     */
    reactionsCreateForTeamDiscussionLegacy(req: operations.ReactionsCreateForTeamDiscussionLegacyRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsCreateForTeamDiscussionLegacyResponse>;
    /**
     * Delete a commit comment reaction
     *
     * @remarks
     * **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/comments/:comment_id/reactions/:reaction_id`.
     *
     * Delete a reaction to a [commit comment](https://docs.github.com/enterprise-server@3.2/rest/reference/repos#comments).
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/reactions#delete-a-commit-comment-reaction} - API method documentation
     */
    reactionsDeleteForCommitComment(req: operations.ReactionsDeleteForCommitCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsDeleteForCommitCommentResponse>;
    /**
     * Delete an issue reaction
     *
     * @remarks
     * **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/issues/:issue_number/reactions/:reaction_id`.
     *
     * Delete a reaction to an [issue](https://docs.github.com/enterprise-server@3.2/rest/reference/issues/).
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/reactions#delete-an-issue-reaction} - API method documentation
     */
    reactionsDeleteForIssue(req: operations.ReactionsDeleteForIssueRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsDeleteForIssueResponse>;
    /**
     * Delete an issue comment reaction
     *
     * @remarks
     * **Note:** You can also specify a repository by `repository_id` using the route `DELETE delete /repositories/:repository_id/issues/comments/:comment_id/reactions/:reaction_id`.
     *
     * Delete a reaction to an [issue comment](https://docs.github.com/enterprise-server@3.2/rest/reference/issues#comments).
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/reactions#delete-an-issue-comment-reaction} - API method documentation
     */
    reactionsDeleteForIssueComment(req: operations.ReactionsDeleteForIssueCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsDeleteForIssueCommentResponse>;
    /**
     * Delete a pull request comment reaction
     *
     * @remarks
     * **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/pulls/comments/:comment_id/reactions/:reaction_id.`
     *
     * Delete a reaction to a [pull request review comment](https://docs.github.com/enterprise-server@3.2/rest/reference/pulls#review-comments).
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/reactions#delete-a-pull-request-comment-reaction} - API method documentation
     */
    reactionsDeleteForPullRequestComment(req: operations.ReactionsDeleteForPullRequestCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsDeleteForPullRequestCommentResponse>;
    /**
     * Delete a release reaction
     *
     * @remarks
     * **Note:** You can also specify a repository by `repository_id` using the route `DELETE delete /repositories/:repository_id/releases/:release_id/reactions/:reaction_id`.
     *
     * Delete a reaction to a [release](https://docs.github.com/enterprise-server@3.2/rest/reference/repos#releases).
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/reactions/#delete-a-release-reaction} - API method documentation
     */
    reactionsDeleteForRelease(req: operations.ReactionsDeleteForReleaseRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsDeleteForReleaseResponse>;
    /**
     * Delete team discussion reaction
     *
     * @remarks
     * **Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions/:reaction_id`.
     *
     * Delete a reaction to a [team discussion](https://docs.github.com/enterprise-server@3.2/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.2/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/reactions#delete-team-discussion-reaction} - API method documentation
     */
    reactionsDeleteForTeamDiscussion(req: operations.ReactionsDeleteForTeamDiscussionRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsDeleteForTeamDiscussionResponse>;
    /**
     * Delete team discussion comment reaction
     *
     * @remarks
     * **Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions/:reaction_id`.
     *
     * Delete a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@3.2/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.2/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/reactions#delete-team-discussion-comment-reaction} - API method documentation
     */
    reactionsDeleteForTeamDiscussionComment(req: operations.ReactionsDeleteForTeamDiscussionCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsDeleteForTeamDiscussionCommentResponse>;
    /**
     * Delete a reaction (Legacy)
     *
     * @remarks
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Reactions API. We recommend migrating your existing code to use the new delete reactions endpoints. For more information, see this [blog post](https://developer.github.com/changes/2020-02-26-new-delete-reactions-endpoints/).
     *
     * OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.2/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), when deleting a [team discussion](https://docs.github.com/enterprise-server@3.2/rest/reference/teams#discussions) or [team discussion comment](https://docs.github.com/enterprise-server@3.2/rest/reference/teams#discussion-comments).
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/reactions/#delete-a-reaction-legacy} - API method documentation
     */
    reactionsDeleteLegacy(req: operations.ReactionsDeleteLegacyRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsDeleteLegacyResponse>;
    /**
     * List reactions for a commit comment
     *
     * @remarks
     * List the reactions to a [commit comment](https://docs.github.com/enterprise-server@3.2/rest/reference/repos#comments).
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/reactions#list-reactions-for-a-commit-comment} - API method documentation
     */
    reactionsListForCommitComment(req: operations.ReactionsListForCommitCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsListForCommitCommentResponse>;
    /**
     * List reactions for an issue
     *
     * @remarks
     * List the reactions to an [issue](https://docs.github.com/enterprise-server@3.2/rest/reference/issues).
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/reactions#list-reactions-for-an-issue} - API method documentation
     */
    reactionsListForIssue(req: operations.ReactionsListForIssueRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsListForIssueResponse>;
    /**
     * List reactions for an issue comment
     *
     * @remarks
     * List the reactions to an [issue comment](https://docs.github.com/enterprise-server@3.2/rest/reference/issues#comments).
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/reactions#list-reactions-for-an-issue-comment} - API method documentation
     */
    reactionsListForIssueComment(req: operations.ReactionsListForIssueCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsListForIssueCommentResponse>;
    /**
     * List reactions for a pull request review comment
     *
     * @remarks
     * List the reactions to a [pull request review comment](https://docs.github.com/enterprise-server@3.2/rest/reference/pulls#review-comments).
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/reactions#list-reactions-for-a-pull-request-review-comment} - API method documentation
     */
    reactionsListForPullRequestReviewComment(req: operations.ReactionsListForPullRequestReviewCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsListForPullRequestReviewCommentResponse>;
    /**
     * List reactions for a release
     *
     * @remarks
     * List the reactions to a [release](https://docs.github.com/enterprise-server@3.2/rest/reference/repos#releases).
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/reactions/#list-reactions-for-a-release} - API method documentation
     */
    reactionsListForRelease(req: operations.ReactionsListForReleaseRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsListForReleaseResponse>;
    /**
     * List reactions for a team discussion comment
     *
     * @remarks
     * List the reactions to a [team discussion comment](https://docs.github.com/enterprise-server@3.2/rest/reference/teams#discussion-comments/). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.2/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/reactions#list-reactions-for-a-team-discussion-comment} - API method documentation
     */
    reactionsListForTeamDiscussionCommentInOrg(req: operations.ReactionsListForTeamDiscussionCommentInOrgRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsListForTeamDiscussionCommentInOrgResponse>;
    /**
     * List reactions for a team discussion comment (Legacy)
     *
     * @remarks
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion comment`](https://docs.github.com/enterprise-server@3.2/rest/reference/reactions#list-reactions-for-a-team-discussion-comment) endpoint.
     *
     * List the reactions to a [team discussion comment](https://docs.github.com/enterprise-server@3.2/rest/reference/teams#discussion-comments). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.2/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/reactions/#list-reactions-for-a-team-discussion-comment-legacy} - API method documentation
     */
    reactionsListForTeamDiscussionCommentLegacy(req: operations.ReactionsListForTeamDiscussionCommentLegacyRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsListForTeamDiscussionCommentLegacyResponse>;
    /**
     * List reactions for a team discussion
     *
     * @remarks
     * List the reactions to a [team discussion](https://docs.github.com/enterprise-server@3.2/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.2/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/reactions#list-reactions-for-a-team-discussion} - API method documentation
     */
    reactionsListForTeamDiscussionInOrg(req: operations.ReactionsListForTeamDiscussionInOrgRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsListForTeamDiscussionInOrgResponse>;
    /**
     * List reactions for a team discussion (Legacy)
     *
     * @remarks
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion`](https://docs.github.com/enterprise-server@3.2/rest/reference/reactions#list-reactions-for-a-team-discussion) endpoint.
     *
     * List the reactions to a [team discussion](https://docs.github.com/enterprise-server@3.2/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.2/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * @see {@link https://docs.github.com/enterprise-server@3.2/rest/reference/reactions/#list-reactions-for-a-team-discussion-legacy} - API method documentation
     */
    reactionsListForTeamDiscussionLegacy(req: operations.ReactionsListForTeamDiscussionLegacyRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsListForTeamDiscussionLegacyResponse>;
}
