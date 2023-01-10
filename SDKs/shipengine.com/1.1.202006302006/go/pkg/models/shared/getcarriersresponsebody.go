package shared

// GetCarriersResponseBodyCarrierCarrierAdvancedOption
// Advanced options that are specific to the carrier
type GetCarriersResponseBodyCarrierCarrierAdvancedOption struct {
	DefaultValue *string `json:"default_value,omitempty"`
	Description  *string `json:"description,omitempty"`
	Name         *string `json:"name,omitempty"`
}

// GetCarriersResponseBodyCarrierPackageType
// A package type that a carrier supports for shipment.
type GetCarriersResponseBodyCarrierPackageType struct {
	Description *string     `json:"description,omitempty"`
	Dimensions  *Dimensions `json:"dimensions,omitempty"`
	Name        string      `json:"name"`
	PackageCode string      `json:"package_code"`
	PackageID   *string     `json:"package_id,omitempty"`
}

// GetCarriersResponseBodyCarrierService
// A service offered by the carrier
type GetCarriersResponseBodyCarrierService struct {
	CarrierCode             *string                `json:"carrier_code,omitempty"`
	CarrierID               map[string]interface{} `json:"carrier_id,omitempty"`
	Domestic                *bool                  `json:"domestic,omitempty"`
	International           *bool                  `json:"international,omitempty"`
	IsMultiPackageSupported *bool                  `json:"is_multi_package_supported,omitempty"`
	Name                    *string                `json:"name,omitempty"`
	ServiceCode             *string                `json:"service_code,omitempty"`
}

// GetCarriersResponseBodyCarrier
// A carrier object that represents a provider such as UPS, USPS, DHL, etc
// that has been tied to the current account.
type GetCarriersResponseBodyCarrier struct {
	AccountNumber                     *string                                               `json:"account_number,omitempty"`
	Balance                           *float64                                              `json:"balance,omitempty"`
	CarrierCode                       *string                                               `json:"carrier_code,omitempty"`
	CarrierID                         map[string]interface{}                                `json:"carrier_id,omitempty"`
	FriendlyName                      *string                                               `json:"friendly_name,omitempty"`
	HasMultiPackageSupportingServices *bool                                                 `json:"has_multi_package_supporting_services,omitempty"`
	Nickname                          *string                                               `json:"nickname,omitempty"`
	Options                           []GetCarriersResponseBodyCarrierCarrierAdvancedOption `json:"options,omitempty"`
	Packages                          []GetCarriersResponseBodyCarrierPackageType           `json:"packages,omitempty"`
	Primary                           *bool                                                 `json:"primary,omitempty"`
	RequiresFundedAmount              *bool                                                 `json:"requires_funded_amount,omitempty"`
	Services                          []GetCarriersResponseBodyCarrierService               `json:"services,omitempty"`
	SupportsLabelMessages             *bool                                                 `json:"supports_label_messages,omitempty"`
}

// GetCarriersResponseBody
// An error response body
type GetCarriersResponseBody struct {
	Carriers  []GetCarriersResponseBodyCarrier `json:"carriers"`
	Errors    []Error                          `json:"errors"`
	RequestID string                           `json:"request_id"`
}
