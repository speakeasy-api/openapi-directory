import { SpeakeasyBase } from "../../../internal/utils";
import { BranchRestrictionPolicy } from "./branchrestrictionpolicy";
import { Integration } from "./integration";
import { SimpleUser } from "./simpleuser";
import { StatusCheckPolicy } from "./statuscheckpolicy";
import { Team } from "./team";
export declare class ProtectedBranchAllowDeletions extends SpeakeasyBase {
    enabled: boolean;
}
export declare class ProtectedBranchAllowForcePushes extends SpeakeasyBase {
    enabled: boolean;
}
export declare class ProtectedBranchBlockCreations extends SpeakeasyBase {
    enabled: boolean;
}
export declare class ProtectedBranchEnforceAdmins extends SpeakeasyBase {
    enabled: boolean;
    url: string;
}
export declare class ProtectedBranchRequiredConversationResolution extends SpeakeasyBase {
    enabled?: boolean;
}
export declare class ProtectedBranchRequiredLinearHistory extends SpeakeasyBase {
    enabled: boolean;
}
export declare class ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions extends SpeakeasyBase {
    apps?: Integration[];
    teams: Team[];
    teamsUrl: string;
    url: string;
    users: SimpleUser[];
    usersUrl: string;
}
export declare class ProtectedBranchRequiredPullRequestReviews extends SpeakeasyBase {
    dismissStaleReviews?: boolean;
    dismissalRestrictions?: ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions;
    requireCodeOwnerReviews?: boolean;
    requiredApprovingReviewCount?: number;
    url: string;
}
export declare class ProtectedBranchRequiredSignatures extends SpeakeasyBase {
    enabled: boolean;
    url: string;
}
/**
 * Branch protections protect branches
 */
export declare class ProtectedBranch extends SpeakeasyBase {
    allowDeletions?: ProtectedBranchAllowDeletions;
    allowForcePushes?: ProtectedBranchAllowForcePushes;
    blockCreations?: ProtectedBranchBlockCreations;
    enforceAdmins?: ProtectedBranchEnforceAdmins;
    requiredConversationResolution?: ProtectedBranchRequiredConversationResolution;
    requiredLinearHistory?: ProtectedBranchRequiredLinearHistory;
    requiredPullRequestReviews?: ProtectedBranchRequiredPullRequestReviews;
    requiredSignatures?: ProtectedBranchRequiredSignatures;
    /**
     * Status Check Policy
     */
    requiredStatusChecks?: StatusCheckPolicy;
    /**
     * Branch Restriction Policy
     */
    restrictions?: BranchRestrictionPolicy;
    url: string;
}
