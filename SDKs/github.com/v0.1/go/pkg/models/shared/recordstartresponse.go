// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// RecordStartResponseMessageEnum - Response message
type RecordStartResponseMessageEnum string

const (
	RecordStartResponseMessageEnumRecordStartExecuted               RecordStartResponseMessageEnum = "RecordStart Executed"
	RecordStartResponseMessageEnumCallUUIDParameterMustBePresent    RecordStartResponseMessageEnum = "CallUUID Parameter must be present"
	RecordStartResponseMessageEnumFileFormatParameterMustBe         RecordStartResponseMessageEnum = "FileFormat Parameter must be"
	RecordStartResponseMessageEnumRecordStartFailedInvalidTimeLimit RecordStartResponseMessageEnum = "RecordStart Failed: invalid TimeLimit"
	RecordStartResponseMessageEnumRecordStartFailedCallNotFound     RecordStartResponseMessageEnum = "RecordStart Failed -- Call not found"
	RecordStartResponseMessageEnumRecordStartFailed                 RecordStartResponseMessageEnum = "RecordStart Failed"
)

func (e RecordStartResponseMessageEnum) ToPointer() *RecordStartResponseMessageEnum {
	return &e
}

func (e *RecordStartResponseMessageEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "RecordStart Executed":
		fallthrough
	case "CallUUID Parameter must be present":
		fallthrough
	case "FileFormat Parameter must be":
		fallthrough
	case "RecordStart Failed: invalid TimeLimit":
		fallthrough
	case "RecordStart Failed -- Call not found":
		fallthrough
	case "RecordStart Failed":
		*e = RecordStartResponseMessageEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for RecordStartResponseMessageEnum: %v", v)
	}
}

// RecordStartResponse - Response
type RecordStartResponse struct {
	// Response message
	Message RecordStartResponseMessageEnum `json:"Message"`
	// Directory path/URI where the recording file will be saved
	RecordFile string `json:"RecordFile"`
	// Whether the request was successful or not
	Success bool `json:"Success"`
}
