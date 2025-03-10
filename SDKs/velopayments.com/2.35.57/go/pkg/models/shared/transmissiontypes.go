// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type TransmissionTypes struct {
	// Whether the Payor is allowed to pay via ACH
	Ach bool `json:"ACH"`
	// Whether the Payor is allowed to pay via same day ACH
	SameDayAch bool `json:"SAME_DAY_ACH"`
	// Whether the Payor is allowed to pay via wire
	Wire bool `json:"WIRE"`
}
