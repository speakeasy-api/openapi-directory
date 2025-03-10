// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type ChallengeEnumFactorTypesEnum string

const (
	ChallengeEnumFactorTypesEnumPush ChallengeEnumFactorTypesEnum = "push"
	ChallengeEnumFactorTypesEnumTotp ChallengeEnumFactorTypesEnum = "totp"
)

func (e *ChallengeEnumFactorTypesEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "push":
		fallthrough
	case "totp":
		*e = ChallengeEnumFactorTypesEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for ChallengeEnumFactorTypesEnum: %s", s)
	}
}
