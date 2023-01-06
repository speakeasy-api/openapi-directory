package shared

import (
	"time"
)

// ListWarehousesResponseBodyWarehouse
// A warehouse
type ListWarehousesResponseBodyWarehouse struct {
	CreatedAt     *time.Time             `json:"created_at,omitempty"`
	Name          *string                `json:"name,omitempty"`
	OriginAddress *Address               `json:"origin_address,omitempty"`
	ReturnAddress *Address               `json:"return_address,omitempty"`
	WarehouseID   map[string]interface{} `json:"warehouse_id,omitempty"`
}

// ListWarehousesResponseBody
// A warehouse list response body
type ListWarehousesResponseBody struct {
	Warehouses []ListWarehousesResponseBodyWarehouse `json:"warehouses"`
}
