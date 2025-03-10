// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// CodeScanningAlertSetStateEnum - Sets the state of the code scanning alert. You must provide `dismissed_reason` when you set the state to `dismissed`.
type CodeScanningAlertSetStateEnum string

const (
	CodeScanningAlertSetStateEnumOpen      CodeScanningAlertSetStateEnum = "open"
	CodeScanningAlertSetStateEnumDismissed CodeScanningAlertSetStateEnum = "dismissed"
)

func (e CodeScanningAlertSetStateEnum) ToPointer() *CodeScanningAlertSetStateEnum {
	return &e
}

func (e *CodeScanningAlertSetStateEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "open":
		fallthrough
	case "dismissed":
		*e = CodeScanningAlertSetStateEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for CodeScanningAlertSetStateEnum: %v", v)
	}
}
