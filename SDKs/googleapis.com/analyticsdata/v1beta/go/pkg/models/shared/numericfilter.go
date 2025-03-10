// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// NumericFilterOperationEnum - The operation type for this filter.
type NumericFilterOperationEnum string

const (
	NumericFilterOperationEnumOperationUnspecified NumericFilterOperationEnum = "OPERATION_UNSPECIFIED"
	NumericFilterOperationEnumEqual                NumericFilterOperationEnum = "EQUAL"
	NumericFilterOperationEnumLessThan             NumericFilterOperationEnum = "LESS_THAN"
	NumericFilterOperationEnumLessThanOrEqual      NumericFilterOperationEnum = "LESS_THAN_OR_EQUAL"
	NumericFilterOperationEnumGreaterThan          NumericFilterOperationEnum = "GREATER_THAN"
	NumericFilterOperationEnumGreaterThanOrEqual   NumericFilterOperationEnum = "GREATER_THAN_OR_EQUAL"
)

func (e NumericFilterOperationEnum) ToPointer() *NumericFilterOperationEnum {
	return &e
}

func (e *NumericFilterOperationEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "OPERATION_UNSPECIFIED":
		fallthrough
	case "EQUAL":
		fallthrough
	case "LESS_THAN":
		fallthrough
	case "LESS_THAN_OR_EQUAL":
		fallthrough
	case "GREATER_THAN":
		fallthrough
	case "GREATER_THAN_OR_EQUAL":
		*e = NumericFilterOperationEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for NumericFilterOperationEnum: %v", v)
	}
}

// NumericFilter - Filters for numeric or date values.
type NumericFilter struct {
	// The operation type for this filter.
	Operation *NumericFilterOperationEnum `json:"operation,omitempty"`
	// To represent a number.
	Value *NumericValue `json:"value,omitempty"`
}
