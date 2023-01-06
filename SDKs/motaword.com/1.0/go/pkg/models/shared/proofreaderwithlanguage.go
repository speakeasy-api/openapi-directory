package shared

type ProofreaderWithLanguage struct {
	FullName   *string  `json:"full_name,omitempty"`
	ID         *float64 `json:"id,omitempty"`
	Language   *string  `json:"language,omitempty"`
	VendorLink *string  `json:"vendor_link,omitempty"`
}
