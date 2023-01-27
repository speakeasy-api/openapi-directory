package shared

type FlexV1Gooddata struct {
	BaseURL       *string `json:"base_url,omitempty"`
	SessionExpiry *string `json:"session_expiry,omitempty"`
	SessionID     *string `json:"session_id,omitempty"`
	URL           *string `json:"url,omitempty"`
	WorkspaceID   *string `json:"workspace_id,omitempty"`
}
