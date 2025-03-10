// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// RoleAssignmentRequest - A set of roles and a set of principals to which the roles should be granted.
type RoleAssignmentRequest struct {
	Principals []string `json:"principals"`
	Roles      []string `json:"roles"`
}
