package shared

type UpdatePaymentInfo struct {
	Bin                     *string `json:"bin,omitempty"`
	City                    *string `json:"city,omitempty"`
	Country                 *string `json:"country,omitempty"`
	Phone                   *string `json:"phone,omitempty"`
	SaveAsCorporatePrimary  *bool   `json:"save_as_corporate_primary,omitempty"`
	ShareWithCorporateUsers *bool   `json:"share_with_corporate_users,omitempty"`
	State                   *string `json:"state,omitempty"`
	Street                  *string `json:"street,omitempty"`
	StripeToken             *string `json:"stripeToken,omitempty"`
	Zip                     *string `json:"zip,omitempty"`
}
