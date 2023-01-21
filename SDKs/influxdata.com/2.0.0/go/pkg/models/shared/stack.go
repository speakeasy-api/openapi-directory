package shared

import (
	"time"
)

type StackEventsResourcesAssociations struct {
	Kind     *TemplateKindEnum `json:"kind,omitempty"`
	MetaName *string           `json:"metaName,omitempty"`
}

type StackEventsResourcesLinks struct {
	Self *string `json:"self,omitempty"`
}

type StackEventsResources struct {
	APIVersion       *string                            `json:"apiVersion,omitempty"`
	Associations     []StackEventsResourcesAssociations `json:"associations,omitempty"`
	Kind             *TemplateKindEnum                  `json:"kind,omitempty"`
	Links            *StackEventsResourcesLinks         `json:"links,omitempty"`
	ResourceID       *string                            `json:"resourceID,omitempty"`
	TemplateMetaName *string                            `json:"templateMetaName,omitempty"`
}

type StackEvents struct {
	Description *string                `json:"description,omitempty"`
	EventType   *string                `json:"eventType,omitempty"`
	Name        *string                `json:"name,omitempty"`
	Resources   []StackEventsResources `json:"resources,omitempty"`
	Sources     []string               `json:"sources,omitempty"`
	UpdatedAt   *time.Time             `json:"updatedAt,omitempty"`
	Urls        []string               `json:"urls,omitempty"`
}

type Stack struct {
	CreatedAt *time.Time    `json:"createdAt,omitempty"`
	Events    []StackEvents `json:"events,omitempty"`
	ID        *string       `json:"id,omitempty"`
	OrgID     *string       `json:"orgID,omitempty"`
}
