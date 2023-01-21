package shared

// AchDetails
// ACH-specific details about `BANK_ACCOUNT` type payments with the `transfer_type` of `ACH`.
type AchDetails struct {
	AccountNumberSuffix *string `json:"account_number_suffix,omitempty"`
	AccountType         *string `json:"account_type,omitempty"`
	RoutingNumber       *string `json:"routing_number,omitempty"`
}
