package shared

// TaxIds
// The tax IDs that a Location is operating under.
type TaxIds struct {
	EuVat   *string `json:"eu_vat,omitempty"`
	FrNaf   *string `json:"fr_naf,omitempty"`
	FrSiret *string `json:"fr_siret,omitempty"`
}
