// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type PolicyStatusEnum string

const (
	PolicyStatusEnumPending      PolicyStatusEnum = "pending"
	PolicyStatusEnumUnderReview  PolicyStatusEnum = "under_review"
	PolicyStatusEnumActive       PolicyStatusEnum = "active"
	PolicyStatusEnumExpired      PolicyStatusEnum = "expired"
	PolicyStatusEnumCancelled    PolicyStatusEnum = "cancelled"
	PolicyStatusEnumUnresponsive PolicyStatusEnum = "unresponsive"
)

func (e PolicyStatusEnum) ToPointer() *PolicyStatusEnum {
	return &e
}

func (e *PolicyStatusEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "pending":
		fallthrough
	case "under_review":
		fallthrough
	case "active":
		fallthrough
	case "expired":
		fallthrough
	case "cancelled":
		fallthrough
	case "unresponsive":
		*e = PolicyStatusEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for PolicyStatusEnum: %v", v)
	}
}

type Policy struct {
	ID         *string           `json:"id,omitempty"`
	PortalLink *string           `json:"portal_link,omitempty"`
	QuoteID    *string           `json:"quote_id,omitempty"`
	Status     *PolicyStatusEnum `json:"status,omitempty"`
}
