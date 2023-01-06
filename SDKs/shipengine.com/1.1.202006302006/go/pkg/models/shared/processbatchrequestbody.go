package shared

import (
	"time"
)

// ProcessBatchRequestBody
// A process batch request body
type ProcessBatchRequestBody struct {
	LabelFormat map[string]interface{} `json:"label_format,omitempty"`
	LabelLayout map[string]interface{} `json:"label_layout,omitempty"`
	ShipDate    *time.Time             `json:"ship_date,omitempty"`
}
