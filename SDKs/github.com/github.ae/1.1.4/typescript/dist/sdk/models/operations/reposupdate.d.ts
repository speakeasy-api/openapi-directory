import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The default value for a merge commit message.
 *
 * @remarks
 *
 * - `PR_TITLE` - default to the pull request's title.
 * - `PR_BODY` - default to the pull request's body.
 * - `BLANK` - default to a blank commit message.
 */
export declare enum ReposUpdateRequestBodyMergeCommitMessageEnum {
    PrBody = "PR_BODY",
    PrTitle = "PR_TITLE",
    Blank = "BLANK"
}
/**
 * The default value for a merge commit title.
 *
 * @remarks
 *
 * - `PR_TITLE` - default to the pull request's title.
 * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
 */
export declare enum ReposUpdateRequestBodyMergeCommitTitleEnum {
    PrTitle = "PR_TITLE",
    MergeMessage = "MERGE_MESSAGE"
}
/**
 * The default value for a squash merge commit message:
 *
 * @remarks
 *
 * - `PR_BODY` - default to the pull request's body.
 * - `COMMIT_MESSAGES` - default to the branch's commit messages.
 * - `BLANK` - default to a blank commit message.
 */
export declare enum ReposUpdateRequestBodySquashMergeCommitMessageEnum {
    PrBody = "PR_BODY",
    CommitMessages = "COMMIT_MESSAGES",
    Blank = "BLANK"
}
/**
 * The default value for a squash merge commit title:
 *
 * @remarks
 *
 * - `PR_TITLE` - default to the pull request's title.
 * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
 */
export declare enum ReposUpdateRequestBodySquashMergeCommitTitleEnum {
    PrTitle = "PR_TITLE",
    CommitOrPrTitle = "COMMIT_OR_PR_TITLE"
}
/**
 * The visibility of the repository.
 */
export declare enum ReposUpdateRequestBodyVisibilityEnum {
    Public = "public",
    Private = "private",
    Internal = "internal"
}
export declare class ReposUpdateRequestBody extends SpeakeasyBase {
    /**
     * Either `true` to allow auto-merge on pull requests, or `false` to disallow auto-merge.
     */
    allowAutoMerge?: boolean;
    /**
     * Either `true` to allow private forks, or `false` to prevent private forks.
     */
    allowForking?: boolean;
    /**
     * Either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits.
     */
    allowMergeCommit?: boolean;
    /**
     * Either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging.
     */
    allowRebaseMerge?: boolean;
    /**
     * Either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging.
     */
    allowSquashMerge?: boolean;
    /**
     * Either `true` to always allow a pull request head branch that is behind its base branch to be updated even if it is not required to be up to date before merging, or false otherwise.
     */
    allowUpdateBranch?: boolean;
    /**
     * Whether to archive this repository. **Note**: You cannot unarchive repositories through the API.
     */
    archived?: boolean;
    /**
     * Updates the default branch for this repository.
     */
    defaultBranch?: string;
    /**
     * Either `true` to allow automatically deleting head branches when pull requests are merged, or `false` to prevent automatic deletion.
     */
    deleteBranchOnMerge?: boolean;
    /**
     * A short description of the repository.
     */
    description?: string;
    /**
     * Either `true` to enable issues for this repository or `false` to disable them.
     */
    hasIssues?: boolean;
    /**
     * Either `true` to enable projects for this repository or `false` to disable them. **Note:** If you're creating a repository in an organization that has disabled repository projects, the default is `false`, and if you pass `true`, the API returns an error.
     */
    hasProjects?: boolean;
    /**
     * Either `true` to enable the wiki for this repository or `false` to disable it.
     */
    hasWiki?: boolean;
    /**
     * A URL with more information about the repository.
     */
    homepage?: string;
    /**
     * Either `true` to make this repo available as a template repository or `false` to prevent it.
     */
    isTemplate?: boolean;
    /**
     * The default value for a merge commit message.
     *
     * @remarks
     *
     * - `PR_TITLE` - default to the pull request's title.
     * - `PR_BODY` - default to the pull request's body.
     * - `BLANK` - default to a blank commit message.
     */
    mergeCommitMessage?: ReposUpdateRequestBodyMergeCommitMessageEnum;
    /**
     * The default value for a merge commit title.
     *
     * @remarks
     *
     * - `PR_TITLE` - default to the pull request's title.
     * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
     */
    mergeCommitTitle?: ReposUpdateRequestBodyMergeCommitTitleEnum;
    /**
     * The name of the repository.
     */
    name?: string;
    /**
     * Either `true` to make the repository private or `false` to make it public. Default: `false`.
     *
     * @remarks
     * **Note**: You will get a `422` error if the organization restricts [changing repository visibility](https://docs.github.com/github-ae@latest/articles/repository-permission-levels-for-an-organization#changing-the-visibility-of-repositories) to organization owners and a non-owner tries to change the value of private.
     */
    private?: boolean;
    /**
     * The default value for a squash merge commit message:
     *
     * @remarks
     *
     * - `PR_BODY` - default to the pull request's body.
     * - `COMMIT_MESSAGES` - default to the branch's commit messages.
     * - `BLANK` - default to a blank commit message.
     */
    squashMergeCommitMessage?: ReposUpdateRequestBodySquashMergeCommitMessageEnum;
    /**
     * The default value for a squash merge commit title:
     *
     * @remarks
     *
     * - `PR_TITLE` - default to the pull request's title.
     * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
     */
    squashMergeCommitTitle?: ReposUpdateRequestBodySquashMergeCommitTitleEnum;
    /**
     * Either `true` to allow squash-merge commits to use pull request title, or `false` to use commit message. **This property has been deprecated. Please use `squash_merge_commit_title` instead.
     */
    useSquashPrTitleAsDefault?: boolean;
    /**
     * The visibility of the repository.
     */
    visibility?: ReposUpdateRequestBodyVisibilityEnum;
    /**
     * Either `true` to require contributors to sign off on web-based commits, or `false` to not require contributors to sign off on web-based commits.
     */
    webCommitSignoffRequired?: boolean;
}
export declare class ReposUpdateRequest extends SpeakeasyBase {
    requestBody?: ReposUpdateRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ReposUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Temporary Redirect
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    fullRepository?: shared.FullRepository;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
