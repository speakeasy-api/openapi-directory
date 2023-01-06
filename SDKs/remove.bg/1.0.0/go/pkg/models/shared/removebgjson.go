package shared

type RemoveBgJSONChannelsEnum string

const (
	RemoveBgJSONChannelsEnumRgba  RemoveBgJSONChannelsEnum = "rgba"
	RemoveBgJSONChannelsEnumAlpha RemoveBgJSONChannelsEnum = "alpha"
)

type RemoveBgJSONFormatEnum string

const (
	RemoveBgJSONFormatEnumAuto RemoveBgJSONFormatEnum = "auto"
	RemoveBgJSONFormatEnumPng  RemoveBgJSONFormatEnum = "png"
	RemoveBgJSONFormatEnumJpg  RemoveBgJSONFormatEnum = "jpg"
	RemoveBgJSONFormatEnumZip  RemoveBgJSONFormatEnum = "zip"
)

type RemoveBgJSONSizeEnum string

const (
	RemoveBgJSONSizeEnumPreview RemoveBgJSONSizeEnum = "preview"
	RemoveBgJSONSizeEnumFull    RemoveBgJSONSizeEnum = "full"
	RemoveBgJSONSizeEnumAuto    RemoveBgJSONSizeEnum = "auto"
)

type RemoveBgJSONTypeEnum string

const (
	RemoveBgJSONTypeEnumAuto    RemoveBgJSONTypeEnum = "auto"
	RemoveBgJSONTypeEnumPerson  RemoveBgJSONTypeEnum = "person"
	RemoveBgJSONTypeEnumProduct RemoveBgJSONTypeEnum = "product"
	RemoveBgJSONTypeEnumCar     RemoveBgJSONTypeEnum = "car"
)

type RemoveBgJSONTypeLevelEnum string

const (
	RemoveBgJSONTypeLevelEnumNone   RemoveBgJSONTypeLevelEnum = "none"
	RemoveBgJSONTypeLevelEnumOne    RemoveBgJSONTypeLevelEnum = "1"
	RemoveBgJSONTypeLevelEnumTwo    RemoveBgJSONTypeLevelEnum = "2"
	RemoveBgJSONTypeLevelEnumLatest RemoveBgJSONTypeLevelEnum = "latest"
)

type RemoveBgJSON struct {
	AddShadow        *bool                      `json:"add_shadow,omitempty" form:"name=add_shadow"`
	BgColor          *string                    `json:"bg_color,omitempty" form:"name=bg_color"`
	BgImageURL       *string                    `json:"bg_image_url,omitempty" form:"name=bg_image_url"`
	Channels         *RemoveBgJSONChannelsEnum  `json:"channels,omitempty" form:"name=channels"`
	Crop             *bool                      `json:"crop,omitempty" form:"name=crop"`
	CropMargin       *string                    `json:"crop_margin,omitempty" form:"name=crop_margin"`
	Format           *RemoveBgJSONFormatEnum    `json:"format,omitempty" form:"name=format"`
	ImageFileB64     *string                    `json:"image_file_b64,omitempty" form:"name=image_file_b64"`
	ImageURL         *string                    `json:"image_url,omitempty" form:"name=image_url"`
	Position         *string                    `json:"position,omitempty" form:"name=position"`
	Roi              *string                    `json:"roi,omitempty" form:"name=roi"`
	Scale            *string                    `json:"scale,omitempty" form:"name=scale"`
	Semitransparency *bool                      `json:"semitransparency,omitempty" form:"name=semitransparency"`
	Size             *RemoveBgJSONSizeEnum      `json:"size,omitempty" form:"name=size"`
	Type             *RemoveBgJSONTypeEnum      `json:"type,omitempty" form:"name=type"`
	TypeLevel        *RemoveBgJSONTypeLevelEnum `json:"type_level,omitempty" form:"name=type_level"`
}
