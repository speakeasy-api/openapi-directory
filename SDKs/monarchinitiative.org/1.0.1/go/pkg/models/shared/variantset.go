package shared

import (
	"time"
)

type VariantSet struct {
	Body       string     `json:"body"`
	Category   *string    `json:"category,omitempty"`
	CategoryID *int64     `json:"category_id,omitempty"`
	ID         *int64     `json:"id,omitempty"`
	PubDate    *time.Time `json:"pub_date,omitempty"`
	Title      string     `json:"title"`
}
