package shared

// UpsSettingsResponseBody
// UPS account settings
type UpsSettingsResponseBody struct {
	AccountPostalCode                     *string                          `json:"account_postal_code,omitempty"`
	Invoice                               *UpsInvoice                      `json:"invoice,omitempty"`
	IsPrimaryAccount                      *bool                            `json:"is_primary_account,omitempty"`
	MailInnovationsCostCenter             *string                          `json:"mail_innovations_cost_center,omitempty"`
	MailInnovationsEndorsement            *AncillaryServiceEndorsementEnum `json:"mail_innovations_endorsement,omitempty"`
	Nickname                              *string                          `json:"nickname,omitempty"`
	PickupType                            *UpsPickupTypeEnum               `json:"pickup_type,omitempty"`
	UseCarbonNeutralShippingProgram       *bool                            `json:"use_carbon_neutral_shipping_program,omitempty"`
	UseConsolidationServices              *bool                            `json:"use_consolidation_services,omitempty"`
	UseGroundFreightPricing               *bool                            `json:"use_ground_freight_pricing,omitempty"`
	UseNegotiatedRates                    *bool                            `json:"use_negotiated_rates,omitempty"`
	UseOrderNumberOnMailInnovationsLabels *bool                            `json:"use_order_number_on_mail_innovations_labels,omitempty"`
}
