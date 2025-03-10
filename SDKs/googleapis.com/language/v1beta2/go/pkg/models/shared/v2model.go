// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// V2ModelContentCategoriesVersionEnum - The content categories used for classification.
type V2ModelContentCategoriesVersionEnum string

const (
	V2ModelContentCategoriesVersionEnumContentCategoriesVersionUnspecified V2ModelContentCategoriesVersionEnum = "CONTENT_CATEGORIES_VERSION_UNSPECIFIED"
	V2ModelContentCategoriesVersionEnumV1                                  V2ModelContentCategoriesVersionEnum = "V1"
	V2ModelContentCategoriesVersionEnumV2                                  V2ModelContentCategoriesVersionEnum = "V2"
)

func (e V2ModelContentCategoriesVersionEnum) ToPointer() *V2ModelContentCategoriesVersionEnum {
	return &e
}

func (e *V2ModelContentCategoriesVersionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "CONTENT_CATEGORIES_VERSION_UNSPECIFIED":
		fallthrough
	case "V1":
		fallthrough
	case "V2":
		*e = V2ModelContentCategoriesVersionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for V2ModelContentCategoriesVersionEnum: %v", v)
	}
}

// V2Model - Options for the V2 model.
type V2Model struct {
	// The content categories used for classification.
	ContentCategoriesVersion *V2ModelContentCategoriesVersionEnum `json:"contentCategoriesVersion,omitempty"`
}
