package shared

type RedownloadImageSizeEnum string

const (
	RedownloadImageSizeEnumSmall     RedownloadImageSizeEnum = "small"
	RedownloadImageSizeEnumMedium    RedownloadImageSizeEnum = "medium"
	RedownloadImageSizeEnumHuge      RedownloadImageSizeEnum = "huge"
	RedownloadImageSizeEnumSupersize RedownloadImageSizeEnum = "supersize"
	RedownloadImageSizeEnumVector    RedownloadImageSizeEnum = "vector"
)

// RedownloadImage
// Data required to redownload an image
type RedownloadImage struct {
	AuthCookie       *Cookie                  `json:"auth_cookie,omitempty"`
	ShowModal        *bool                    `json:"show_modal,omitempty"`
	Size             *RedownloadImageSizeEnum `json:"size,omitempty"`
	VerificationCode *string                  `json:"verification_code,omitempty"`
}
