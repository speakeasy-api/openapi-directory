// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest - Deletes one of more Label Permissions.
type GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest struct {
	// Required. The request message specifying the resources to update.
	Requests []GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest `json:"requests,omitempty"`
	// Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. If this is set, the use_admin_access field in the DeleteLabelPermissionRequest messages must either be empty or match this field.
	UseAdminAccess *bool `json:"useAdminAccess,omitempty"`
}
