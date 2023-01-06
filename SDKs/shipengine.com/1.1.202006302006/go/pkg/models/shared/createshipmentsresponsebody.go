package shared

// CreateShipmentsResponseBody
// A create shipments response body
type CreateShipmentsResponseBody struct {
	HasErrors bool                        `json:"has_errors"`
	Shipments []CreateAndValidateShipment `json:"shipments"`
}
