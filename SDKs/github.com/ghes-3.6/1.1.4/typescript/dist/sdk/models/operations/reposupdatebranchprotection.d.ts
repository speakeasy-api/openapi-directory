import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Allow specific users, teams, or apps to bypass pull request requirements.
 */
export declare class ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsBypassPullRequestAllowances extends SpeakeasyBase {
    /**
     * The list of app `slug`s allowed to bypass pull request requirements.
     */
    apps?: string[];
    /**
     * The list of team `slug`s allowed to bypass pull request requirements.
     */
    teams?: string[];
    /**
     * The list of user `login`s allowed to bypass pull request requirements.
     */
    users?: string[];
}
/**
 * Specify which users, teams, and apps can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories.
 */
export declare class ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions extends SpeakeasyBase {
    /**
     * The list of app `slug`s with dismissal access
     */
    apps?: string[];
    /**
     * The list of team `slug`s with dismissal access
     */
    teams?: string[];
    /**
     * The list of user `login`s with dismissal access
     */
    users?: string[];
}
/**
 * Require at least one approving review on a pull request, before merging. Set to `null` to disable.
 */
export declare class ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews extends SpeakeasyBase {
    /**
     * Allow specific users, teams, or apps to bypass pull request requirements.
     */
    bypassPullRequestAllowances?: ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsBypassPullRequestAllowances;
    /**
     * Set to `true` if you want to automatically dismiss approving reviews when someone pushes a new commit.
     */
    dismissStaleReviews?: boolean;
    /**
     * Specify which users, teams, and apps can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories.
     */
    dismissalRestrictions?: ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions;
    /**
     * Blocks merging pull requests until [code owners](https://docs.github.com/enterprise-server@3.6/articles/about-code-owners/) review them.
     */
    requireCodeOwnerReviews?: boolean;
    /**
     * Specify the number of reviewers required to approve pull requests. Use a number between 1 and 6 or 0 to not require reviewers.
     */
    requiredApprovingReviewCount?: number;
}
export declare class ReposUpdateBranchProtectionRequestBodyRequiredStatusChecksChecks extends SpeakeasyBase {
    /**
     * The ID of the GitHub App that must provide this check. Omit this field to automatically select the GitHub App that has recently provided this check, or any app if it was not set by a GitHub App. Pass -1 to explicitly allow any app to set the status.
     */
    appId?: number;
    /**
     * The name of the required check
     */
    context: string;
}
/**
 * Require status checks to pass before merging. Set to `null` to disable.
 */
export declare class ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks extends SpeakeasyBase {
    /**
     * The list of status checks to require in order to merge into this branch.
     */
    checks?: ReposUpdateBranchProtectionRequestBodyRequiredStatusChecksChecks[];
    /**
     * **Deprecated**: The list of status checks to require in order to merge into this branch. If any of these checks have recently been set by a particular GitHub App, they will be required to come from that app in future for the branch to merge. Use `checks` instead of `contexts` for more fine-grained control.
     *
     * @remarks
     *
     */
    contexts: string[];
    /**
     * Require branches to be up to date before merging.
     */
    strict: boolean;
}
/**
 * Restrict who can push to the protected branch. User, app, and team `restrictions` are only available for organization-owned repositories. Set to `null` to disable.
 */
export declare class ReposUpdateBranchProtectionRequestBodyRestrictions extends SpeakeasyBase {
    /**
     * The list of app `slug`s with push access
     */
    apps?: string[];
    /**
     * The list of team `slug`s with push access
     */
    teams: string[];
    /**
     * The list of user `login`s with push access
     */
    users: string[];
}
export declare class ReposUpdateBranchProtectionRequestBody extends SpeakeasyBase {
    /**
     * Allows deletion of the protected branch by anyone with write access to the repository. Set to `false` to prevent deletion of the protected branch. Default: `false`. For more information, see "[Enabling force pushes to a protected branch](https://docs.github.com/enterprise-server@3.6/github/administering-a-repository/enabling-force-pushes-to-a-protected-branch)" in the GitHub Help documentation.
     */
    allowDeletions?: boolean;
    /**
     * Permits force pushes to the protected branch by anyone with write access to the repository. Set to `true` to allow force pushes. Set to `false` or `null` to block force pushes. Default: `false`. For more information, see "[Enabling force pushes to a protected branch](https://docs.github.com/enterprise-server@3.6/github/administering-a-repository/enabling-force-pushes-to-a-protected-branch)" in the GitHub Help documentation."
     */
    allowForcePushes?: boolean;
    /**
     * If set to `true`, the `restrictions` branch protection settings which limits who can push will also block pushes which create new branches, unless the push is initiated by a user, team, or app which has the ability to push. Set to `true` to restrict new branch creation. Default: `false`.
     */
    blockCreations?: boolean;
    /**
     * Enforce all configured restrictions for administrators. Set to `true` to enforce required status checks for repository administrators. Set to `null` to disable.
     */
    enforceAdmins: boolean;
    /**
     * Requires all conversations on code to be resolved before a pull request can be merged into a branch that matches this rule. Set to `false` to disable. Default: `false`.
     */
    requiredConversationResolution?: boolean;
    /**
     * Enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch. Set to `true` to enforce a linear commit history. Set to `false` to disable a linear commit Git history. Your repository must allow squash merging or rebase merging before you can enable a linear commit history. Default: `false`. For more information, see "[Requiring a linear commit history](https://docs.github.com/enterprise-server@3.6/github/administering-a-repository/requiring-a-linear-commit-history)" in the GitHub Help documentation.
     */
    requiredLinearHistory?: boolean;
    /**
     * Require at least one approving review on a pull request, before merging. Set to `null` to disable.
     */
    requiredPullRequestReviews: ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews;
    /**
     * Require status checks to pass before merging. Set to `null` to disable.
     */
    requiredStatusChecks: ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks;
    /**
     * Restrict who can push to the protected branch. User, app, and team `restrictions` are only available for organization-owned repositories. Set to `null` to disable.
     */
    restrictions: ReposUpdateBranchProtectionRequestBodyRestrictions;
}
export declare class ReposUpdateBranchProtectionRequest extends SpeakeasyBase {
    requestBody: ReposUpdateBranchProtectionRequestBody;
    /**
     * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/enterprise-server@3.6/graphql).
     */
    branch: string;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ReposUpdateBranchProtectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    protectedBranch?: shared.ProtectedBranch;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationErrorSimple?: shared.ValidationErrorSimple;
}
