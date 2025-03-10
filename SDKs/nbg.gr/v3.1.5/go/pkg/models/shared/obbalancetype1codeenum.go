// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type OBBalanceType1CodeEnum string

const (
	OBBalanceType1CodeEnumClosingAvailable       OBBalanceType1CodeEnum = "ClosingAvailable"
	OBBalanceType1CodeEnumClosingBooked          OBBalanceType1CodeEnum = "ClosingBooked"
	OBBalanceType1CodeEnumClosingCleared         OBBalanceType1CodeEnum = "ClosingCleared"
	OBBalanceType1CodeEnumExpected               OBBalanceType1CodeEnum = "Expected"
	OBBalanceType1CodeEnumForwardAvailable       OBBalanceType1CodeEnum = "ForwardAvailable"
	OBBalanceType1CodeEnumInformation            OBBalanceType1CodeEnum = "Information"
	OBBalanceType1CodeEnumInterimAvailable       OBBalanceType1CodeEnum = "InterimAvailable"
	OBBalanceType1CodeEnumInterimBooked          OBBalanceType1CodeEnum = "InterimBooked"
	OBBalanceType1CodeEnumInterimCleared         OBBalanceType1CodeEnum = "InterimCleared"
	OBBalanceType1CodeEnumOpeningAvailable       OBBalanceType1CodeEnum = "OpeningAvailable"
	OBBalanceType1CodeEnumOpeningBooked          OBBalanceType1CodeEnum = "OpeningBooked"
	OBBalanceType1CodeEnumOpeningCleared         OBBalanceType1CodeEnum = "OpeningCleared"
	OBBalanceType1CodeEnumPreviouslyClosedBooked OBBalanceType1CodeEnum = "PreviouslyClosedBooked"
)

func (e OBBalanceType1CodeEnum) ToPointer() *OBBalanceType1CodeEnum {
	return &e
}

func (e *OBBalanceType1CodeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "ClosingAvailable":
		fallthrough
	case "ClosingBooked":
		fallthrough
	case "ClosingCleared":
		fallthrough
	case "Expected":
		fallthrough
	case "ForwardAvailable":
		fallthrough
	case "Information":
		fallthrough
	case "InterimAvailable":
		fallthrough
	case "InterimBooked":
		fallthrough
	case "InterimCleared":
		fallthrough
	case "OpeningAvailable":
		fallthrough
	case "OpeningBooked":
		fallthrough
	case "OpeningCleared":
		fallthrough
	case "PreviouslyClosedBooked":
		*e = OBBalanceType1CodeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for OBBalanceType1CodeEnum: %v", v)
	}
}
