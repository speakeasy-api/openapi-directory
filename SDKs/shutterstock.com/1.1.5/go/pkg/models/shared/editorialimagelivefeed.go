package shared

import (
	"time"
)

// EditorialImageLivefeed
// Metadata about editorial livefeed
type EditorialImageLivefeed struct {
	CoverItem      *EditorialCoverItem `json:"cover_item,omitempty"`
	CreatedTime    *time.Time          `json:"created_time,omitempty"`
	ID             string              `json:"id"`
	Name           string              `json:"name"`
	TotalItemCount int64               `json:"total_item_count"`
}
