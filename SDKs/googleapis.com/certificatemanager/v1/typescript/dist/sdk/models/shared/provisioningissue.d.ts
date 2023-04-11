import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. Reason for provisioning failures.
 */
export declare enum ProvisioningIssueReasonEnum {
    ReasonUnspecified = "REASON_UNSPECIFIED",
    AuthorizationIssue = "AUTHORIZATION_ISSUE",
    RateLimited = "RATE_LIMITED"
}
/**
 * Information about issues with provisioning a Managed Certificate.
 */
export declare class ProvisioningIssue extends SpeakeasyBase {
    /**
     * Output only. Human readable explanation about the issue. Provided to help address the configuration issues. Not guaranteed to be stable. For programmatic access use Reason enum.
     */
    details?: string;
    /**
     * Output only. Reason for provisioning failures.
     */
    reason?: ProvisioningIssueReasonEnum;
}
