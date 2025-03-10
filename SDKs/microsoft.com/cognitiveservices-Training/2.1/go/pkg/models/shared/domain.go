// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type DomainTypeEnum string

const (
	DomainTypeEnumClassification  DomainTypeEnum = "Classification"
	DomainTypeEnumObjectDetection DomainTypeEnum = "ObjectDetection"
)

func (e DomainTypeEnum) ToPointer() *DomainTypeEnum {
	return &e
}

func (e *DomainTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "Classification":
		fallthrough
	case "ObjectDetection":
		*e = DomainTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DomainTypeEnum: %v", v)
	}
}

// Domain - OK
type Domain struct {
	Enabled    *bool           `json:"enabled,omitempty"`
	Exportable *bool           `json:"exportable,omitempty"`
	ID         *string         `json:"id,omitempty"`
	Name       *string         `json:"name,omitempty"`
	Type       *DomainTypeEnum `json:"type,omitempty"`
}
