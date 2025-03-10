// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"time"
)

// ContentV1Content - OK
type ContentV1Content struct {
	// The SID of the [Account](https://www.twilio.com/docs/usage/api/account) that created Content resource.
	AccountSid *string `json:"account_sid,omitempty"`
	// The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
	DateCreated *time.Time `json:"date_created,omitempty"`
	// The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
	DateUpdated *time.Time `json:"date_updated,omitempty"`
	// A string name used to describe the Content resource. Not visible to the end recipient.
	FriendlyName *string `json:"friendly_name,omitempty"`
	// Two-letter (ISO 639-1) language code (e.g., en) identifying the language the Content resource is in.
	Language *string `json:"language,omitempty"`
	// A list of links related to the Content resource, such as approval_fetch and approval_create
	Links map[string]interface{} `json:"links,omitempty"`
	// The unique string that that we created to identify the Content resource.
	Sid *string `json:"sid,omitempty"`
	// The [Content types](https://www.twilio.com/docs/content-api/content-types-overview) (e.g. twilio/text) for this Content resource.
	Types interface{} `json:"types,omitempty"`
	// The URL of the resource, relative to `https://content.twilio.com`.
	URL *string `json:"url,omitempty"`
	// Defines the default placeholder values for variables included in the Content resource. e.g. {"1": "Customer_Name"}.
	Variables interface{} `json:"variables,omitempty"`
}
