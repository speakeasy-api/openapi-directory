// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// StateErrorTypeEnum - The type of this state error.
type StateErrorTypeEnum string

const (
	StateErrorTypeEnumTypeUnspecified StateErrorTypeEnum = "TYPE_UNSPECIFIED"
	StateErrorTypeEnumKmsError        StateErrorTypeEnum = "KMS_ERROR"
)

func (e StateErrorTypeEnum) ToPointer() *StateErrorTypeEnum {
	return &e
}

func (e *StateErrorTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "TYPE_UNSPECIFIED":
		fallthrough
	case "KMS_ERROR":
		*e = StateErrorTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for StateErrorTypeEnum: %v", v)
	}
}

// StateError - Describes an error related to the current state of the Execution resource.
type StateError struct {
	// Provides specifics about the error.
	Details *string `json:"details,omitempty"`
	// The type of this state error.
	Type *StateErrorTypeEnum `json:"type,omitempty"`
}
