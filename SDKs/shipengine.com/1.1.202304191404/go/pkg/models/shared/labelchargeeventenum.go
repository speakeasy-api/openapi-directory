// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// LabelChargeEventEnum - Determines when the user's account will be charged for the label.
type LabelChargeEventEnum string

const (
	LabelChargeEventEnumCarrierDefault      LabelChargeEventEnum = "carrier_default"
	LabelChargeEventEnumOnCreation          LabelChargeEventEnum = "on_creation"
	LabelChargeEventEnumOnCarrierAcceptance LabelChargeEventEnum = "on_carrier_acceptance"
)

func (e LabelChargeEventEnum) ToPointer() *LabelChargeEventEnum {
	return &e
}

func (e *LabelChargeEventEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "carrier_default":
		fallthrough
	case "on_creation":
		fallthrough
	case "on_carrier_acceptance":
		*e = LabelChargeEventEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for LabelChargeEventEnum: %v", v)
	}
}
