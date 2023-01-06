package shared

// DhlExpressSettingsResponseBody
// A DHL Express account settings
type DhlExpressSettingsResponseBody struct {
	IsPrimaryAccount                    *bool   `json:"is_primary_account,omitempty"`
	Nickname                            *string `json:"nickname,omitempty"`
	ShouldHideAccountNumberOnArchiveDoc *bool   `json:"should_hide_account_number_on_archive_doc,omitempty"`
}
