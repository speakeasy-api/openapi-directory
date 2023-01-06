package shared

import (
	"time"
)

// CreateWarehouseResponseBody
// A warehouse
type CreateWarehouseResponseBody struct {
	CreatedAt     time.Time              `json:"created_at"`
	Name          string                 `json:"name"`
	OriginAddress Address                `json:"origin_address"`
	ReturnAddress Address                `json:"return_address"`
	WarehouseID   map[string]interface{} `json:"warehouse_id"`
}
