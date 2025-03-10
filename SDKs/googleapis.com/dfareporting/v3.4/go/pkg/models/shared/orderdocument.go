// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
	"openapi/pkg/types"
	"time"
)

// OrderDocumentTypeEnum - Type of this order document
type OrderDocumentTypeEnum string

const (
	OrderDocumentTypeEnumPlanningOrderTypeInsertionOrder OrderDocumentTypeEnum = "PLANNING_ORDER_TYPE_INSERTION_ORDER"
	OrderDocumentTypeEnumPlanningOrderTypeChangeOrder    OrderDocumentTypeEnum = "PLANNING_ORDER_TYPE_CHANGE_ORDER"
)

func (e OrderDocumentTypeEnum) ToPointer() *OrderDocumentTypeEnum {
	return &e
}

func (e *OrderDocumentTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "PLANNING_ORDER_TYPE_INSERTION_ORDER":
		fallthrough
	case "PLANNING_ORDER_TYPE_CHANGE_ORDER":
		*e = OrderDocumentTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for OrderDocumentTypeEnum: %v", v)
	}
}

// OrderDocument - Contains properties of a Planning order document.
type OrderDocument struct {
	// Account ID of this order document.
	AccountID *string `json:"accountId,omitempty"`
	// Advertiser ID of this order document.
	AdvertiserID *string `json:"advertiserId,omitempty"`
	// The amended order document ID of this order document. An order document can be created by optionally amending another order document so that the change history can be preserved.
	AmendedOrderDocumentID *string `json:"amendedOrderDocumentId,omitempty"`
	// IDs of users who have approved this order document.
	ApprovedByUserProfileIds []string `json:"approvedByUserProfileIds,omitempty"`
	// Whether this order document is cancelled.
	Cancelled *bool `json:"cancelled,omitempty"`
	// Modification timestamp.
	CreatedInfo   *LastModifiedInfo `json:"createdInfo,omitempty"`
	EffectiveDate *types.Date       `json:"effectiveDate,omitempty"`
	// ID of this order document.
	ID *string `json:"id,omitempty"`
	// Identifies what kind of resource this is. Value: the fixed string "dfareporting#orderDocument".
	Kind *string `json:"kind,omitempty"`
	// List of email addresses that received the last sent document.
	LastSentRecipients []string   `json:"lastSentRecipients,omitempty"`
	LastSentTime       *time.Time `json:"lastSentTime,omitempty"`
	// ID of the order from which this order document is created.
	OrderID *string `json:"orderId,omitempty"`
	// Project ID of this order document.
	ProjectID *string `json:"projectId,omitempty"`
	// Whether this order document has been signed.
	Signed *bool `json:"signed,omitempty"`
	// Subaccount ID of this order document.
	SubaccountID *string `json:"subaccountId,omitempty"`
	// Title of this order document.
	Title *string `json:"title,omitempty"`
	// Type of this order document
	Type *OrderDocumentTypeEnum `json:"type,omitempty"`
}
