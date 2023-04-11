import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Allow specific users, teams, or apps to bypass pull request requirements.
 */
export declare class ReposUpdatePullRequestReviewProtectionRequestBodyBypassPullRequestAllowances extends SpeakeasyBase {
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
export declare class ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions extends SpeakeasyBase {
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
export declare class ReposUpdatePullRequestReviewProtectionRequestBody extends SpeakeasyBase {
    /**
     * Allow specific users, teams, or apps to bypass pull request requirements.
     */
    bypassPullRequestAllowances?: ReposUpdatePullRequestReviewProtectionRequestBodyBypassPullRequestAllowances;
    /**
     * Set to `true` if you want to automatically dismiss approving reviews when someone pushes a new commit.
     */
    dismissStaleReviews?: boolean;
    /**
     * Specify which users, teams, and apps can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories.
     */
    dismissalRestrictions?: ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions;
    /**
     * Blocks merging pull requests until [code owners](https://docs.github.com/enterprise-server@3.6/articles/about-code-owners/) have reviewed.
     */
    requireCodeOwnerReviews?: boolean;
    /**
     * Specifies the number of reviewers required to approve pull requests. Use a number between 1 and 6 or 0 to not require reviewers.
     */
    requiredApprovingReviewCount?: number;
}
export declare class ReposUpdatePullRequestReviewProtectionRequest extends SpeakeasyBase {
    requestBody?: ReposUpdatePullRequestReviewProtectionRequestBody;
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
export declare class ReposUpdatePullRequestReviewProtectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    protectedBranchPullRequestReview?: shared.ProtectedBranchPullRequestReview;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
