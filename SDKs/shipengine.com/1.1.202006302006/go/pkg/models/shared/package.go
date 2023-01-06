package shared

// PackageMonetaryValue
// A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
type PackageMonetaryValue struct {
	Amount   float64      `json:"amount"`
	Currency CurrencyEnum `json:"currency"`
}

// PackageInput
// A package associated with a [shipping label](https://www.shipengine.com/docs/labels/create-a-label/)
type PackageInput struct {
	Dimensions        *Dimensions           `json:"dimensions,omitempty"`
	ExternalPackageID *string               `json:"external_package_id,omitempty"`
	InsuredValue      *PackageMonetaryValue `json:"insured_value,omitempty"`
	LabelMessages     *LabelMessages        `json:"label_messages,omitempty"`
	PackageCode       *string               `json:"package_code,omitempty"`
	Weight            Weight                `json:"weight"`
}

// Package
// A package associated with a [shipping label](https://www.shipengine.com/docs/labels/create-a-label/)
type Package struct {
	Dimensions        *Dimensions            `json:"dimensions,omitempty"`
	ExternalPackageID *string                `json:"external_package_id,omitempty"`
	InsuredValue      *PackageMonetaryValue  `json:"insured_value,omitempty"`
	LabelMessages     *LabelMessages         `json:"label_messages,omitempty"`
	PackageCode       *string                `json:"package_code,omitempty"`
	TrackingNumber    map[string]interface{} `json:"tracking_number,omitempty"`
	Weight            Weight                 `json:"weight"`
}
