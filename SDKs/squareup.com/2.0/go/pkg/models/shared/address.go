package shared

// Address
// Represents a postal address in a country. The address format is based
// on an [open-source library from Google](https://github.com/google/libaddressinput). For more information,
// see [AddressValidationMetadata](https://github.com/google/libaddressinput/wiki/AddressValidationMetadata).
// This format has dedicated fields for four address components: postal code,
// locality (city), administrative district (state, prefecture, or province), and
// sublocality (town or village). These components have dedicated fields in the
// `Address` object because software sometimes behaves differently based on them.
// For example, sales tax software may charge different amounts of sales tax
// based on the postal code, and some software is only available in
// certain states due to compliance reasons.
//
// For the remaining address components, the `Address` type provides the
// `address_line_1` and `address_line_2` fields for free-form data entry.
// These fields are free-form because the remaining address components have
// too many variations around the world and typical software does not parse
// these components. These fields enable users to enter anything they want.
//
// Note that, in the current implementation, all other `Address` type fields are blank.
// These include `address_line_3`, `sublocality_2`, `sublocality_3`,
// `administrative_district_level_2`, `administrative_district_level_3`,
// `first_name`, `last_name`, and `organization`.
//
// When it comes to localization, the seller's language preferences
// (see [Language preferences](https://developer.squareup.com/docs/locations-api#location-specific-and-seller-level-language-preferences))
// are ignored for addresses. Even though Square products (such as Square Point of Sale
// and the Seller Dashboard) mostly use a seller's language preference in
// communication, when it comes to addresses, they will use English for a US address,
// Japanese for an address in Japan, and so on.
type Address struct {
	AddressLine1                 *string `json:"address_line_1,omitempty"`
	AddressLine2                 *string `json:"address_line_2,omitempty"`
	AddressLine3                 *string `json:"address_line_3,omitempty"`
	AdministrativeDistrictLevel1 *string `json:"administrative_district_level_1,omitempty"`
	AdministrativeDistrictLevel2 *string `json:"administrative_district_level_2,omitempty"`
	AdministrativeDistrictLevel3 *string `json:"administrative_district_level_3,omitempty"`
	Country                      *string `json:"country,omitempty"`
	FirstName                    *string `json:"first_name,omitempty"`
	LastName                     *string `json:"last_name,omitempty"`
	Locality                     *string `json:"locality,omitempty"`
	Organization                 *string `json:"organization,omitempty"`
	PostalCode                   *string `json:"postal_code,omitempty"`
	Sublocality                  *string `json:"sublocality,omitempty"`
	Sublocality2                 *string `json:"sublocality_2,omitempty"`
	Sublocality3                 *string `json:"sublocality_3,omitempty"`
}
