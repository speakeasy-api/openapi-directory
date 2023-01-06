package shared

// Brand
// OAuth brand data. NOTE: Only contains a portion of the data that describes a brand.
type Brand struct {
	ApplicationTitle *string `json:"applicationTitle,omitempty"`
	Name             *string `json:"name,omitempty"`
	OrgInternalOnly  *bool   `json:"orgInternalOnly,omitempty"`
	SupportEmail     *string `json:"supportEmail,omitempty"`
}

// BrandInput
// OAuth brand data. NOTE: Only contains a portion of the data that describes a brand.
type BrandInput struct {
	ApplicationTitle *string `json:"applicationTitle,omitempty"`
	SupportEmail     *string `json:"supportEmail,omitempty"`
}
