package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetPaymentsForPayoutPaV3PathParams struct {
	PayoutID string `pathParam:"style=simple,explode=false,name=payoutId"`
}

type GetPaymentsForPayoutPaV3StatusEnum string

const (
	GetPaymentsForPayoutPAV3StatusEnumAccepted             GetPaymentsForPayoutPaV3StatusEnum = "ACCEPTED"
	GetPaymentsForPayoutPAV3StatusEnumAwaitingFunds        GetPaymentsForPayoutPaV3StatusEnum = "AWAITING_FUNDS"
	GetPaymentsForPayoutPAV3StatusEnumFunded               GetPaymentsForPayoutPaV3StatusEnum = "FUNDED"
	GetPaymentsForPayoutPAV3StatusEnumUnfunded             GetPaymentsForPayoutPaV3StatusEnum = "UNFUNDED"
	GetPaymentsForPayoutPAV3StatusEnumBankPaymentRequested GetPaymentsForPayoutPaV3StatusEnum = "BANK_PAYMENT_REQUESTED"
	GetPaymentsForPayoutPAV3StatusEnumRejected             GetPaymentsForPayoutPaV3StatusEnum = "REJECTED"
	GetPaymentsForPayoutPAV3StatusEnumAcceptedByRails      GetPaymentsForPayoutPaV3StatusEnum = "ACCEPTED_BY_RAILS"
	GetPaymentsForPayoutPAV3StatusEnumConfirmed            GetPaymentsForPayoutPaV3StatusEnum = "CONFIRMED"
	GetPaymentsForPayoutPAV3StatusEnumFailed               GetPaymentsForPayoutPaV3StatusEnum = "FAILED"
	GetPaymentsForPayoutPAV3StatusEnumReturned             GetPaymentsForPayoutPaV3StatusEnum = "RETURNED"
	GetPaymentsForPayoutPAV3StatusEnumWithdrawn            GetPaymentsForPayoutPaV3StatusEnum = "WITHDRAWN"
)

type GetPaymentsForPayoutPaV3QueryParams struct {
	Page              *int32                              `queryParam:"style=form,explode=true,name=page"`
	PageSize          *int32                              `queryParam:"style=form,explode=true,name=pageSize"`
	PaymentAmountFrom *int32                              `queryParam:"style=form,explode=true,name=paymentAmountFrom"`
	PaymentAmountTo   *int32                              `queryParam:"style=form,explode=true,name=paymentAmountTo"`
	RemoteID          *string                             `queryParam:"style=form,explode=true,name=remoteId"`
	Sensitive         *bool                               `queryParam:"style=form,explode=true,name=sensitive"`
	Sort              *string                             `queryParam:"style=form,explode=true,name=sort"`
	SourceAmountFrom  *int32                              `queryParam:"style=form,explode=true,name=sourceAmountFrom"`
	SourceAmountTo    *int32                              `queryParam:"style=form,explode=true,name=sourceAmountTo"`
	Status            *GetPaymentsForPayoutPaV3StatusEnum `queryParam:"style=form,explode=true,name=status"`
	SubmittedDateFrom *time.Time                          `queryParam:"style=form,explode=true,name=submittedDateFrom"`
	SubmittedDateTo   *time.Time                          `queryParam:"style=form,explode=true,name=submittedDateTo"`
}

type GetPaymentsForPayoutPaV3Request struct {
	PathParams  GetPaymentsForPayoutPaV3PathParams
	QueryParams GetPaymentsForPayoutPaV3QueryParams
}

type GetPaymentsForPayoutPaV3Response struct {
	ContentType                    string
	GetPaymentsForPayoutResponseV3 *shared.GetPaymentsForPayoutResponseV3
	StatusCode                     int64
	InlineResponse400              *interface{}
	InlineResponse401              *interface{}
	InlineResponse403              *interface{}
	InlineResponse404              *interface{}
}
