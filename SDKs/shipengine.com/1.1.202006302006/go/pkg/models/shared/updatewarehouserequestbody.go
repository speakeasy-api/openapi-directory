package shared

// UpdateWarehouseRequestBodyInput
// A warehouse
type UpdateWarehouseRequestBodyInput struct {
	Name          string   `json:"name"`
	OriginAddress Address  `json:"origin_address"`
	ReturnAddress *Address `json:"return_address,omitempty"`
}
