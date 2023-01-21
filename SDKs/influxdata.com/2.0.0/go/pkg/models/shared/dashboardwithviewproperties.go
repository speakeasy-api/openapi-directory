package shared

import (
	"time"
)

type DashboardWithViewPropertiesLinks struct {
	Cells   *string `json:"cells,omitempty"`
	Labels  *string `json:"labels,omitempty"`
	Members *string `json:"members,omitempty"`
	Org     *string `json:"org,omitempty"`
	Owners  *string `json:"owners,omitempty"`
	Self    *string `json:"self,omitempty"`
}

type DashboardWithViewPropertiesMeta struct {
	CreatedAt *time.Time `json:"createdAt,omitempty"`
	UpdatedAt *time.Time `json:"updatedAt,omitempty"`
}

type DashboardWithViewProperties struct {
	Cells       []CellWithViewProperties          `json:"cells,omitempty"`
	Description *string                           `json:"description,omitempty"`
	ID          *string                           `json:"id,omitempty"`
	Labels      []Label                           `json:"labels,omitempty"`
	Links       *DashboardWithViewPropertiesLinks `json:"links,omitempty"`
	Meta        *DashboardWithViewPropertiesMeta  `json:"meta,omitempty"`
	Name        string                            `json:"name"`
	OrgID       string                            `json:"orgID"`
}
