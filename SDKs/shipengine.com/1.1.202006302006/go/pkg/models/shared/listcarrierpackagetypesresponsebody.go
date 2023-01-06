package shared

// ListCarrierPackageTypesResponseBodyPackageType
// A package type that a carrier supports for shipment.
type ListCarrierPackageTypesResponseBodyPackageType struct {
	Description *string     `json:"description,omitempty"`
	Dimensions  *Dimensions `json:"dimensions,omitempty"`
	Name        string      `json:"name"`
	PackageCode string      `json:"package_code"`
	PackageID   *string     `json:"package_id,omitempty"`
}

// ListCarrierPackageTypesResponseBody
// A list carrier package types response body
type ListCarrierPackageTypesResponseBody struct {
	Packages []ListCarrierPackageTypesResponseBodyPackageType `json:"packages,omitempty"`
}
