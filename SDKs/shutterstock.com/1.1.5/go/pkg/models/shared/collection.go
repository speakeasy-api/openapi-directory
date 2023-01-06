package shared

import (
	"time"
)

// Collection
// Metadata about a collection of assets
type Collection struct {
	CoverItem        *CollectionItem `json:"cover_item,omitempty"`
	CreatedTime      *time.Time      `json:"created_time,omitempty"`
	ID               string          `json:"id"`
	ItemsUpdatedTime *time.Time      `json:"items_updated_time,omitempty"`
	Name             string          `json:"name"`
	ShareCode        *string         `json:"share_code,omitempty"`
	ShareURL         *string         `json:"share_url,omitempty"`
	TotalItemCount   int64           `json:"total_item_count"`
	UpdatedTime      *time.Time      `json:"updated_time,omitempty"`
}
