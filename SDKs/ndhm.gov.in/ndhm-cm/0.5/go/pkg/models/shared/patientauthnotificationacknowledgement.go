// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
	"time"
)

type PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum string

const (
	PatientAuthNotificationAcknowledgementAcknowledgementStatusEnumOk PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum = "OK"
)

func (e PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum) ToPointer() *PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum {
	return &e
}

func (e *PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "OK":
		*e = PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum: %v", v)
	}
}

type PatientAuthNotificationAcknowledgementAcknowledgement struct {
	Status PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum `json:"status"`
}

type PatientAuthNotificationAcknowledgement struct {
	Acknowledgement *PatientAuthNotificationAcknowledgementAcknowledgement `json:"acknowledgement,omitempty"`
	Error           *Error                                                 `json:"error,omitempty"`
	// a nonce, unique for each HTTP request
	RequestID string           `json:"requestId"`
	Resp      RequestReference `json:"resp"`
	// Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
	Timestamp time.Time `json:"timestamp"`
}
