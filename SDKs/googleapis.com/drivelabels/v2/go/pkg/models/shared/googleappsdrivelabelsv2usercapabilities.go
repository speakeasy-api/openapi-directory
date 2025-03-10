// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// GoogleAppsDriveLabelsV2UserCapabilities - The capabilities of a user.
type GoogleAppsDriveLabelsV2UserCapabilities struct {
	// Output only. Whether the user is allowed access to the label manager.
	CanAccessLabelManager *bool `json:"canAccessLabelManager,omitempty"`
	// Output only. Whether the user is an administrator for the shared labels feature.
	CanAdministrateLabels *bool `json:"canAdministrateLabels,omitempty"`
	// Output only. Whether the user is allowed to create new admin labels.
	CanCreateAdminLabels *bool `json:"canCreateAdminLabels,omitempty"`
	// Output only. Whether the user is allowed to create new shared labels.
	CanCreateSharedLabels *bool `json:"canCreateSharedLabels,omitempty"`
	// Output only. Resource name for the user capabilities.
	Name *string `json:"name,omitempty"`
}
