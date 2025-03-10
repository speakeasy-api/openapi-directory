// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// Customer - Represents a Square customer profile in the Customer Directory of a Square seller.
type Customer struct {
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
	Address *Address `json:"address,omitempty"`
	// The birthday associated with the customer profile, in RFC 3339 format. The year is optional. The timezone and time are not allowed.
	// For example, `0000-09-21T00:00:00-00:00` represents a birthday on September 21 and `1998-09-21T00:00:00-00:00` represents a birthday on September 21, 1998.
	Birthday *string `json:"birthday,omitempty"`
	// Payment details of the credit, debit, and gift cards stored on file for the customer profile.
	//
	// DEPRECATED at version 2021-06-16. Replaced by calling [ListCards](https://developer.squareup.com/reference/square_2021-08-18/cards-api/list-cards) (for credit and debit cards on file)
	// or [ListGiftCards](https://developer.squareup.com/reference/square_2021-08-18/gift-cards-api/list-gift-cards) (for gift cards on file) and including the `customer_id` query parameter.
	// For more information, see [Migrate to the Cards API and Gift Cards API](https://developer.squareup.com/docs/customers-api/use-the-api/integrate-with-other-services#migrate-customer-cards).
	Cards []Card `json:"cards,omitempty"`
	// A business name associated with the customer profile.
	CompanyName *string `json:"company_name,omitempty"`
	// The timestamp when the customer profile was created, in RFC 3339 format.
	CreatedAt *string `json:"created_at,omitempty"`
	// A creation source represents the method used to create the
	// customer profile.
	CreationSource *string `json:"creation_source,omitempty"`
	// The email address associated with the customer profile.
	EmailAddress *string `json:"email_address,omitempty"`
	// The family (i.e., last) name associated with the customer profile.
	FamilyName *string `json:"family_name,omitempty"`
	// The given (i.e., first) name associated with the customer profile.
	GivenName *string `json:"given_name,omitempty"`
	// The IDs of customer groups the customer belongs to.
	GroupIds []string `json:"group_ids,omitempty"`
	// A unique Square-assigned ID for the customer profile.
	ID *string `json:"id,omitempty"`
	// A nickname for the customer profile.
	Nickname *string `json:"nickname,omitempty"`
	// A custom note associated with the customer profile.
	Note *string `json:"note,omitempty"`
	// The 11-digit phone number associated with the customer profile.
	PhoneNumber *string `json:"phone_number,omitempty"`
	// Represents communication preferences for the customer profile.
	Preferences *CustomerPreferences `json:"preferences,omitempty"`
	// An optional second ID used to associate the customer profile with an
	// entity in another system.
	ReferenceID *string `json:"reference_id,omitempty"`
	// The IDs of segments the customer belongs to.
	SegmentIds []string `json:"segment_ids,omitempty"`
	// The timestamp when the customer profile was last updated, in RFC 3339 format.
	UpdatedAt *string `json:"updated_at,omitempty"`
	// The Square-assigned version number of the customer profile. The version number is incremented each time an update is committed to the customer profile, except for changes to customer segment membership and cards on file.
	Version *int64 `json:"version,omitempty"`
}
