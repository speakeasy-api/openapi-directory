package shared

import (
	"time"
)

// EditorialLivefeed
// Metadata about editorial livefeed
type EditorialLivefeed struct {
	CoverItem      *EditorialCoverItem `json:"cover_item,omitempty"`
	CreatedTime    *time.Time          `json:"created_time,omitempty"`
	ID             string              `json:"id"`
	Name           string              `json:"name"`
	TotalItemCount int64               `json:"total_item_count"`
}
