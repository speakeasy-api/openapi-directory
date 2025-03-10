// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type ExecutionEnumStatusEnum string

const (
	ExecutionEnumStatusEnumActive ExecutionEnumStatusEnum = "active"
	ExecutionEnumStatusEnumEnded  ExecutionEnumStatusEnum = "ended"
)

func (e ExecutionEnumStatusEnum) ToPointer() *ExecutionEnumStatusEnum {
	return &e
}

func (e *ExecutionEnumStatusEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "active":
		fallthrough
	case "ended":
		*e = ExecutionEnumStatusEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ExecutionEnumStatusEnum: %v", v)
	}
}
