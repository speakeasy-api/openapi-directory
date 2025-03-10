// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// ACLEntry - An entry for an Access Control list.
type ACLEntry struct {
	// The time when this access control entry expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.
	ExpirationTime *string `json:"expirationTime,omitempty"`
	// This is always `sql#aclEntry`.
	Kind *string `json:"kind,omitempty"`
	// Optional. A label to identify this entry.
	Name *string `json:"name,omitempty"`
	// The allowlisted value for the access control list.
	Value *string `json:"value,omitempty"`
}
