// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// GoogleAppsCardV1ImageCropStyleTypeEnum - The crop type.
type GoogleAppsCardV1ImageCropStyleTypeEnum string

const (
	GoogleAppsCardV1ImageCropStyleTypeEnumImageCropTypeUnspecified GoogleAppsCardV1ImageCropStyleTypeEnum = "IMAGE_CROP_TYPE_UNSPECIFIED"
	GoogleAppsCardV1ImageCropStyleTypeEnumSquare                   GoogleAppsCardV1ImageCropStyleTypeEnum = "SQUARE"
	GoogleAppsCardV1ImageCropStyleTypeEnumCircle                   GoogleAppsCardV1ImageCropStyleTypeEnum = "CIRCLE"
	GoogleAppsCardV1ImageCropStyleTypeEnumRectangleCustom          GoogleAppsCardV1ImageCropStyleTypeEnum = "RECTANGLE_CUSTOM"
	GoogleAppsCardV1ImageCropStyleTypeEnumRectangle43              GoogleAppsCardV1ImageCropStyleTypeEnum = "RECTANGLE_4_3"
)

func (e GoogleAppsCardV1ImageCropStyleTypeEnum) ToPointer() *GoogleAppsCardV1ImageCropStyleTypeEnum {
	return &e
}

func (e *GoogleAppsCardV1ImageCropStyleTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "IMAGE_CROP_TYPE_UNSPECIFIED":
		fallthrough
	case "SQUARE":
		fallthrough
	case "CIRCLE":
		fallthrough
	case "RECTANGLE_CUSTOM":
		fallthrough
	case "RECTANGLE_4_3":
		*e = GoogleAppsCardV1ImageCropStyleTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GoogleAppsCardV1ImageCropStyleTypeEnum: %v", v)
	}
}

// GoogleAppsCardV1ImageCropStyle - Represents the crop style applied to an image. For example, here's how to apply a 16 by 9 aspect ratio: ``` cropStyle { "type": "RECTANGLE_CUSTOM", "aspectRatio": 16/9 } ```
type GoogleAppsCardV1ImageCropStyle struct {
	// The aspect ratio to use if the crop type is `RECTANGLE_CUSTOM`. For example, here's how to apply a 16 by 9 aspect ratio: ``` cropStyle { "type": "RECTANGLE_CUSTOM", "aspectRatio": 16/9 } ```
	AspectRatio *float64 `json:"aspectRatio,omitempty"`
	// The crop type.
	Type *GoogleAppsCardV1ImageCropStyleTypeEnum `json:"type,omitempty"`
}
