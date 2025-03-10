// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"time"
)

// VerifyV2ServiceAccessToken - Created
type VerifyV2ServiceAccessToken struct {
	// The unique SID identifier of the Account.
	AccountSid *string `json:"account_sid,omitempty"`
	// The date that this access token was created, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
	DateCreated *time.Time `json:"date_created,omitempty"`
	// The unique external identifier for the Entity of the Service.
	EntityIdentity *string `json:"entity_identity,omitempty"`
	// A human readable description of this factor, up to 64 characters. For a push factor, this can be the device's name.
	FactorFriendlyName *string                         `json:"factor_friendly_name,omitempty"`
	FactorType         *AccessTokenEnumFactorTypesEnum `json:"factor_type,omitempty"`
	// The unique SID identifier of the Verify Service.
	ServiceSid *string `json:"service_sid,omitempty"`
	// A 34 character string that uniquely identifies this Access Token.
	Sid *string `json:"sid,omitempty"`
	// The access token generated for enrollment, this is an encrypted json web token.
	Token *string `json:"token,omitempty"`
	// How long, in seconds, the access token is valid. Max: 5 minutes
	TTL *int64 `json:"ttl,omitempty"`
	// The URL of this resource.
	URL *string `json:"url,omitempty"`
}
