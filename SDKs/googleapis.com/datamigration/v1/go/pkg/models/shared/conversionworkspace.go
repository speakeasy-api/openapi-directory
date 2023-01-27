package shared

// ConversionWorkspace
// The main conversion workspace resource entity.
type ConversionWorkspace struct {
	CreateTime            *string             `json:"createTime,omitempty"`
	Destination           *DatabaseEngineInfo `json:"destination,omitempty"`
	DisplayName           *string             `json:"displayName,omitempty"`
	GlobalSettings        map[string]string   `json:"globalSettings,omitempty"`
	HasUncommittedChanges *bool               `json:"hasUncommittedChanges,omitempty"`
	LatestCommitID        *string             `json:"latestCommitId,omitempty"`
	LatestCommitTime      *string             `json:"latestCommitTime,omitempty"`
	Name                  *string             `json:"name,omitempty"`
	Source                *DatabaseEngineInfo `json:"source,omitempty"`
	UpdateTime            *string             `json:"updateTime,omitempty"`
}

// ConversionWorkspaceInput
// The main conversion workspace resource entity.
type ConversionWorkspaceInput struct {
	Destination    *DatabaseEngineInfo `json:"destination,omitempty"`
	DisplayName    *string             `json:"displayName,omitempty"`
	GlobalSettings map[string]string   `json:"globalSettings,omitempty"`
	Name           *string             `json:"name,omitempty"`
	Source         *DatabaseEngineInfo `json:"source,omitempty"`
}
