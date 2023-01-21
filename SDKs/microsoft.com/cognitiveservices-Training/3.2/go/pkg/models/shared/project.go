package shared

import (
	"time"
)

type ProjectStatusEnum string

const (
	ProjectStatusEnumSucceeded ProjectStatusEnum = "Succeeded"
	ProjectStatusEnumImporting ProjectStatusEnum = "Importing"
	ProjectStatusEnumFailed    ProjectStatusEnum = "Failed"
)

// Project
// Represents a project.
type Project struct {
	Created       *time.Time         `json:"created,omitempty"`
	Description   string             `json:"description"`
	DrModeEnabled *bool              `json:"drModeEnabled,omitempty"`
	ID            *string            `json:"id,omitempty"`
	LastModified  *time.Time         `json:"lastModified,omitempty"`
	Name          string             `json:"name"`
	Settings      ProjectSettings    `json:"settings"`
	Status        *ProjectStatusEnum `json:"status,omitempty"`
	ThumbnailURI  *string            `json:"thumbnailUri,omitempty"`
}

// ProjectInput
// Represents a project.
type ProjectInput struct {
	Description string               `json:"description"`
	Name        string               `json:"name"`
	Settings    ProjectSettingsInput `json:"settings"`
	Status      *ProjectStatusEnum   `json:"status,omitempty"`
}
