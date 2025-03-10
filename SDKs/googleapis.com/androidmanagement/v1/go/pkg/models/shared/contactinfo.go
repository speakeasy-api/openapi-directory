// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// ContactInfo - Contact details for managed Google Play enterprises.
type ContactInfo struct {
	// Email address for a point of contact, which will be used to send important announcements related to managed Google Play.
	ContactEmail *string `json:"contactEmail,omitempty"`
	// The email of the data protection officer. The email is validated but not verified.
	DataProtectionOfficerEmail *string `json:"dataProtectionOfficerEmail,omitempty"`
	// The name of the data protection officer.
	DataProtectionOfficerName *string `json:"dataProtectionOfficerName,omitempty"`
	// The phone number of the data protection officer The phone number is validated but not verified.
	DataProtectionOfficerPhone *string `json:"dataProtectionOfficerPhone,omitempty"`
	// The email of the EU representative. The email is validated but not verified.
	EuRepresentativeEmail *string `json:"euRepresentativeEmail,omitempty"`
	// The name of the EU representative.
	EuRepresentativeName *string `json:"euRepresentativeName,omitempty"`
	// The phone number of the EU representative. The phone number is validated but not verified.
	EuRepresentativePhone *string `json:"euRepresentativePhone,omitempty"`
}
