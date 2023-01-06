package shared

type LicenseEditorialContentSizeEnum string

const (
	LicenseEditorialContentSizeEnumSmall    LicenseEditorialContentSizeEnum = "small"
	LicenseEditorialContentSizeEnumMedium   LicenseEditorialContentSizeEnum = "medium"
	LicenseEditorialContentSizeEnumOriginal LicenseEditorialContentSizeEnum = "original"
)

// LicenseEditorialContent
// Individual editorial content to license
type LicenseEditorialContent struct {
	EditorialID string                           `json:"editorial_id"`
	License     string                           `json:"license"`
	Metadata    map[string]interface{}           `json:"metadata,omitempty"`
	Size        *LicenseEditorialContentSizeEnum `json:"size,omitempty"`
}
