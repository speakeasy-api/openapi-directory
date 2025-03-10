// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// APIV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping - Created
type APIV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping struct {
	// The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the CredentialListMapping resource.
	AccountSid *string `json:"account_sid,omitempty"`
	// The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
	DateCreated *string `json:"date_created,omitempty"`
	// The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
	DateUpdated *string `json:"date_updated,omitempty"`
	// The string that you assigned to describe the resource.
	FriendlyName *string `json:"friendly_name,omitempty"`
	// The unique string that that we created to identify the CredentialListMapping resource.
	Sid *string `json:"sid,omitempty"`
}
