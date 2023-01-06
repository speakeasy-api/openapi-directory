package shared

// CreatePackageTypeResponseBody
// A package type that a carrier supports for shipment.
type CreatePackageTypeResponseBody struct {
	Description *string     `json:"description,omitempty"`
	Dimensions  *Dimensions `json:"dimensions,omitempty"`
	Name        string      `json:"name"`
	PackageCode string      `json:"package_code"`
	PackageID   *string     `json:"package_id,omitempty"`
}
