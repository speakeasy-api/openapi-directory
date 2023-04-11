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
export declare enum ReposCreateInOrgRequestBodyMergeCommitMessageEnum {
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
export declare enum ReposCreateInOrgRequestBodyMergeCommitTitleEnum {
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
export declare enum ReposCreateInOrgRequestBodySquashMergeCommitMessageEnum {
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
export declare enum ReposCreateInOrgRequestBodySquashMergeCommitTitleEnum {
    PrTitle = "PR_TITLE",
    CommitOrPrTitle = "COMMIT_OR_PR_TITLE"
}
/**
 * The visibility of the repository. **Note**: For GitHub Enterprise Server, this endpoint will only list repositories available to all users on the enterprise. For more information, see "[Creating an internal repository](https://docs.github.com/enterprise-server@3.3/github/creating-cloning-and-archiving-repositories/about-repository-visibility#about-internal-repositories)" in the GitHub Help documentation.
 *
 * @remarks
 * The `visibility` parameter overrides the `private` parameter when you use both parameters with the `nebula-preview` preview header.
 */
export declare enum ReposCreateInOrgRequestBodyVisibilityEnum {
    Public = "public",
    Private = "private",
    Internal = "internal"
}
export declare class ReposCreateInOrgRequestBody extends SpeakeasyBase {
    /**
     * Either `true` to allow auto-merge on pull requests, or `false` to disallow auto-merge.
     */
    allowAutoMerge?: boolean;
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
     * Pass `true` to create an initial commit with empty README.
     */
    autoInit?: boolean;
    /**
     * Either `true` to allow automatically deleting head branches when pull requests are merged, or `false` to prevent automatic deletion. **The authenticated user must be an organization owner to set this property to `true`.**
     */
    deleteBranchOnMerge?: boolean;
    /**
     * A short description of the repository.
     */
    description?: string;
    /**
     * Desired language or platform [.gitignore template](https://github.com/github/gitignore) to apply. Use the name of the template without the extension. For example, "Haskell".
     */
    gitignoreTemplate?: string;
    /**
     * Whether downloads are enabled.
     */
    hasDownloads?: boolean;
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
     * Choose an [open source license template](https://choosealicense.com/) that best suits your needs, and then use the [license keyword](https://docs.github.com/enterprise-server@3.3/articles/licensing-a-repository/#searching-github-by-license-type) as the `license_template` string. For example, "mit" or "mpl-2.0".
     */
    licenseTemplate?: string;
    /**
     * The default value for a merge commit message.
     *
     * @remarks
     *
     * - `PR_TITLE` - default to the pull request's title.
     * - `PR_BODY` - default to the pull request's body.
     * - `BLANK` - default to a blank commit message.
     */
    mergeCommitMessage?: ReposCreateInOrgRequestBodyMergeCommitMessageEnum;
    /**
     * The default value for a merge commit title.
     *
     * @remarks
     *
     * - `PR_TITLE` - default to the pull request's title.
     * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
     */
    mergeCommitTitle?: ReposCreateInOrgRequestBodyMergeCommitTitleEnum;
    /**
     * The name of the repository.
     */
    name: string;
    /**
     * Whether the repository is private.
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
    squashMergeCommitMessage?: ReposCreateInOrgRequestBodySquashMergeCommitMessageEnum;
    /**
     * The default value for a squash merge commit title:
     *
     * @remarks
     *
     * - `PR_TITLE` - default to the pull request's title.
     * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
     */
    squashMergeCommitTitle?: ReposCreateInOrgRequestBodySquashMergeCommitTitleEnum;
    /**
     * The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.
     */
    teamId?: number;
    /**
     * Either `true` to allow squash-merge commits to use pull request title, or `false` to use commit message. **This property has been deprecated. Please use `squash_merge_commit_title` instead.
     */
    useSquashPrTitleAsDefault?: boolean;
    /**
     * The visibility of the repository. **Note**: For GitHub Enterprise Server, this endpoint will only list repositories available to all users on the enterprise. For more information, see "[Creating an internal repository](https://docs.github.com/enterprise-server@3.3/github/creating-cloning-and-archiving-repositories/about-repository-visibility#about-internal-repositories)" in the GitHub Help documentation.
     *
     * @remarks
     * The `visibility` parameter overrides the `private` parameter when you use both parameters with the `nebula-preview` preview header.
     */
    visibility?: ReposCreateInOrgRequestBodyVisibilityEnum;
}
export declare class ReposCreateInOrgRequest extends SpeakeasyBase {
    requestBody: ReposCreateInOrgRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
}
export declare class ReposCreateInOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    repository?: shared.Repository;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
