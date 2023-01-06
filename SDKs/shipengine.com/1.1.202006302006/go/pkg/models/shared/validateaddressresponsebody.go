package shared

// ValidateAddressResponseBodyPartialAddress
// A complete or partial mailing address.
type ValidateAddressResponseBodyPartialAddress struct {
	AddressLine1                string                 `json:"address_line1"`
	AddressLine2                *string                `json:"address_line2,omitempty"`
	AddressLine3                *string                `json:"address_line3,omitempty"`
	AddressResidentialIndicator map[string]interface{} `json:"address_residential_indicator"`
	CityLocality                string                 `json:"city_locality"`
	CompanyName                 *string                `json:"company_name,omitempty"`
	CountryCode                 string                 `json:"country_code"`
	Name                        string                 `json:"name"`
	Phone                       string                 `json:"phone"`
	PostalCode                  string                 `json:"postal_code"`
	StateProvince               string                 `json:"state_province"`
}

// ValidateAddressResponseBody
// An address validation result
type ValidateAddressResponseBody struct {
	MatchedAddress  ValidateAddressResponseBodyPartialAddress `json:"matched_address"`
	Messages        []ResponseMessage                         `json:"messages"`
	OriginalAddress Address                                   `json:"original_address"`
	Status          AddressValidationStatusEnum               `json:"status"`
}
