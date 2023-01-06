package shared

import (
	"time"
)

// Project
// Represents a project.
type Project struct {
	Created       *time.Time      `json:"created,omitempty"`
	Description   string          `json:"description"`
	DrModeEnabled *bool           `json:"drModeEnabled,omitempty"`
	ID            *string         `json:"id,omitempty"`
	LastModified  *time.Time      `json:"lastModified,omitempty"`
	Name          string          `json:"name"`
	Settings      ProjectSettings `json:"settings"`
	ThumbnailURI  *string         `json:"thumbnailUri,omitempty"`
}

// ProjectInput
// Represents a project.
type ProjectInput struct {
	Description string               `json:"description" form:"name=description"`
	Name        string               `json:"name" form:"name=name"`
	Settings    ProjectSettingsInput `json:"settings" form:"name=settings"`
}
