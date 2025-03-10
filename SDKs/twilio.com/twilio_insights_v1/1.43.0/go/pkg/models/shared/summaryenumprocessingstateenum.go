// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// SummaryEnumProcessingStateEnum
type SummaryEnumProcessingStateEnum string

const (
	SummaryEnumProcessingStateEnumComplete SummaryEnumProcessingStateEnum = "complete"
	SummaryEnumProcessingStateEnumPartial  SummaryEnumProcessingStateEnum = "partial"
)

func (e SummaryEnumProcessingStateEnum) ToPointer() *SummaryEnumProcessingStateEnum {
	return &e
}

func (e *SummaryEnumProcessingStateEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "complete":
		fallthrough
	case "partial":
		*e = SummaryEnumProcessingStateEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for SummaryEnumProcessingStateEnum: %v", v)
	}
}
