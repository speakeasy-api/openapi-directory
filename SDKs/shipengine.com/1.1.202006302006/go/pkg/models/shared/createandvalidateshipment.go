package shared

// CreateAndValidateShipment
// The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
type CreateAndValidateShipment struct {
	AddressValidation *AddressValidationResult `json:"address_validation,omitempty"`
	Errors            []string                 `json:"errors,omitempty"`
}
