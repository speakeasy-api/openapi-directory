package shared

type CorporateAccount struct {
	Billing *BillingAddress `json:"billing,omitempty"`
	Domain  *string         `json:"domain,omitempty"`
	Email   *string         `json:"email,omitempty"`
	ID      *int64          `json:"id,omitempty"`
	Logo    *string         `json:"logo,omitempty"`
	Name    *string         `json:"name,omitempty"`
	WebSite *string         `json:"web_site,omitempty"`
}
