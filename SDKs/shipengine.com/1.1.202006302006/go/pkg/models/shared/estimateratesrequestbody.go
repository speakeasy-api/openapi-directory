package shared

// EstimateRatesRequestBody
// A rate estimate request body
type EstimateRatesRequestBody struct {
	AddressResidentialIndicator *AddressResidentialIndicatorEnum `json:"address_residential_indicator,omitempty"`
	Confirmation                *DeliveryConfirmationEnum        `json:"confirmation,omitempty"`
	Dimensions                  *Dimensions                      `json:"dimensions,omitempty"`
	FromCityLocality            string                           `json:"from_city_locality"`
	FromCountryCode             string                           `json:"from_country_code"`
	FromPostalCode              string                           `json:"from_postal_code"`
	FromStateProvince           *string                          `json:"from_state_province,omitempty"`
	ShipDate                    map[string]interface{}           `json:"ship_date"`
	ToCityLocality              string                           `json:"to_city_locality"`
	ToCountryCode               string                           `json:"to_country_code"`
	ToPostalCode                string                           `json:"to_postal_code"`
	ToStateProvince             string                           `json:"to_state_province"`
	Weight                      Weight                           `json:"weight"`
}
