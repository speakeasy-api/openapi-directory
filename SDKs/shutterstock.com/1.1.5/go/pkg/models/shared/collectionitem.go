package shared

import (
	"time"
)

// CollectionItem
// Metadata about an item that is part of a collection
type CollectionItem struct {
	AddedTime *time.Time `json:"added_time,omitempty"`
	ID        string     `json:"id"`
	MediaType *string    `json:"media_type,omitempty"`
}
