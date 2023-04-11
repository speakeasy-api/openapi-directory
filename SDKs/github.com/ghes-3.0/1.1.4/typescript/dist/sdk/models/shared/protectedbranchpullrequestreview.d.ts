import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";
import { Team } from "./team";
export declare class ProtectedBranchPullRequestReviewDismissalRestrictions extends SpeakeasyBase {
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
    dismissStaleReviews: boolean;
    dismissalRestrictions?: ProtectedBranchPullRequestReviewDismissalRestrictions;
    requireCodeOwnerReviews: boolean;
    requiredApprovingReviewCount?: number;
    url?: string;
}
