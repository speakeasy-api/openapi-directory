// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type AccessTokenEnumFactorTypesEnum string

const (
	AccessTokenEnumFactorTypesEnumPush AccessTokenEnumFactorTypesEnum = "push"
)

func (e *AccessTokenEnumFactorTypesEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "push":
		*e = AccessTokenEnumFactorTypesEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for AccessTokenEnumFactorTypesEnum: %s", s)
	}
}
