package shared

// GoogleAnalyticsAdminV1betaProvisionAccountTicketRequestInput
// Request message for ProvisionAccountTicket RPC.
type GoogleAnalyticsAdminV1betaProvisionAccountTicketRequestInput struct {
	Account     *GoogleAnalyticsAdminV1betaAccountInput `json:"account,omitempty"`
	RedirectURI *string                                 `json:"redirectUri,omitempty"`
}
