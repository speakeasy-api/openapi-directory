package shared

// UpdateWageSettingRequest
// Represents an update request for the `WageSetting` object describing a `TeamMember`.
type UpdateWageSettingRequest struct {
	WageSetting WageSetting `json:"wage_setting"`
}
