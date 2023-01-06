package shared

type LicenseEditorialVideoContentLicenseEnum string

const (
	LicenseEditorialVideoContentLicenseEnumPremierEditorialVideoDigitalOnly             LicenseEditorialVideoContentLicenseEnum = "premier_editorial_video_digital_only"
	LicenseEditorialVideoContentLicenseEnumPremierEditorialVideoAllMedia                LicenseEditorialVideoContentLicenseEnum = "premier_editorial_video_all_media"
	LicenseEditorialVideoContentLicenseEnumPremierEditorialVideoAllMediaSingleTerritory LicenseEditorialVideoContentLicenseEnum = "premier_editorial_video_all_media_single_territory"
	LicenseEditorialVideoContentLicenseEnumPremierEditorialVideoComp                    LicenseEditorialVideoContentLicenseEnum = "premier_editorial_video_comp"
)

type LicenseEditorialVideoContentSizeEnum string

const (
	LicenseEditorialVideoContentSizeEnumOriginal LicenseEditorialVideoContentSizeEnum = "original"
)

// LicenseEditorialVideoContent
// Individual editorial video content to license
type LicenseEditorialVideoContent struct {
	EditorialID string                                  `json:"editorial_id"`
	License     LicenseEditorialVideoContentLicenseEnum `json:"license"`
	Metadata    map[string]interface{}                  `json:"metadata,omitempty"`
	Size        *LicenseEditorialVideoContentSizeEnum   `json:"size,omitempty"`
}
