// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// FirstLastNamePhoneCodedOut - Represents the output of inferring the LIKELY country and phone code from a personal name and phone number.
type FirstLastNamePhoneCodedOut struct {
	CountryIso2 *string `json:"countryIso2,omitempty"`
	// The first name (also known as given name)
	FirstName *string `json:"firstName,omitempty"`
	ID        *string `json:"id,omitempty"`
	// The normalized phone number, verified using libphonenumber.
	InternationalPhoneNumberVerified *string `json:"internationalPhoneNumberVerified,omitempty"`
	// The last name (also known as family name, or surname)
	LastName *string `json:"lastName,omitempty"`
	// The likely country of origin of the name.
	OriginCountryIso2 *string `json:"originCountryIso2,omitempty"`
	// The best alternative country of origin of the name.
	OriginCountryIso2Alt *string `json:"originCountryIso2Alt,omitempty"`
	// The phone country code of the phone number, verified using libphonenumber.
	PhoneCountryCode *int `json:"phoneCountryCode,omitempty"`
	// The best alternative phone country code of the phone number.
	PhoneCountryCodeAlt *int `json:"phoneCountryCodeAlt,omitempty"`
	// The likely country of the phone number.
	PhoneCountryIso2 *string `json:"phoneCountryIso2,omitempty"`
	// The best alternative country of the phone number.
	PhoneCountryIso2Alt *string `json:"phoneCountryIso2Alt,omitempty"`
	// The phone ISO2 country code, verified using libphonenumber.
	PhoneCountryIso2Verified *string `json:"phoneCountryIso2Verified,omitempty"`
	// The input phone number.
	PhoneNumber *string `json:"phoneNumber,omitempty"`
	// Higher score is better, but score is not normalized. Use calibratedProbability if available.
	Score  *float64 `json:"score,omitempty"`
	Script *string  `json:"script,omitempty"`
	// Indicates if the phone number could be positively verified using libphonenumber.
	Verified *bool `json:"verified,omitempty"`
}
