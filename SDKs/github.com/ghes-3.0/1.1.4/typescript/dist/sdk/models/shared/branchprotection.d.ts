import { SpeakeasyBase } from "../../../internal/utils";
import { BranchRestrictionPolicy } from "./branchrestrictionpolicy";
import { ProtectedBranchAdminEnforced } from "./protectedbranchadminenforced";
import { ProtectedBranchPullRequestReview } from "./protectedbranchpullrequestreview";
import { ProtectedBranchRequiredStatusCheck } from "./protectedbranchrequiredstatuscheck";
export declare class BranchProtectionAllowDeletions extends SpeakeasyBase {
    enabled?: boolean;
}
export declare class BranchProtectionAllowForcePushes extends SpeakeasyBase {
    enabled?: boolean;
}
export declare class BranchProtectionRequiredConversationResolution extends SpeakeasyBase {
    enabled?: boolean;
}
export declare class BranchProtectionRequiredLinearHistory extends SpeakeasyBase {
    enabled?: boolean;
}
export declare class BranchProtectionRequiredSignatures extends SpeakeasyBase {
    enabled: boolean;
    url: string;
}
/**
 * Branch Protection
 */
export declare class BranchProtection extends SpeakeasyBase {
    allowDeletions?: BranchProtectionAllowDeletions;
    allowForcePushes?: BranchProtectionAllowForcePushes;
    enabled?: boolean;
    /**
     * Protected Branch Admin Enforced
     */
    enforceAdmins?: ProtectedBranchAdminEnforced;
    name?: string;
    protectionUrl?: string;
    requiredConversationResolution?: BranchProtectionRequiredConversationResolution;
    requiredLinearHistory?: BranchProtectionRequiredLinearHistory;
    /**
     * Protected Branch Pull Request Review
     */
    requiredPullRequestReviews?: ProtectedBranchPullRequestReview;
    requiredSignatures?: BranchProtectionRequiredSignatures;
    /**
     * Protected Branch Required Status Check
     */
    requiredStatusChecks?: ProtectedBranchRequiredStatusCheck;
    /**
     * Branch Restriction Policy
     */
    restrictions?: BranchRestrictionPolicy;
    url?: string;
}
