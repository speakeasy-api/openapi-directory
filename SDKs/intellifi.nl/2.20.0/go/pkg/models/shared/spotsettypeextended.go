// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// SpotSetTypeExtendedOperatorEnum - Operator
type SpotSetTypeExtendedOperatorEnum string

const (
	SpotSetTypeExtendedOperatorEnumGt     SpotSetTypeExtendedOperatorEnum = "gt"
	SpotSetTypeExtendedOperatorEnumGte    SpotSetTypeExtendedOperatorEnum = "gte"
	SpotSetTypeExtendedOperatorEnumEq     SpotSetTypeExtendedOperatorEnum = "eq"
	SpotSetTypeExtendedOperatorEnumIn     SpotSetTypeExtendedOperatorEnum = "in"
	SpotSetTypeExtendedOperatorEnumNe     SpotSetTypeExtendedOperatorEnum = "ne"
	SpotSetTypeExtendedOperatorEnumLt     SpotSetTypeExtendedOperatorEnum = "lt"
	SpotSetTypeExtendedOperatorEnumLte    SpotSetTypeExtendedOperatorEnum = "lte"
	SpotSetTypeExtendedOperatorEnumStarts SpotSetTypeExtendedOperatorEnum = "starts"
	SpotSetTypeExtendedOperatorEnumEnds   SpotSetTypeExtendedOperatorEnum = "ends"
)

func (e *SpotSetTypeExtendedOperatorEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "gt":
		fallthrough
	case "gte":
		fallthrough
	case "eq":
		fallthrough
	case "in":
		fallthrough
	case "ne":
		fallthrough
	case "lt":
		fallthrough
	case "lte":
		fallthrough
	case "starts":
		fallthrough
	case "ends":
		*e = SpotSetTypeExtendedOperatorEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for SpotSetTypeExtendedOperatorEnum: %s", s)
	}
}

// SpotSetTypeExtendedTypeEnum - Spot set type `extended`; Items that have the extended property (key) and match the requirement for value using the specified operator, as specified by this set
type SpotSetTypeExtendedTypeEnum string

const (
	SpotSetTypeExtendedTypeEnumExtended SpotSetTypeExtendedTypeEnum = "extended"
)

func (e *SpotSetTypeExtendedTypeEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "extended":
		*e = SpotSetTypeExtendedTypeEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for SpotSetTypeExtendedTypeEnum: %s", s)
	}
}

type SpotSetTypeExtendedInput struct {
	// Extended data property key
	Key *string `json:"key,omitempty"`
	// Operator
	Operator *SpotSetTypeExtendedOperatorEnum `json:"operator,omitempty"`
	// Spot set unique identifier. Must be unique within a single device
	Setid *int64 `json:"setid,omitempty"`
	// Spot set type `extended`; Items that have the extended property (key) and match the requirement for value using the specified operator, as specified by this set
	Type *SpotSetTypeExtendedTypeEnum `json:"type,omitempty"`
	// Extended data property value.
	Value interface{} `json:"value,omitempty"`
}

type SpotSetTypeExtended struct {
	// Who was responsible for the creation of this spot list. Value determines who's allowed to manages this object.
	CreatedBy *string `json:"created_by,omitempty"`
	// Unique identifier for resource.
	ID *string `json:"id,omitempty"`
	// Extended data property key
	Key *string `json:"key,omitempty"`
	// Operator
	Operator *SpotSetTypeExtendedOperatorEnum `json:"operator,omitempty"`
	// Spot set unique identifier. Must be unique within a single device
	Setid *int64 `json:"setid,omitempty"`
	// Unique identifier for resource.
	SpotID *string `json:"spot_id,omitempty"`
	// [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.
	TimeCreated *string `json:"time_created,omitempty"`
	// [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.
	TimeUpdated *string `json:"time_updated,omitempty"`
	// Spot set type `extended`; Items that have the extended property (key) and match the requirement for value using the specified operator, as specified by this set
	Type *SpotSetTypeExtendedTypeEnum `json:"type,omitempty"`
	// Extended data property value.
	Value interface{} `json:"value,omitempty"`
}
