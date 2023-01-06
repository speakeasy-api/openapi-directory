package shared

import (
	"time"
)

type HiuHealthInformationRequestResponseHiRequestSessionStatusEnum string

const (
	HIUHealthInformationRequestResponseHiRequestSessionStatusEnumRequested    HiuHealthInformationRequestResponseHiRequestSessionStatusEnum = "REQUESTED"
	HIUHealthInformationRequestResponseHiRequestSessionStatusEnumAcknowledged HiuHealthInformationRequestResponseHiRequestSessionStatusEnum = "ACKNOWLEDGED"
)

type HiuHealthInformationRequestResponseHiRequest struct {
	SessionStatus HiuHealthInformationRequestResponseHiRequestSessionStatusEnum `json:"sessionStatus"`
	TransactionID string                                                        `json:"transactionId"`
}

type HiuHealthInformationRequestResponse struct {
	Error     *Error                                        `json:"error,omitempty"`
	HiRequest *HiuHealthInformationRequestResponseHiRequest `json:"hiRequest,omitempty"`
	RequestID string                                        `json:"requestId"`
	Resp      RequestReference                              `json:"resp"`
	Timestamp time.Time                                     `json:"timestamp"`
}
