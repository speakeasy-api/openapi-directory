// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// CreativeConfigCreativeTypeEnum - The type of creative that can be assigned to the inventory source. Only the following types are supported: * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_VIDEO`
type CreativeConfigCreativeTypeEnum string

const (
	CreativeConfigCreativeTypeEnumCreativeTypeUnspecified                     CreativeConfigCreativeTypeEnum = "CREATIVE_TYPE_UNSPECIFIED"
	CreativeConfigCreativeTypeEnumCreativeTypeStandard                        CreativeConfigCreativeTypeEnum = "CREATIVE_TYPE_STANDARD"
	CreativeConfigCreativeTypeEnumCreativeTypeExpandable                      CreativeConfigCreativeTypeEnum = "CREATIVE_TYPE_EXPANDABLE"
	CreativeConfigCreativeTypeEnumCreativeTypeVideo                           CreativeConfigCreativeTypeEnum = "CREATIVE_TYPE_VIDEO"
	CreativeConfigCreativeTypeEnumCreativeTypeNative                          CreativeConfigCreativeTypeEnum = "CREATIVE_TYPE_NATIVE"
	CreativeConfigCreativeTypeEnumCreativeTypeTemplatedAppInstall             CreativeConfigCreativeTypeEnum = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL"
	CreativeConfigCreativeTypeEnumCreativeTypeNativeSiteSquare                CreativeConfigCreativeTypeEnum = "CREATIVE_TYPE_NATIVE_SITE_SQUARE"
	CreativeConfigCreativeTypeEnumCreativeTypeTemplatedAppInstallInterstitial CreativeConfigCreativeTypeEnum = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL_INTERSTITIAL"
	CreativeConfigCreativeTypeEnumCreativeTypeLightbox                        CreativeConfigCreativeTypeEnum = "CREATIVE_TYPE_LIGHTBOX"
	CreativeConfigCreativeTypeEnumCreativeTypeNativeAppInstall                CreativeConfigCreativeTypeEnum = "CREATIVE_TYPE_NATIVE_APP_INSTALL"
	CreativeConfigCreativeTypeEnumCreativeTypeNativeAppInstallSquare          CreativeConfigCreativeTypeEnum = "CREATIVE_TYPE_NATIVE_APP_INSTALL_SQUARE"
	CreativeConfigCreativeTypeEnumCreativeTypeAudio                           CreativeConfigCreativeTypeEnum = "CREATIVE_TYPE_AUDIO"
	CreativeConfigCreativeTypeEnumCreativeTypePublisherHosted                 CreativeConfigCreativeTypeEnum = "CREATIVE_TYPE_PUBLISHER_HOSTED"
	CreativeConfigCreativeTypeEnumCreativeTypeNativeVideo                     CreativeConfigCreativeTypeEnum = "CREATIVE_TYPE_NATIVE_VIDEO"
	CreativeConfigCreativeTypeEnumCreativeTypeTemplatedAppInstallVideo        CreativeConfigCreativeTypeEnum = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL_VIDEO"
)

func (e CreativeConfigCreativeTypeEnum) ToPointer() *CreativeConfigCreativeTypeEnum {
	return &e
}

func (e *CreativeConfigCreativeTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "CREATIVE_TYPE_UNSPECIFIED":
		fallthrough
	case "CREATIVE_TYPE_STANDARD":
		fallthrough
	case "CREATIVE_TYPE_EXPANDABLE":
		fallthrough
	case "CREATIVE_TYPE_VIDEO":
		fallthrough
	case "CREATIVE_TYPE_NATIVE":
		fallthrough
	case "CREATIVE_TYPE_TEMPLATED_APP_INSTALL":
		fallthrough
	case "CREATIVE_TYPE_NATIVE_SITE_SQUARE":
		fallthrough
	case "CREATIVE_TYPE_TEMPLATED_APP_INSTALL_INTERSTITIAL":
		fallthrough
	case "CREATIVE_TYPE_LIGHTBOX":
		fallthrough
	case "CREATIVE_TYPE_NATIVE_APP_INSTALL":
		fallthrough
	case "CREATIVE_TYPE_NATIVE_APP_INSTALL_SQUARE":
		fallthrough
	case "CREATIVE_TYPE_AUDIO":
		fallthrough
	case "CREATIVE_TYPE_PUBLISHER_HOSTED":
		fallthrough
	case "CREATIVE_TYPE_NATIVE_VIDEO":
		fallthrough
	case "CREATIVE_TYPE_TEMPLATED_APP_INSTALL_VIDEO":
		*e = CreativeConfigCreativeTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for CreativeConfigCreativeTypeEnum: %v", v)
	}
}

// CreativeConfig - Creative requirements configuration for the inventory source.
type CreativeConfig struct {
	// The type of creative that can be assigned to the inventory source. Only the following types are supported: * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_VIDEO`
	CreativeType *CreativeConfigCreativeTypeEnum `json:"creativeType,omitempty"`
	// The configuration for display creatives.
	DisplayCreativeConfig *InventorySourceDisplayCreativeConfig `json:"displayCreativeConfig,omitempty"`
	// The configuration for video creatives.
	VideoCreativeConfig *InventorySourceVideoCreativeConfig `json:"videoCreativeConfig,omitempty"`
}
