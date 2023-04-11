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
 * Use the `status` property to enable or disable GitHub Advanced Security for this repository. For more information, see "[About GitHub Advanced Security](/github/getting-started-with-github/learning-about-github/about-github-advanced-security)."
 */
export declare class ReposUpdateRequestBodySecurityAndAnalysisAdvancedSecurity extends SpeakeasyBase {
    /**
     * Can be `enabled` or `disabled`.
     */
    status?: string;
}
/**
 * Use the `status` property to enable or disable secret scanning for this repository. For more information, see "[About secret scanning](/code-security/secret-security/about-secret-scanning)."
 */
export declare class ReposUpdateRequestBodySecurityAndAnalysisSecretScanning extends SpeakeasyBase {
    /**
     * Can be `enabled` or `disabled`.
     */
    status?: string;
}
/**
 * Use the `status` property to enable or disable secret scanning push protection for this repository. For more information, see "[Protecting pushes with secret scanning](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)."
 */
export declare class ReposUpdateRequestBodySecurityAndAnalysisSecretScanningPushProtection extends SpeakeasyBase {
    /**
     * Can be `enabled` or `disabled`.
     */
    status?: string;
}
/**
 * Specify which security and analysis features to enable or disable for the repository.
 *
 * @remarks
 *
 * To use this parameter, you must have admin permissions for the repository or be an owner or security manager for the organization that owns the repository. For more information, see "[Managing security managers in your organization](https://docs.github.com/enterprise-server@3.2/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
 *
 * For example, to enable GitHub Advanced Security, use this data in the body of the `PATCH` request:
 * `{ "security_and_analysis": {"advanced_security": { "status": "enabled" } } }`.
 *
 * You can check which security and analysis features are currently enabled by using a `GET /repos/{owner}/{repo}` request.
 */
export declare class ReposUpdateRequestBodySecurityAndAnalysis extends SpeakeasyBase {
    /**
     * Use the `status` property to enable or disable GitHub Advanced Security for this repository. For more information, see "[About GitHub Advanced Security](/github/getting-started-with-github/learning-about-github/about-github-advanced-security)."
     */
    advancedSecurity?: ReposUpdateRequestBodySecurityAndAnalysisAdvancedSecurity;
    /**
     * Use the `status` property to enable or disable secret scanning for this repository. For more information, see "[About secret scanning](/code-security/secret-security/about-secret-scanning)."
     */
    secretScanning?: ReposUpdateRequestBodySecurityAndAnalysisSecretScanning;
    /**
     * Use the `status` property to enable or disable secret scanning push protection for this repository. For more information, see "[Protecting pushes with secret scanning](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)."
     */
    secretScanningPushProtection?: ReposUpdateRequestBodySecurityAndAnalysisSecretScanningPushProtection;
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
 * Can be `public` or `private`. If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, `visibility` can also be `internal`."
 */
export declare enum ReposUpdateRequestBodyVisibilityEnum {
    Public = "public",
    Private = "private",
    Internal = "internal"
}
export declare class ReposUpdateRequestBody extends SpeakeasyBase {
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
     * `true` to archive this repository. **Note**: You cannot unarchive repositories through the API.
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
     * **Note**: You will get a `422` error if the organization restricts [changing repository visibility](https://docs.github.com/articles/repository-permission-levels-for-an-organization#changing-the-visibility-of-repositories) to organization owners and a non-owner tries to change the value of private.
     */
    private?: boolean;
    /**
     * Specify which security and analysis features to enable or disable for the repository.
     *
     * @remarks
     *
     * To use this parameter, you must have admin permissions for the repository or be an owner or security manager for the organization that owns the repository. For more information, see "[Managing security managers in your organization](https://docs.github.com/enterprise-server@3.2/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
     *
     * For example, to enable GitHub Advanced Security, use this data in the body of the `PATCH` request:
     * `{ "security_and_analysis": {"advanced_security": { "status": "enabled" } } }`.
     *
     * You can check which security and analysis features are currently enabled by using a `GET /repos/{owner}/{repo}` request.
     */
    securityAndAnalysis?: ReposUpdateRequestBodySecurityAndAnalysis;
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
     * Can be `public` or `private`. If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, `visibility` can also be `internal`."
     */
    visibility?: ReposUpdateRequestBodyVisibilityEnum;
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
