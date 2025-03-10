// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// GetPaymentsForPayoutV3StatusEnum - Payment Status
// * ACCEPTED: any payment which was accepted at submission time (status may have changed since)
// * REJECTED: any payment rejected by initial submission processing
// * WITHDRAWN: any payment which has been withdrawn
// * WITHDRAWABLE: any payment eligible for withdrawal
type GetPaymentsForPayoutV3StatusEnum string

const (
	GetPaymentsForPayoutV3StatusEnumAccepted     GetPaymentsForPayoutV3StatusEnum = "ACCEPTED"
	GetPaymentsForPayoutV3StatusEnumRejected     GetPaymentsForPayoutV3StatusEnum = "REJECTED"
	GetPaymentsForPayoutV3StatusEnumWithdrawn    GetPaymentsForPayoutV3StatusEnum = "WITHDRAWN"
	GetPaymentsForPayoutV3StatusEnumWithdrawable GetPaymentsForPayoutV3StatusEnum = "WITHDRAWABLE"
)

func (e *GetPaymentsForPayoutV3StatusEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "ACCEPTED":
		fallthrough
	case "REJECTED":
		fallthrough
	case "WITHDRAWN":
		fallthrough
	case "WITHDRAWABLE":
		*e = GetPaymentsForPayoutV3StatusEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for GetPaymentsForPayoutV3StatusEnum: %s", s)
	}
}

// GetPaymentsForPayoutV3TransmissionTypeEnum - Transmission Type
// * ACH
// * SAME_DAY_ACH
// * WIRE
type GetPaymentsForPayoutV3TransmissionTypeEnum string

const (
	GetPaymentsForPayoutV3TransmissionTypeEnumAch        GetPaymentsForPayoutV3TransmissionTypeEnum = "ACH"
	GetPaymentsForPayoutV3TransmissionTypeEnumSameDayAch GetPaymentsForPayoutV3TransmissionTypeEnum = "SAME_DAY_ACH"
	GetPaymentsForPayoutV3TransmissionTypeEnumWire       GetPaymentsForPayoutV3TransmissionTypeEnum = "WIRE"
)

func (e *GetPaymentsForPayoutV3TransmissionTypeEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "ACH":
		fallthrough
	case "SAME_DAY_ACH":
		fallthrough
	case "WIRE":
		*e = GetPaymentsForPayoutV3TransmissionTypeEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for GetPaymentsForPayoutV3TransmissionTypeEnum: %s", s)
	}
}

type GetPaymentsForPayoutV3Request struct {
	// Page number. Default is 1.
	Page *int `queryParam:"style=form,explode=true,name=page"`
	// The number of results to return in a page
	PageSize *int `queryParam:"style=form,explode=true,name=pageSize"`
	// Payment Memo of the Payment
	PaymentMemo *string `queryParam:"style=form,explode=true,name=paymentMemo"`
	// Payor's Id of the Payment
	PayorPaymentID *string `queryParam:"style=form,explode=true,name=payorPaymentId"`
	// Id of the payout
	PayoutID string `pathParam:"style=simple,explode=false,name=payoutId"`
	// The remote id of the payees.
	RemoteID *string `queryParam:"style=form,explode=true,name=remoteId"`
	// Physical Account Name
	SourceAccountName *string `queryParam:"style=form,explode=true,name=sourceAccountName"`
	// Payment Status
	// * ACCEPTED: any payment which was accepted at submission time (status may have changed since)
	// * REJECTED: any payment rejected by initial submission processing
	// * WITHDRAWN: any payment which has been withdrawn
	// * WITHDRAWABLE: any payment eligible for withdrawal
	//
	Status *GetPaymentsForPayoutV3StatusEnum `queryParam:"style=form,explode=true,name=status"`
	// Transmission Type
	// * ACH
	// * SAME_DAY_ACH
	// * WIRE
	//
	TransmissionType *GetPaymentsForPayoutV3TransmissionTypeEnum `queryParam:"style=form,explode=true,name=transmissionType"`
}

type GetPaymentsForPayoutV3Response struct {
	ContentType string
	// Payments for payout
	PagedPaymentsResponseV3 *shared.PagedPaymentsResponseV3
	StatusCode              int
	RawResponse             *http.Response
	// The resource was not found or is no longer available
	//
	InlineResponse404 *shared.InlineResponse404
}
