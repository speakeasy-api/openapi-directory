// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// ConfigureManagementSettingsRequestInput - Request for the `ConfigureManagementSettings` method.
type ConfigureManagementSettingsRequestInput struct {
	// Defines renewal, billing, and transfer settings for a `Registration`.
	ManagementSettings *ManagementSettingsInput `json:"managementSettings,omitempty"`
	// Required. The field mask describing which fields to update as a comma-separated list. For example, if only the transfer lock is being updated, the `update_mask` is `"transfer_lock_state"`.
	UpdateMask *string `json:"updateMask,omitempty"`
}
