// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// ReplaceImageRequestImageReplaceMethodEnum - The replacement method.
type ReplaceImageRequestImageReplaceMethodEnum string

const (
	ReplaceImageRequestImageReplaceMethodEnumImageReplaceMethodUnspecified ReplaceImageRequestImageReplaceMethodEnum = "IMAGE_REPLACE_METHOD_UNSPECIFIED"
	ReplaceImageRequestImageReplaceMethodEnumCenterCrop                    ReplaceImageRequestImageReplaceMethodEnum = "CENTER_CROP"
)

func (e ReplaceImageRequestImageReplaceMethodEnum) ToPointer() *ReplaceImageRequestImageReplaceMethodEnum {
	return &e
}

func (e *ReplaceImageRequestImageReplaceMethodEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "IMAGE_REPLACE_METHOD_UNSPECIFIED":
		fallthrough
	case "CENTER_CROP":
		*e = ReplaceImageRequestImageReplaceMethodEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ReplaceImageRequestImageReplaceMethodEnum: %v", v)
	}
}

// ReplaceImageRequest - Replaces an existing image with a new image. Replacing an image removes some image effects from the existing image in order to mirror the behavior of the Docs editor.
type ReplaceImageRequest struct {
	// The ID of the existing image that will be replaced. The ID can be retrieved from the response of a get request.
	ImageObjectID *string `json:"imageObjectId,omitempty"`
	// The replacement method.
	ImageReplaceMethod *ReplaceImageRequestImageReplaceMethodEnum `json:"imageReplaceMethod,omitempty"`
	// The URI of the new image. The image is fetched once at insertion time and a copy is stored for display inside the document. Images must be less than 50MB, cannot exceed 25 megapixels, and must be in PNG, JPEG, or GIF format. The provided URI can't surpass 2 KB in length. The URI is saved with the image, and exposed through the ImageProperties.source_uri field.
	URI *string `json:"uri,omitempty"`
}
