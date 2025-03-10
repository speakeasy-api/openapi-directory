// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// OauthConnectionList - A list of OAuth Connection objects
type OauthConnectionList struct {
	// The contents of the list.
	Data []OauthConnection `json:"data"`
	// A pointer to a place in the list.
	NextCursor string `json:"next_cursor"`
}
