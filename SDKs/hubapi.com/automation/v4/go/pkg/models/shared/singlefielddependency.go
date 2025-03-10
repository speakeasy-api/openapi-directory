// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type SingleFieldDependencyDependencyTypeEnum string

const (
	SingleFieldDependencyDependencyTypeEnumSingleField SingleFieldDependencyDependencyTypeEnum = "SINGLE_FIELD"
)

func (e SingleFieldDependencyDependencyTypeEnum) ToPointer() *SingleFieldDependencyDependencyTypeEnum {
	return &e
}

func (e *SingleFieldDependencyDependencyTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "SINGLE_FIELD":
		*e = SingleFieldDependencyDependencyTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for SingleFieldDependencyDependencyTypeEnum: %v", v)
	}
}

type SingleFieldDependency struct {
	ControllingFieldName string                                  `json:"controllingFieldName"`
	DependencyType       SingleFieldDependencyDependencyTypeEnum `json:"dependencyType"`
	DependentFieldNames  []string                                `json:"dependentFieldNames"`
}
