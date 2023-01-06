package shared

// ListPackageTypesResponseBodyPackageType
// A package type that a carrier supports for shipment.
type ListPackageTypesResponseBodyPackageType struct {
	Description *string     `json:"description,omitempty"`
	Dimensions  *Dimensions `json:"dimensions,omitempty"`
	Name        string      `json:"name"`
	PackageCode string      `json:"package_code"`
	PackageID   *string     `json:"package_id,omitempty"`
}

// ListPackageTypesResponseBody
// A list package types response body
type ListPackageTypesResponseBody struct {
	Packages []ListPackageTypesResponseBodyPackageType `json:"packages,omitempty"`
}
