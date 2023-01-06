package shared

type RemoveBgMultipartBgImageFile struct {
	BgImageFile string `multipartForm:"name=bg_image_file"`
	Content     []byte `multipartForm:"content"`
}

type RemoveBgMultipartChannelsEnum string

const (
	RemoveBgMultipartChannelsEnumRgba  RemoveBgMultipartChannelsEnum = "rgba"
	RemoveBgMultipartChannelsEnumAlpha RemoveBgMultipartChannelsEnum = "alpha"
)

type RemoveBgMultipartFormatEnum string

const (
	RemoveBgMultipartFormatEnumAuto RemoveBgMultipartFormatEnum = "auto"
	RemoveBgMultipartFormatEnumPng  RemoveBgMultipartFormatEnum = "png"
	RemoveBgMultipartFormatEnumJpg  RemoveBgMultipartFormatEnum = "jpg"
	RemoveBgMultipartFormatEnumZip  RemoveBgMultipartFormatEnum = "zip"
)

type RemoveBgMultipartImageFile struct {
	Content   []byte `multipartForm:"content"`
	ImageFile string `multipartForm:"name=image_file"`
}

type RemoveBgMultipartSizeEnum string

const (
	RemoveBgMultipartSizeEnumPreview RemoveBgMultipartSizeEnum = "preview"
	RemoveBgMultipartSizeEnumFull    RemoveBgMultipartSizeEnum = "full"
	RemoveBgMultipartSizeEnumAuto    RemoveBgMultipartSizeEnum = "auto"
)

type RemoveBgMultipartTypeEnum string

const (
	RemoveBgMultipartTypeEnumAuto    RemoveBgMultipartTypeEnum = "auto"
	RemoveBgMultipartTypeEnumPerson  RemoveBgMultipartTypeEnum = "person"
	RemoveBgMultipartTypeEnumProduct RemoveBgMultipartTypeEnum = "product"
	RemoveBgMultipartTypeEnumCar     RemoveBgMultipartTypeEnum = "car"
)

type RemoveBgMultipartTypeLevelEnum string

const (
	RemoveBgMultipartTypeLevelEnumNone   RemoveBgMultipartTypeLevelEnum = "none"
	RemoveBgMultipartTypeLevelEnumOne    RemoveBgMultipartTypeLevelEnum = "1"
	RemoveBgMultipartTypeLevelEnumTwo    RemoveBgMultipartTypeLevelEnum = "2"
	RemoveBgMultipartTypeLevelEnumLatest RemoveBgMultipartTypeLevelEnum = "latest"
)

type RemoveBgMultipart struct {
	AddShadow        *bool                           `multipartForm:"name=add_shadow"`
	BgColor          *string                         `multipartForm:"name=bg_color"`
	BgImageFile      *RemoveBgMultipartBgImageFile   `multipartForm:"file"`
	BgImageURL       *string                         `multipartForm:"name=bg_image_url"`
	Channels         *RemoveBgMultipartChannelsEnum  `multipartForm:"name=channels"`
	Crop             *bool                           `multipartForm:"name=crop"`
	CropMargin       *string                         `multipartForm:"name=crop_margin"`
	Format           *RemoveBgMultipartFormatEnum    `multipartForm:"name=format"`
	ImageFile        *RemoveBgMultipartImageFile     `multipartForm:"file"`
	ImageFileB64     *string                         `multipartForm:"name=image_file_b64"`
	ImageURL         *string                         `multipartForm:"name=image_url"`
	Position         *string                         `multipartForm:"name=position"`
	Roi              *string                         `multipartForm:"name=roi"`
	Scale            *string                         `multipartForm:"name=scale"`
	Semitransparency *bool                           `multipartForm:"name=semitransparency"`
	Size             *RemoveBgMultipartSizeEnum      `multipartForm:"name=size"`
	Type             *RemoveBgMultipartTypeEnum      `multipartForm:"name=type"`
	TypeLevel        *RemoveBgMultipartTypeLevelEnum `multipartForm:"name=type_level"`
}
