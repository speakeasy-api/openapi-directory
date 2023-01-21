package shared

// UpdateWageSettingResponse
// Represents a response from an update request containing the updated `WageSetting` object
// or error messages.
type UpdateWageSettingResponse struct {
	Errors      []Error      `json:"errors,omitempty"`
	WageSetting *WageSetting `json:"wage_setting,omitempty"`
}
