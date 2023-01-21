package shared

import (
	"time"
)

type DocumentMeta struct {
	CreatedAt   *time.Time `json:"createdAt,omitempty"`
	Description *string    `json:"description,omitempty"`
	Name        string     `json:"name"`
	TemplateID  *string    `json:"templateID,omitempty"`
	Type        *string    `json:"type,omitempty"`
	UpdatedAt   *time.Time `json:"updatedAt,omitempty"`
	Version     string     `json:"version"`
}

type DocumentMetaInput struct {
	Description *string `json:"description,omitempty"`
	Name        string  `json:"name"`
	TemplateID  *string `json:"templateID,omitempty"`
	Type        *string `json:"type,omitempty"`
	Version     string  `json:"version"`
}
