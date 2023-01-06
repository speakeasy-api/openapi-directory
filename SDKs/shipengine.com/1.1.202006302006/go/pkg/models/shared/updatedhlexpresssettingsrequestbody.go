package shared

// UpdateDhlExpressSettingsRequestBody
// A DHL Express account settings
type UpdateDhlExpressSettingsRequestBody struct {
	IsPrimaryAccount                    *bool   `json:"is_primary_account,omitempty"`
	Nickname                            *string `json:"nickname,omitempty"`
	ShouldHideAccountNumberOnArchiveDoc *bool   `json:"should_hide_account_number_on_archive_doc,omitempty"`
}
