// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// ReviewStatusInfoApprovalStatusEnum - Represents the basic approval needed for a creative to begin serving. Summary of creative_and_landing_page_review_status and content_and_policy_review_status.
type ReviewStatusInfoApprovalStatusEnum string

const (
	ReviewStatusInfoApprovalStatusEnumApprovalStatusUnspecified         ReviewStatusInfoApprovalStatusEnum = "APPROVAL_STATUS_UNSPECIFIED"
	ReviewStatusInfoApprovalStatusEnumApprovalStatusPendingNotServable  ReviewStatusInfoApprovalStatusEnum = "APPROVAL_STATUS_PENDING_NOT_SERVABLE"
	ReviewStatusInfoApprovalStatusEnumApprovalStatusPendingServable     ReviewStatusInfoApprovalStatusEnum = "APPROVAL_STATUS_PENDING_SERVABLE"
	ReviewStatusInfoApprovalStatusEnumApprovalStatusApprovedServable    ReviewStatusInfoApprovalStatusEnum = "APPROVAL_STATUS_APPROVED_SERVABLE"
	ReviewStatusInfoApprovalStatusEnumApprovalStatusRejectedNotServable ReviewStatusInfoApprovalStatusEnum = "APPROVAL_STATUS_REJECTED_NOT_SERVABLE"
)

func (e ReviewStatusInfoApprovalStatusEnum) ToPointer() *ReviewStatusInfoApprovalStatusEnum {
	return &e
}

func (e *ReviewStatusInfoApprovalStatusEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "APPROVAL_STATUS_UNSPECIFIED":
		fallthrough
	case "APPROVAL_STATUS_PENDING_NOT_SERVABLE":
		fallthrough
	case "APPROVAL_STATUS_PENDING_SERVABLE":
		fallthrough
	case "APPROVAL_STATUS_APPROVED_SERVABLE":
		fallthrough
	case "APPROVAL_STATUS_REJECTED_NOT_SERVABLE":
		*e = ReviewStatusInfoApprovalStatusEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ReviewStatusInfoApprovalStatusEnum: %v", v)
	}
}

// ReviewStatusInfoContentAndPolicyReviewStatusEnum - Content and policy review status for the creative.
type ReviewStatusInfoContentAndPolicyReviewStatusEnum string

const (
	ReviewStatusInfoContentAndPolicyReviewStatusEnumReviewStatusUnspecified ReviewStatusInfoContentAndPolicyReviewStatusEnum = "REVIEW_STATUS_UNSPECIFIED"
	ReviewStatusInfoContentAndPolicyReviewStatusEnumReviewStatusApproved    ReviewStatusInfoContentAndPolicyReviewStatusEnum = "REVIEW_STATUS_APPROVED"
	ReviewStatusInfoContentAndPolicyReviewStatusEnumReviewStatusRejected    ReviewStatusInfoContentAndPolicyReviewStatusEnum = "REVIEW_STATUS_REJECTED"
	ReviewStatusInfoContentAndPolicyReviewStatusEnumReviewStatusPending     ReviewStatusInfoContentAndPolicyReviewStatusEnum = "REVIEW_STATUS_PENDING"
)

func (e ReviewStatusInfoContentAndPolicyReviewStatusEnum) ToPointer() *ReviewStatusInfoContentAndPolicyReviewStatusEnum {
	return &e
}

func (e *ReviewStatusInfoContentAndPolicyReviewStatusEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "REVIEW_STATUS_UNSPECIFIED":
		fallthrough
	case "REVIEW_STATUS_APPROVED":
		fallthrough
	case "REVIEW_STATUS_REJECTED":
		fallthrough
	case "REVIEW_STATUS_PENDING":
		*e = ReviewStatusInfoContentAndPolicyReviewStatusEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ReviewStatusInfoContentAndPolicyReviewStatusEnum: %v", v)
	}
}

// ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum - Creative and landing page review status for the creative.
type ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum string

const (
	ReviewStatusInfoCreativeAndLandingPageReviewStatusEnumReviewStatusUnspecified ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum = "REVIEW_STATUS_UNSPECIFIED"
	ReviewStatusInfoCreativeAndLandingPageReviewStatusEnumReviewStatusApproved    ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum = "REVIEW_STATUS_APPROVED"
	ReviewStatusInfoCreativeAndLandingPageReviewStatusEnumReviewStatusRejected    ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum = "REVIEW_STATUS_REJECTED"
	ReviewStatusInfoCreativeAndLandingPageReviewStatusEnumReviewStatusPending     ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum = "REVIEW_STATUS_PENDING"
)

func (e ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum) ToPointer() *ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum {
	return &e
}

func (e *ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "REVIEW_STATUS_UNSPECIFIED":
		fallthrough
	case "REVIEW_STATUS_APPROVED":
		fallthrough
	case "REVIEW_STATUS_REJECTED":
		fallthrough
	case "REVIEW_STATUS_PENDING":
		*e = ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum: %v", v)
	}
}

// ReviewStatusInfo - Review statuses for the creative.
type ReviewStatusInfo struct {
	// Represents the basic approval needed for a creative to begin serving. Summary of creative_and_landing_page_review_status and content_and_policy_review_status.
	ApprovalStatus *ReviewStatusInfoApprovalStatusEnum `json:"approvalStatus,omitempty"`
	// Content and policy review status for the creative.
	ContentAndPolicyReviewStatus *ReviewStatusInfoContentAndPolicyReviewStatusEnum `json:"contentAndPolicyReviewStatus,omitempty"`
	// Creative and landing page review status for the creative.
	CreativeAndLandingPageReviewStatus *ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum `json:"creativeAndLandingPageReviewStatus,omitempty"`
	// Exchange review statuses for the creative.
	ExchangeReviewStatuses []ExchangeReviewStatus `json:"exchangeReviewStatuses,omitempty"`
	// Publisher review statuses for the creative.
	PublisherReviewStatuses []PublisherReviewStatus `json:"publisherReviewStatuses,omitempty"`
}
