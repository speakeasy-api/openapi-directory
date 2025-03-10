// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type TestPermissionsRequest struct {
	// The set of permissions to check for the 'resource'. Permissions with wildcards (such as '*' or 'storage.*') are not allowed.
	Permissions []string `json:"permissions,omitempty"`
}
