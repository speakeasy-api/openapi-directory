package shared

// UpdateShipmentRequestBody
// The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
type UpdateShipmentRequestBody struct {
	ValidateAddress map[string]interface{} `json:"validate_address,omitempty"`
}
