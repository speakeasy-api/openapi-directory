package shared

import (
	"time"
)

type EditorialUpdatedContentRights struct {
	Countries *string `json:"countries,omitempty"`
}

// EditorialUpdatedContent
// Metadata about updated editorial content
type EditorialUpdatedContent struct {
	Aspect              *float64                       `json:"aspect,omitempty"`
	Assets              *EditorialAssets               `json:"assets,omitempty"`
	Byline              *string                        `json:"byline,omitempty"`
	Caption             *string                        `json:"caption,omitempty"`
	Categories          []EditorialCategory            `json:"categories,omitempty"`
	CommercialStatus    *interface{}                   `json:"commercial_status,omitempty"`
	CreatedTime         *time.Time                     `json:"created_time,omitempty"`
	DateTaken           *time.Time                     `json:"date_taken,omitempty"`
	Description         *string                        `json:"description,omitempty"`
	ID                  string                         `json:"id"`
	Keywords            []string                       `json:"keywords,omitempty"`
	Rights              *EditorialUpdatedContentRights `json:"rights,omitempty"`
	SpecialInstructions *string                        `json:"special_instructions,omitempty"`
	SupplierCode        *string                        `json:"supplier_code,omitempty"`
	Title               *string                        `json:"title,omitempty"`
	UpdatedTime         *time.Time                     `json:"updated_time,omitempty"`
	Updates             []string                       `json:"updates,omitempty"`
}
