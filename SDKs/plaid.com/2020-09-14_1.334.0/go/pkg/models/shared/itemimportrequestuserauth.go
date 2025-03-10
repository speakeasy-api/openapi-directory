// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// ItemImportRequestUserAuth - Object of user ID and auth token pair, permitting Plaid to aggregate a user’s accounts
type ItemImportRequestUserAuth struct {
	// Authorization token Plaid will use to aggregate this user’s accounts
	AuthToken string `json:"auth_token"`
	// Opaque user identifier
	UserID string `json:"user_id"`
}
