package shared

import (
	"time"
)

// FeaturedCollection
// Metadata about a featured collection
type FeaturedCollection struct {
	CoverItem        *FeaturedCollectionCoverItem `json:"cover_item,omitempty"`
	CreatedTime      *time.Time                   `json:"created_time,omitempty"`
	HeroItem         *FeaturedCollectionCoverItem `json:"hero_item,omitempty"`
	ID               string                       `json:"id"`
	ItemsUpdatedTime *time.Time                   `json:"items_updated_time,omitempty"`
	Name             string                       `json:"name"`
	ShareURL         *string                      `json:"share_url,omitempty"`
	TotalItemCount   int64                        `json:"total_item_count"`
	UpdatedTime      *time.Time                   `json:"updated_time,omitempty"`
}
