import { SpeakeasyBase } from "../../../internal/utils";
import { Integration } from "./integration";
import { SimpleUser } from "./simpleuser";
import { Team } from "./team";
/**
 * Allow specific users, teams, or apps to bypass pull request requirements.
 */
export declare class ProtectedBranchPullRequestReviewBypassPullRequestAllowances extends SpeakeasyBase {
    /**
     * The list of apps allowed to bypass pull request requirements.
     */
    apps?: Integration[];
    /**
     * The list of teams allowed to bypass pull request requirements.
     */
    teams?: Team[];
    /**
     * The list of users allowed to bypass pull request requirements.
     */
    users?: SimpleUser[];
}
export declare class ProtectedBranchPullRequestReviewDismissalRestrictions extends SpeakeasyBase {
    /**
     * The list of apps with review dismissal access.
     */
    apps?: Integration[];
    /**
     * The list of teams with review dismissal access.
     */
    teams?: Team[];
    teamsUrl?: string;
    url?: string;
    /**
     * The list of users with review dismissal access.
     */
    users?: SimpleUser[];
    usersUrl?: string;
}
/**
 * Protected Branch Pull Request Review
 */
export declare class ProtectedBranchPullRequestReview extends SpeakeasyBase {
    /**
     * Allow specific users, teams, or apps to bypass pull request requirements.
     */
    bypassPullRequestAllowances?: ProtectedBranchPullRequestReviewBypassPullRequestAllowances;
    dismissStaleReviews: boolean;
    dismissalRestrictions?: ProtectedBranchPullRequestReviewDismissalRestrictions;
    requireCodeOwnerReviews: boolean;
    requiredApprovingReviewCount?: number;
    url?: string;
}
