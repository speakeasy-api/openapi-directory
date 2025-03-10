// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"time"
)

// ServerlessV1ServiceFunction - Created
type ServerlessV1ServiceFunction struct {
	// The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Function resource.
	AccountSid *string `json:"account_sid,omitempty"`
	// The date and time in GMT when the Function resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
	DateCreated *time.Time `json:"date_created,omitempty"`
	// The date and time in GMT when the Function resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
	DateUpdated *time.Time `json:"date_updated,omitempty"`
	// The string that you assigned to describe the Function resource. It can be a maximum of 255 characters.
	FriendlyName *string `json:"friendly_name,omitempty"`
	// The URLs of nested resources of the Function resource.
	Links map[string]interface{} `json:"links,omitempty"`
	// The SID of the Service that the Function resource is associated with.
	ServiceSid *string `json:"service_sid,omitempty"`
	// The unique string that we created to identify the Function resource.
	Sid *string `json:"sid,omitempty"`
	// The absolute URL of the Function resource.
	URL *string `json:"url,omitempty"`
}
