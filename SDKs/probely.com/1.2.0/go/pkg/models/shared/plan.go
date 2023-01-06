package shared

type Plan struct {
	AllowedScanProfiles []string               `json:"allowed_scan_profiles,omitempty"`
	ChargeModel         *PlanChargeModelEnum   `json:"charge_model,omitempty"`
	CurrencyCode        *string                `json:"currency_code,omitempty"`
	Description         *string                `json:"description,omitempty"`
	ID                  *string                `json:"id,omitempty"`
	IsTrial             *bool                  `json:"is_trial,omitempty"`
	Name                *string                `json:"name,omitempty"`
	Period              *string                `json:"period,omitempty"`
	PeriodUnit          *BillingPeriodUnitEnum `json:"period_unit,omitempty"`
	Price               *int64                 `json:"price,omitempty"`
}
