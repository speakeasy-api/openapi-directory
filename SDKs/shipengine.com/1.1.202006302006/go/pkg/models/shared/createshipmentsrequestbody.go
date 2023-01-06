package shared

// CreateShipmentsRequestBodyInput
// A create shipments request body
type CreateShipmentsRequestBodyInput struct {
	Shipments []AddressValidatingShipmentInput `json:"shipments"`
}
