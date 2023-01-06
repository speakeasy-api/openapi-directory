package shared

// UpdateShipmentResponseBody
// The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
type UpdateShipmentResponseBody struct {
	AddressValidation AddressValidationResult `json:"address_validation"`
	Errors            []string                `json:"errors"`
}
