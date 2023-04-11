import { SpeakeasyBase } from "../../../internal/utils";
import { ExchangeReviewStatus } from "./exchangereviewstatus";
import { PublisherReviewStatus } from "./publisherreviewstatus";
/**
 * Represents the basic approval needed for a creative to begin serving. Summary of creative_and_landing_page_review_status and content_and_policy_review_status.
 */
export declare enum ReviewStatusInfoApprovalStatusEnum {
    ApprovalStatusUnspecified = "APPROVAL_STATUS_UNSPECIFIED",
    ApprovalStatusPendingNotServable = "APPROVAL_STATUS_PENDING_NOT_SERVABLE",
    ApprovalStatusPendingServable = "APPROVAL_STATUS_PENDING_SERVABLE",
    ApprovalStatusApprovedServable = "APPROVAL_STATUS_APPROVED_SERVABLE",
    ApprovalStatusRejectedNotServable = "APPROVAL_STATUS_REJECTED_NOT_SERVABLE"
}
/**
 * Content and policy review status for the creative.
 */
export declare enum ReviewStatusInfoContentAndPolicyReviewStatusEnum {
    ReviewStatusUnspecified = "REVIEW_STATUS_UNSPECIFIED",
    ReviewStatusApproved = "REVIEW_STATUS_APPROVED",
    ReviewStatusRejected = "REVIEW_STATUS_REJECTED",
    ReviewStatusPending = "REVIEW_STATUS_PENDING"
}
/**
 * Creative and landing page review status for the creative.
 */
export declare enum ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum {
    ReviewStatusUnspecified = "REVIEW_STATUS_UNSPECIFIED",
    ReviewStatusApproved = "REVIEW_STATUS_APPROVED",
    ReviewStatusRejected = "REVIEW_STATUS_REJECTED",
    ReviewStatusPending = "REVIEW_STATUS_PENDING"
}
/**
 * Review statuses for the creative.
 */
export declare class ReviewStatusInfo extends SpeakeasyBase {
    /**
     * Represents the basic approval needed for a creative to begin serving. Summary of creative_and_landing_page_review_status and content_and_policy_review_status.
     */
    approvalStatus?: ReviewStatusInfoApprovalStatusEnum;
    /**
     * Content and policy review status for the creative.
     */
    contentAndPolicyReviewStatus?: ReviewStatusInfoContentAndPolicyReviewStatusEnum;
    /**
     * Creative and landing page review status for the creative.
     */
    creativeAndLandingPageReviewStatus?: ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum;
    /**
     * Exchange review statuses for the creative.
     */
    exchangeReviewStatuses?: ExchangeReviewStatus[];
    /**
     * Publisher review statuses for the creative.
     */
    publisherReviewStatuses?: PublisherReviewStatus[];
}
