package shared

// CatalogQuickAmountsSettings
// A parent Catalog Object model represents a set of Quick Amounts and the settings control the amounts.
type CatalogQuickAmountsSettings struct {
	Amounts                []CatalogQuickAmount `json:"amounts,omitempty"`
	EligibleForAutoAmounts *bool                `json:"eligible_for_auto_amounts,omitempty"`
	Option                 string               `json:"option"`
}
