/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BranchRestrictionPolicy } from "./branchrestrictionpolicy";
import { ProtectedBranchAdminEnforced } from "./protectedbranchadminenforced";
import { ProtectedBranchPullRequestReview } from "./protectedbranchpullrequestreview";
import { ProtectedBranchRequiredStatusCheck } from "./protectedbranchrequiredstatuscheck";
import { Expose, Type } from "class-transformer";

export class BranchProtectionAllowDeletions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "enabled" })
  enabled?: boolean;
}

export class BranchProtectionAllowForcePushes extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "enabled" })
  enabled?: boolean;
}

export class BranchProtectionBlockCreations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "enabled" })
  enabled?: boolean;
}

export class BranchProtectionRequiredConversationResolution extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "enabled" })
  enabled?: boolean;
}

export class BranchProtectionRequiredLinearHistory extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "enabled" })
  enabled?: boolean;
}

export class BranchProtectionRequiredSignatures extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "enabled" })
  enabled: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url: string;
}

/**
 * Branch Protection
 */
export class BranchProtection extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allow_deletions" })
  @Type(() => BranchProtectionAllowDeletions)
  allowDeletions?: BranchProtectionAllowDeletions;

  @SpeakeasyMetadata()
  @Expose({ name: "allow_force_pushes" })
  @Type(() => BranchProtectionAllowForcePushes)
  allowForcePushes?: BranchProtectionAllowForcePushes;

  @SpeakeasyMetadata()
  @Expose({ name: "block_creations" })
  @Type(() => BranchProtectionBlockCreations)
  blockCreations?: BranchProtectionBlockCreations;

  @SpeakeasyMetadata()
  @Expose({ name: "enabled" })
  enabled?: boolean;

  /**
   * Protected Branch Admin Enforced
   */
  @SpeakeasyMetadata()
  @Expose({ name: "enforce_admins" })
  @Type(() => ProtectedBranchAdminEnforced)
  enforceAdmins?: ProtectedBranchAdminEnforced;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "protection_url" })
  protectionUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "required_conversation_resolution" })
  @Type(() => BranchProtectionRequiredConversationResolution)
  requiredConversationResolution?: BranchProtectionRequiredConversationResolution;

  @SpeakeasyMetadata()
  @Expose({ name: "required_linear_history" })
  @Type(() => BranchProtectionRequiredLinearHistory)
  requiredLinearHistory?: BranchProtectionRequiredLinearHistory;

  /**
   * Protected Branch Pull Request Review
   */
  @SpeakeasyMetadata()
  @Expose({ name: "required_pull_request_reviews" })
  @Type(() => ProtectedBranchPullRequestReview)
  requiredPullRequestReviews?: ProtectedBranchPullRequestReview;

  @SpeakeasyMetadata()
  @Expose({ name: "required_signatures" })
  @Type(() => BranchProtectionRequiredSignatures)
  requiredSignatures?: BranchProtectionRequiredSignatures;

  /**
   * Protected Branch Required Status Check
   */
  @SpeakeasyMetadata()
  @Expose({ name: "required_status_checks" })
  @Type(() => ProtectedBranchRequiredStatusCheck)
  requiredStatusChecks?: ProtectedBranchRequiredStatusCheck;

  /**
   * Branch Restriction Policy
   */
  @SpeakeasyMetadata()
  @Expose({ name: "restrictions" })
  @Type(() => BranchRestrictionPolicy)
  restrictions?: BranchRestrictionPolicy;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;
}
