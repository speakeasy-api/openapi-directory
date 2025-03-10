// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type ChangelogTypeEnum string

const (
	ChangelogTypeEnumUnknown    ChangelogTypeEnum = ""
	ChangelogTypeEnumAdded      ChangelogTypeEnum = "added"
	ChangelogTypeEnumFixed      ChangelogTypeEnum = "fixed"
	ChangelogTypeEnumImproved   ChangelogTypeEnum = "improved"
	ChangelogTypeEnumDeprecated ChangelogTypeEnum = "deprecated"
	ChangelogTypeEnumRemoved    ChangelogTypeEnum = "removed"
)

func (e ChangelogTypeEnum) ToPointer() *ChangelogTypeEnum {
	return &e
}

func (e *ChangelogTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "":
		fallthrough
	case "added":
		fallthrough
	case "fixed":
		fallthrough
	case "improved":
		fallthrough
	case "deprecated":
		fallthrough
	case "removed":
		*e = ChangelogTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ChangelogTypeEnum: %v", v)
	}
}

// Changelog - Changelog object
type Changelog struct {
	// Body content of the changelog
	Body string `json:"body"`
	// Visibility of the changelog
	Hidden *bool `json:"hidden,omitempty"`
	// Title of the changelog
	Title string             `json:"title"`
	Type  *ChangelogTypeEnum `json:"type,omitempty"`
}
