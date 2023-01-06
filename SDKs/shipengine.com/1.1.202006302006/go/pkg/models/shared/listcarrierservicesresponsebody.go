package shared

// ListCarrierServicesResponseBodyService
// A service offered by the carrier
type ListCarrierServicesResponseBodyService struct {
	CarrierCode             *string                `json:"carrier_code,omitempty"`
	CarrierID               map[string]interface{} `json:"carrier_id,omitempty"`
	Domestic                *bool                  `json:"domestic,omitempty"`
	International           *bool                  `json:"international,omitempty"`
	IsMultiPackageSupported *bool                  `json:"is_multi_package_supported,omitempty"`
	Name                    *string                `json:"name,omitempty"`
	ServiceCode             *string                `json:"service_code,omitempty"`
}

// ListCarrierServicesResponseBody
// A carrier list services response body
type ListCarrierServicesResponseBody struct {
	Services []ListCarrierServicesResponseBodyService `json:"services,omitempty"`
}
