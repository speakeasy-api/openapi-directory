package shared

// CreateWarehouseRequestBodyInput
// A warehouse
type CreateWarehouseRequestBodyInput struct {
	Name          string   `json:"name"`
	OriginAddress Address  `json:"origin_address"`
	ReturnAddress *Address `json:"return_address,omitempty"`
}
