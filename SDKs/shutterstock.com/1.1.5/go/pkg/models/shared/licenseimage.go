package shared

type LicenseImageFormatEnum string

const (
	LicenseImageFormatEnumJpg LicenseImageFormatEnum = "jpg"
	LicenseImageFormatEnumEps LicenseImageFormatEnum = "eps"
)

type LicenseImageSizeEnum string

const (
	LicenseImageSizeEnumSmall  LicenseImageSizeEnum = "small"
	LicenseImageSizeEnumMedium LicenseImageSizeEnum = "medium"
	LicenseImageSizeEnumHuge   LicenseImageSizeEnum = "huge"
	LicenseImageSizeEnumVector LicenseImageSizeEnum = "vector"
	LicenseImageSizeEnumCustom LicenseImageSizeEnum = "custom"
)

// LicenseImage
// Data required to license an image
type LicenseImage struct {
	AuthCookie               *Cookie                 `json:"auth_cookie,omitempty"`
	CustomDimensions         *CustomSizeDimensions   `json:"custom_dimensions,omitempty"`
	EditorialAcknowledgement *bool                   `json:"editorial_acknowledgement,omitempty"`
	Format                   *LicenseImageFormatEnum `json:"format,omitempty"`
	ImageID                  string                  `json:"image_id"`
	Metadata                 map[string]interface{}  `json:"metadata,omitempty"`
	Price                    *float64                `json:"price,omitempty"`
	SearchID                 *string                 `json:"search_id,omitempty"`
	ShowModal                *bool                   `json:"show_modal,omitempty"`
	Size                     *LicenseImageSizeEnum   `json:"size,omitempty"`
	SubscriptionID           *string                 `json:"subscription_id,omitempty"`
	VerificationCode         *string                 `json:"verification_code,omitempty"`
}
