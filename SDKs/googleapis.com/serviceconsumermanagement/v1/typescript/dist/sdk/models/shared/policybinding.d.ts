import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Translates to IAM Policy bindings (without auditing at this level)
 */
export declare class PolicyBinding extends SpeakeasyBase {
    /**
     * Uses the same format as in IAM policy. `member` must include both a prefix and ID. For example, `user:{emailId}`, `serviceAccount:{emailId}`, `group:{emailId}`.
     */
    members?: string[];
    /**
     * Role. (https://cloud.google.com/iam/docs/understanding-roles) For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
     */
    role?: string;
}
