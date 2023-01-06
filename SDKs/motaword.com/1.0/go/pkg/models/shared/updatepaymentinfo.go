package shared

type UpdatePaymentInfo struct {
	Bin                     *string `json:"bin,omitempty"`
	SaveAsCorporatePrimary  *bool   `json:"save_as_corporate_primary,omitempty"`
	ShareWithCorporateUsers *bool   `json:"share_with_corporate_users,omitempty"`
	StripeToken             *string `json:"stripeToken,omitempty"`
}
