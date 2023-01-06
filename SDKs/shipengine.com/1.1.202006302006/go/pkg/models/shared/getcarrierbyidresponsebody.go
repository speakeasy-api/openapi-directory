package shared

// GetCarrierByIDResponseBodyCarrierAdvancedOption
// Advanced options that are specific to the carrier
type GetCarrierByIDResponseBodyCarrierAdvancedOption struct {
	DefaultValue *string `json:"default_value,omitempty"`
	Description  *string `json:"description,omitempty"`
	Name         *string `json:"name,omitempty"`
}

// GetCarrierByIDResponseBodyPackageType
// A package type that a carrier supports for shipment.
type GetCarrierByIDResponseBodyPackageType struct {
	Description *string     `json:"description,omitempty"`
	Dimensions  *Dimensions `json:"dimensions,omitempty"`
	Name        string      `json:"name"`
	PackageCode string      `json:"package_code"`
	PackageID   *string     `json:"package_id,omitempty"`
}

// GetCarrierByIDResponseBodyService
// A service offered by the carrier
type GetCarrierByIDResponseBodyService struct {
	CarrierCode             *string                `json:"carrier_code,omitempty"`
	CarrierID               map[string]interface{} `json:"carrier_id,omitempty"`
	Domestic                *bool                  `json:"domestic,omitempty"`
	International           *bool                  `json:"international,omitempty"`
	IsMultiPackageSupported *bool                  `json:"is_multi_package_supported,omitempty"`
	Name                    *string                `json:"name,omitempty"`
	ServiceCode             *string                `json:"service_code,omitempty"`
}

// GetCarrierByIDResponseBody
// A carrier object that represents a provider such as UPS, USPS, DHL, etc
// that has been tied to the current account.
type GetCarrierByIDResponseBody struct {
	AccountNumber                     *string                                           `json:"account_number,omitempty"`
	Balance                           *float64                                          `json:"balance,omitempty"`
	CarrierCode                       *string                                           `json:"carrier_code,omitempty"`
	CarrierID                         map[string]interface{}                            `json:"carrier_id,omitempty"`
	FriendlyName                      *string                                           `json:"friendly_name,omitempty"`
	HasMultiPackageSupportingServices *bool                                             `json:"has_multi_package_supporting_services,omitempty"`
	Nickname                          *string                                           `json:"nickname,omitempty"`
	Options                           []GetCarrierByIDResponseBodyCarrierAdvancedOption `json:"options,omitempty"`
	Packages                          []GetCarrierByIDResponseBodyPackageType           `json:"packages,omitempty"`
	Primary                           *bool                                             `json:"primary,omitempty"`
	RequiresFundedAmount              *bool                                             `json:"requires_funded_amount,omitempty"`
	Services                          []GetCarrierByIDResponseBodyService               `json:"services,omitempty"`
	SupportsLabelMessages             *bool                                             `json:"supports_label_messages,omitempty"`
}
