package shared

import (
	"time"
)

type ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum string

const (
	OBWritePaymentDetailsResponse1DataPaymentStatusStatusEnumAccepted                             ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "Accepted"
	OBWritePaymentDetailsResponse1DataPaymentStatusStatusEnumAcceptedCancellationRequest          ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "AcceptedCancellationRequest"
	OBWritePaymentDetailsResponse1DataPaymentStatusStatusEnumAcceptedCreditSettlementCompleted    ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "AcceptedCreditSettlementCompleted"
	OBWritePaymentDetailsResponse1DataPaymentStatusStatusEnumAcceptedCustomerProfile              ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "AcceptedCustomerProfile"
	OBWritePaymentDetailsResponse1DataPaymentStatusStatusEnumAcceptedFundsChecked                 ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "AcceptedFundsChecked"
	OBWritePaymentDetailsResponse1DataPaymentStatusStatusEnumAcceptedSettlementCompleted          ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "AcceptedSettlementCompleted"
	OBWritePaymentDetailsResponse1DataPaymentStatusStatusEnumAcceptedSettlementInProcess          ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "AcceptedSettlementInProcess"
	OBWritePaymentDetailsResponse1DataPaymentStatusStatusEnumAcceptedTechnicalValidation          ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "AcceptedTechnicalValidation"
	OBWritePaymentDetailsResponse1DataPaymentStatusStatusEnumAcceptedWithChange                   ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "AcceptedWithChange"
	OBWritePaymentDetailsResponse1DataPaymentStatusStatusEnumAcceptedWithoutPosting               ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "AcceptedWithoutPosting"
	OBWritePaymentDetailsResponse1DataPaymentStatusStatusEnumCancelled                            ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "Cancelled"
	OBWritePaymentDetailsResponse1DataPaymentStatusStatusEnumNoCancellationProcess                ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "NoCancellationProcess"
	OBWritePaymentDetailsResponse1DataPaymentStatusStatusEnumPartiallyAcceptedCancellationRequest ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "PartiallyAcceptedCancellationRequest"
	OBWritePaymentDetailsResponse1DataPaymentStatusStatusEnumPartiallyAcceptedTechnicalCorrect    ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "PartiallyAcceptedTechnicalCorrect"
	OBWritePaymentDetailsResponse1DataPaymentStatusStatusEnumPaymentCancelled                     ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "PaymentCancelled"
	OBWritePaymentDetailsResponse1DataPaymentStatusStatusEnumPending                              ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "Pending"
	OBWritePaymentDetailsResponse1DataPaymentStatusStatusEnumPendingCancellationRequest           ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "PendingCancellationRequest"
	OBWritePaymentDetailsResponse1DataPaymentStatusStatusEnumReceived                             ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "Received"
	OBWritePaymentDetailsResponse1DataPaymentStatusStatusEnumRejected                             ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "Rejected"
	OBWritePaymentDetailsResponse1DataPaymentStatusStatusEnumRejectedCancellationRequest          ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "RejectedCancellationRequest"
)

type ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum string

const (
	OBWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnumCancelled                ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum = "Cancelled"
	OBWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnumPendingFailingSettlement ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum = "PendingFailingSettlement"
	OBWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnumPendingSettlement        ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum = "PendingSettlement"
	OBWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnumProprietary              ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum = "Proprietary"
	OBWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnumProprietaryRejection     ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum = "ProprietaryRejection"
	OBWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnumSuspended                ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum = "Suspended"
	OBWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnumUnmatched                ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum = "Unmatched"
)

// ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail
// Payment status details as per underlying Payment Rail.
type ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail struct {
	LocalInstrument         *string                                                                      `json:"LocalInstrument,omitempty"`
	Status                  string                                                                       `json:"Status"`
	StatusReason            *ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum `json:"StatusReason,omitempty"`
	StatusReasonDescription *string                                                                      `json:"StatusReasonDescription,omitempty"`
}

// ObWritePaymentDetailsResponse1DataPaymentStatus
// Payment status details.
type ObWritePaymentDetailsResponse1DataPaymentStatus struct {
	PaymentTransactionID string                                                       `json:"PaymentTransactionId"`
	Status               ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum    `json:"Status"`
	StatusDetail         *ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail `json:"StatusDetail,omitempty"`
	StatusUpdateDateTime time.Time                                                    `json:"StatusUpdateDateTime"`
}

type ObWritePaymentDetailsResponse1Data struct {
	PaymentStatus []ObWritePaymentDetailsResponse1DataPaymentStatus `json:"PaymentStatus,omitempty"`
}

type ObWritePaymentDetailsResponse1 struct {
	Data  ObWritePaymentDetailsResponse1Data `json:"Data"`
	Links *Links                             `json:"Links,omitempty"`
	Meta  *Meta                              `json:"Meta,omitempty"`
}
