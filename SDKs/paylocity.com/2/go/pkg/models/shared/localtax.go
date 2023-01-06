package shared

// LocalTax
// The Local Tax model
type LocalTax struct {
	Exemptions   *float64 `json:"exemptions,omitempty"`
	Exemptions2  *float64 `json:"exemptions2,omitempty"`
	FilingStatus *string  `json:"filingStatus,omitempty"`
	ResidentPSD  *string  `json:"residentPSD,omitempty"`
	TaxCode      *string  `json:"taxCode,omitempty"`
	WorkPSD      *string  `json:"workPSD,omitempty"`
}
