// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// PersonalNameGenderedOutLikelyGenderEnum - Most likely gender
type PersonalNameGenderedOutLikelyGenderEnum string

const (
	PersonalNameGenderedOutLikelyGenderEnumMale    PersonalNameGenderedOutLikelyGenderEnum = "male"
	PersonalNameGenderedOutLikelyGenderEnumFemale  PersonalNameGenderedOutLikelyGenderEnum = "female"
	PersonalNameGenderedOutLikelyGenderEnumUnknown PersonalNameGenderedOutLikelyGenderEnum = "unknown"
)

func (e *PersonalNameGenderedOutLikelyGenderEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "male":
		fallthrough
	case "female":
		fallthrough
	case "unknown":
		*e = PersonalNameGenderedOutLikelyGenderEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for PersonalNameGenderedOutLikelyGenderEnum: %s", s)
	}
}

// PersonalNameGenderedOut - Classified genderized names
type PersonalNameGenderedOut struct {
	// Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value
	GenderScale *float64 `json:"genderScale,omitempty"`
	ID          *string  `json:"id,omitempty"`
	// Most likely gender
	LikelyGender *PersonalNameGenderedOutLikelyGenderEnum `json:"likelyGender,omitempty"`
	// The input name
	Name *string `json:"name,omitempty"`
	// The calibrated probability for inferred gender to have been guessed correctly.
	ProbabilityCalibrated *float64 `json:"probabilityCalibrated,omitempty"`
	// Compatibility to NamSor_v1 Gender score value. Higher score is better, but score is not normalized. Use calibratedProbability if available.
	Score  *float64 `json:"score,omitempty"`
	Script *string  `json:"script,omitempty"`
}
