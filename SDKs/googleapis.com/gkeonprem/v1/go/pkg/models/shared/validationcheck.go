// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// ValidationCheckOptionEnum - Options used for the validation check
type ValidationCheckOptionEnum string

const (
	ValidationCheckOptionEnumOptionsUnspecified          ValidationCheckOptionEnum = "OPTIONS_UNSPECIFIED"
	ValidationCheckOptionEnumSkipValidationCheckBlocking ValidationCheckOptionEnum = "SKIP_VALIDATION_CHECK_BLOCKING"
	ValidationCheckOptionEnumSkipValidationAll           ValidationCheckOptionEnum = "SKIP_VALIDATION_ALL"
)

func (e ValidationCheckOptionEnum) ToPointer() *ValidationCheckOptionEnum {
	return &e
}

func (e *ValidationCheckOptionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "OPTIONS_UNSPECIFIED":
		fallthrough
	case "SKIP_VALIDATION_CHECK_BLOCKING":
		fallthrough
	case "SKIP_VALIDATION_ALL":
		*e = ValidationCheckOptionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ValidationCheckOptionEnum: %v", v)
	}
}

// ValidationCheckScenarioEnum - Output only. The scenario when the preflight checks were run.
type ValidationCheckScenarioEnum string

const (
	ValidationCheckScenarioEnumScenarioUnspecified ValidationCheckScenarioEnum = "SCENARIO_UNSPECIFIED"
	ValidationCheckScenarioEnumCreate              ValidationCheckScenarioEnum = "CREATE"
	ValidationCheckScenarioEnumUpdate              ValidationCheckScenarioEnum = "UPDATE"
)

func (e ValidationCheckScenarioEnum) ToPointer() *ValidationCheckScenarioEnum {
	return &e
}

func (e *ValidationCheckScenarioEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "SCENARIO_UNSPECIFIED":
		fallthrough
	case "CREATE":
		fallthrough
	case "UPDATE":
		*e = ValidationCheckScenarioEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ValidationCheckScenarioEnum: %v", v)
	}
}

// ValidationCheck - ValidationCheck represents the result of preflight check.
type ValidationCheck struct {
	// Options used for the validation check
	Option *ValidationCheckOptionEnum `json:"option,omitempty"`
	// Output only. The scenario when the preflight checks were run.
	Scenario *ValidationCheckScenarioEnum `json:"scenario,omitempty"`
	// ValidationCheckStatus defines the detailed validation check status.
	Status *ValidationCheckStatus `json:"status,omitempty"`
}

// ValidationCheckInput - ValidationCheck represents the result of preflight check.
type ValidationCheckInput struct {
	// Options used for the validation check
	Option *ValidationCheckOptionEnum `json:"option,omitempty"`
	// ValidationCheckStatus defines the detailed validation check status.
	Status *ValidationCheckStatus `json:"status,omitempty"`
}
