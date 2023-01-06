package shared

// PartialAddress
// A complete or partial mailing address.
type PartialAddress struct {
	AddressLine1                *string                `json:"address_line1,omitempty"`
	AddressLine2                *string                `json:"address_line2,omitempty"`
	AddressLine3                *string                `json:"address_line3,omitempty"`
	AddressResidentialIndicator map[string]interface{} `json:"address_residential_indicator,omitempty"`
	CityLocality                *string                `json:"city_locality,omitempty"`
	CompanyName                 *string                `json:"company_name,omitempty"`
	CountryCode                 *string                `json:"country_code,omitempty"`
	Name                        *string                `json:"name,omitempty"`
	Phone                       *string                `json:"phone,omitempty"`
	PostalCode                  *string                `json:"postal_code,omitempty"`
	StateProvince               *string                `json:"state_province,omitempty"`
}
