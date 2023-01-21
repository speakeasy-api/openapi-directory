package shared

// RetrieveWageSettingResponse
// Represents a response from a retrieve request containing the specified `WageSetting` object or error messages.
type RetrieveWageSettingResponse struct {
	Errors      []Error      `json:"errors,omitempty"`
	WageSetting *WageSetting `json:"wage_setting,omitempty"`
}
