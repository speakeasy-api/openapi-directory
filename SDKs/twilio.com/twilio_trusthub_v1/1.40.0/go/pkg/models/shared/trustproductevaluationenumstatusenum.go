// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type TrustProductEvaluationEnumStatusEnum string

const (
	TrustProductEvaluationEnumStatusEnumCompliant    TrustProductEvaluationEnumStatusEnum = "compliant"
	TrustProductEvaluationEnumStatusEnumNoncompliant TrustProductEvaluationEnumStatusEnum = "noncompliant"
)

func (e *TrustProductEvaluationEnumStatusEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "compliant":
		fallthrough
	case "noncompliant":
		*e = TrustProductEvaluationEnumStatusEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for TrustProductEvaluationEnumStatusEnum: %s", s)
	}
}
